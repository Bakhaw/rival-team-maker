#!flask/bin/python
from flask import Flask
import json
# import pyodbc
import sqlite3
from flask import request
import pandas as pd
from scipy.spatial.distance import pdist, squareform,euclidean
import numpy as np

# sql_con = conn = pyodbc.connect(
#     r'DRIVER={ODBC Driver 13 for SQL Server};'
#     r'SERVER=DESKTOP-J2T7011;'
#     r'DATABASE=DW_HACKATHON;'
#     r'UID=Hackathon_SQL_Participant;'
#     r'PWD=Hackathon_PimpMyData#24')
conn = sqlite3.connect("rival_team_maker.db", check_same_thread=False)

class reg(object):
    def __init__(self, cursor, row):
        for (attr, val) in zip((d[0] for d in cursor.description), row) :
            setattr(self, attr, val)

app = Flask(__name__)

cursor = conn.execute("""SELECT * FROM dim_map;""")

dim_map = {}

for row in cursor.fetchall():
    row = reg(cursor, row)
    dim_map[row.map_id] = row

conn.commit()

base_community = 673943L

requests_cache = {}

def get_best_community(com_id):
    if com_id in requests_cache:
        return requests_cache[com_id]
    sql = """   SELECT oc.com_id, s.mapId, CAST(SUM(s.sum_score) AS FLOAT) / SUM(nb_played) score
                FROM dim_com_clusters oc
                INNER JOIN dim_com_clusters mc ON mc.com_id = 1004429 AND mc.cluster_hour_con=oc.cluster_hour_con AND mc.level_cat=oc.level_cat
                LEFT JOIN dim_community_scores s ON s.com_id = oc.com_id
                GROUP BY oc.com_id, s.mapId""".format(com_id=com_id)

    dataframe = pd.read_sql(sql, conn)
    dataframe.reset_index()
    df = dataframe.pivot(index='com_id', columns='mapId', values='score').reset_index().fillna(0)
    my_score = df[df['com_id'] == com_id]

    my_score_m = my_score.loc[:, my_score.columns != 'com_id'].as_matrix()[0]
    other_score_m = df.loc[:, df.columns != 'com_id'].as_matrix()

    distance = []
    for other in other_score_m:
        distance.append(euclidean(my_score_m, other))

    distance_with_com_id = zip([d[0] for d in df[['com_id']].values.tolist()], distance)

    sorted_com_id = sorted(distance_with_com_id, key=lambda (k, v): v, reverse=True)
    communities = [i for (i,v) in sorted_com_id]
    requests_cache[com_id] = communities
    return communities

@app.route('/api/search/<int:result_id>/', methods=['GET'])
def get_search_by_id(result_id):
    communities = get_best_community(base_community)
    if result_id < 0:
        result_id = len(communities) + result_id
    return get_community(communities[result_id%len(communities)])


@app.route('/api/search/', methods=['GET'])
def get_search():
    return json.dumps(get_best_community(base_community))

def get_community_s(community_id):
    sql = """
        SELECT *
        FROM dim_community_scores
        WHERE com_id = {com_id} AND sum_score > 0
        ORDER BY sum_score DESC;""".format(com_id=community_id)
    cursor = conn.execute(sql)
    resultset = copy.deepcopy(dim_map)
    map_id_set = set(dim_map.keys())
    for row in cursor.fetchall():
        row = reg(cursor, row)
        resultset[row.mapId] = row.sum_score / row.nb_played
        map_id_set.remove(row.mapId)
    for map_id in map_id_set:
        resultset[map_id] = 0
    result = []
    for k, v in resultset.iteritems():
        result.append({'x':str(k), 'y':v})
    return result

@app.route('/api/community/<community_id>/', methods=['GET'])
def get_community(community_id):
    desc = {
        'community_id':0
        , 'name': ''
        , 'nb_player':0
        , 'players':[]
        , 'scores':get_community_s(community_id)
        , 'connexions':get_connexions(community_id)
    }

    result = conn.execute("""   SELECT c.*, p.player_id
                                FROM dim_community c
                                LEFT JOIN dim_community_players p ON p.com_id=c.com_id
                                WHERE c.com_id={com_id};""".format(com_id=community_id))
    for row in result.fetchall():
        d = reg(result, row)
        desc['community_id'] = d.com_id
        desc['name'] = d.name
        desc['nb_player'] = desc['nb_player'] + 1
        desc['players'].append(d.player_id)
    cursor = conn.execute("""SELECT DISTINCT country FROM dim_community_country WHERE com_id={com_id}; """.format(com_id=community_id))
    country = []
    for row in cursor.fetchall():
        country.append(row[0])
    desc['country'] = country
    return json.dumps(desc)


def add_to_community(community_id, profile_id):
    sql = """SELECT player_id FROM dim_community_players WHERE com_id =""" + str(community_id)
    print sql
    cursor = conn.execute(sql)
    players_in_community = [row[0] for row in cursor]
    if profile_id in players_in_community:
        return
    sql = """INSERT INTO dim_community_players VALUES({com_id}, '{player_id}');""".format(com_id=community_id, player_id=profile_id)
    conn.execute(sql)
    return

def create_new_community(profile_id):
    sql = """ INSERT INTO dim_community
              SELECT MAX(com_id) + 1, 'New community' FROM dim_community;"""
    cursor = conn.execute(sql)
    cursor = conn.execute("""SELECT MAX(com_id) FROM dim_community;""")
    community = cursor.fetchone()[0]
    add_to_community(community, profile_id)
    return community

@app.route('/api/community/<int:community_id>/', methods=['POST'])
def post_community(community_id):
    profile_id = request.form['profile_id']
    sql = """SELECT player_id FROM dim_community_players WHERE com_id =""" + str(community_id)
    cursor = conn.execute(sql)
    row = cursor.fetchone()
    if cursor.fetchone() != None:
        add_to_community(community_id, profile_id)
    else:
        community_id = create_new_community(profile_id)
        add_to_community(community_id, row[0])
    conn.commit()
    return json.dumps({'community_id':community_id})

def remove_from_community(community_id, player_id):
    sql = """DELETE FROM dim_community_players WHERE com_id={com_id} AND player_id = '{player_id}';""".format(com_id=community_id, player_id=player_id)
    res = conn.execute(sql)
    return

def delete_community_from_db(community_id):
    sql = """SELECT COUNT(*) FROM dim_community_players WHERE com_id={com_id}""".format(com_id=community_id)
    cursor = conn.execute(sql)
    if cursor.fetchone()[0] == 0:
        conn.execute("""DELETE FROM dim_community WHERE com_id={com_id}""".format(com_id=community_id))

@app.route('/api/community/<int:community_id>/<player_id>/', methods=['DELETE'])
def delete_community(community_id, player_id):
    cursor = conn.execute("""SELECT COUNT(DISTINCT player_id) FROM dim_community_players WHERE com_id = {com_id};""".format(com_id=community_id))
    nb_player = cursor.fetchone()[0]
    cursor = conn.execute(
        """ SELECT com_id
            FROM dim_community_players
            WHERE com_id IN (SELECT DISTINCT com_id FROM dim_community_players WHERE player_id = '{player_id}')
                AND com_id != {com_id}
            GROUP BY com_id
            HAVING COUNT(*) = 1;""".format(
            com_id=community_id
            , player_id=player_id))

    has_other_unique_community = cursor.fetchone() is not None
    if nb_player > 1 or has_other_unique_community:
        remove_from_community(community_id, player_id)
        community_id = -1
        if nb_player == 1:
            delete_community_from_db(community_id)
    conn.commit()
    return json.dumps({'community_id':community_id})

import copy

@app.route('/api/community/<int:community_id>/stats/', methods=['GET'])
def get_community_stats(community_id):
    sql = """
        SELECT *
        FROM dim_community_scores
        WHERE com_id = {com_id} AND sum_score > 0
        ORDER BY sum_score DESC;""".format(com_id=community_id)
    cursor = conn.execute(sql)
    resultset = copy.deepcopy(dim_map)
    map_id_set = set(dim_map.keys())
    for row in cursor.fetchall():
        row = reg(cursor, row)
        resultset[row.mapId] = row.sum_score / row.nb_played
        map_id_set.remove(row.mapId)
    for map_id in map_id_set:
        resultset[map_id] = 0
    result = []
    for k, v in resultset.iteritems():
        result.append({'x':str(k), 'y':v})
    return json.dumps(resultset)

@app.route('/api/player/<player_id>/', methods=['GET'])
def get_playerid(player_id):
    sql = """SELECT DISTINCT com_id FROM dim_community_players WHERE player_id = '{player_id}';""".format(player_id=player_id)
    cursor = conn.execute(sql)
    desc = {
        'player_id':player_id
        , 'communities':[]
        , 'name':'John Doe'
    }
    for row in cursor:
        row = reg(cursor, row)
        desc['communities'].append(row.com_id)
    return json.dumps(desc)

def get_connexions(community_id):
    sql = """   SELECT week_day, hour, nb_connexions
                FROM dim_community_hours_connexions_light
                WHERE com_id = {com_id}
                ORDER BY week_day, hour;
        """.format(com_id=community_id)
    cursor = conn.execute(sql)

    res = [{'x':-1, 'y':0}]

    for row in cursor.fetchall():
        r = reg(cursor, row)
        index = r.week_day * 24 + r.hour
        while len(res) < index - 1:
            res.append({'x':len(res), 'y':0})
        res.append({'x':r.week_day + r.hour, 'y':r.nb_connexions})

    return res

if __name__ == '__main__':
    app.run(debug=True)
