#!flask/bin/python
from flask import Flask
import json
import pyodbc
from flask import request
import urllib2

class reg(object):
    def __init__(self, cursor, row):
        for (attr, val) in zip((d[0] for d in cursor.description), row) :
            setattr(self, attr, val)

sql_con = conn = pyodbc.connect(
    r'DRIVER={ODBC Driver 13 for SQL Server};'
    r'SERVER=DESKTOP-J2T7011;'
    r'DATABASE=DW_HACKATHON;'
    r'UID=Hackathon_SQL_Participant;'
    r'PWD=Hackathon_PimpMyData#24')

res = urllib2.urlopen('https://randomuser.me/api/')

cursor = conn.execute('SELECT DISTINCT player_id FROM [user].dim_community_players;')

for row in cursor.fetchall():
    row = reg(cursor, row)
    res = urllib2.urlopen('https://randomuser.me/api/')
    data = json.loads(res.read())
    pass



