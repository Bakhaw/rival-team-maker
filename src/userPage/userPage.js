import React, { Component } from 'react';
import './userPage.css';
import Joueur from './joueur.jpg';
import Gauche from './left.png';
import Droite from './right.png';
import Graph from './graph.png';
import UserButtons from './UserButtons';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Graphique des scores',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

class User extends Component {
  render () {

    return (
      <div className="userPage">
        <div className="backgroundFight">
          <h1 className="titleJoueur"><u>COMMUNAUTÉS TROUVÉES</u></h1>
          <div className="cadre">
            <ul className="d-flex flex-column justify-content-center align-items-center">
            {this.props.data.map((community, index) =>
              <li key={index} className="d-flex">
                <div className="flechesImage d-flex flex-column justify-content-center align-items-center">
                  <img src={Joueur} alt="joueurPicture" className="joueurPicture"/>
                  <div className="d-flex">
                    <img src={Gauche} onClick={this.props.goLeft} alt="gauche" className="gauche"/>
                    <img src={Droite} onClick={this.props.goRight} alt="droite" className="droite"/>
                  </div>
                  <p>
                    {community.name}
                  </p>
                  <p>
                    {community.nb_player} joueur(s)
                  </p>
                  <p>
                    {community.country}
                  </p>
                  <p>{community.scores[3][1]}</p>
                </div>
                <div className="">
                  <div className="graphTeamContainer">
                    <div className="graphTeam">
                      <Bar
                      data={
                        {
                          labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                          datasets: [
                            {
                              label: 'Scores communauté',
                              backgroundColor: 'rgba(117, 200, 244, 0.4)',
                              borderColor: '#75c8f4',
                              borderWidth: 1,
                              hoverBackgroundColor: 'rgba(117, 200, 244, 0.4)',
                              hoverBorderColor: '#75c8f4',
                              data: community.scores,
                            },
                          ],
                        }
                      }
                      width={600}
                      height={300}
                      options={{
                        maintainAspectRatio: false,
                        legend: { display: true },
                      }}/>
                    </div>
                    <div className="graphMe">
                      <Bar
                      data={
                        {
                          labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                          datasets: [
                            {
                              label: 'Vos scores',
                              backgroundColor: 'rgba(255, 150, 0, 0.4)',
                              borderColor: '#ff9600',
                              borderWidth: 1,
                              hoverBackgroundColor: 'rgba(255, 150, 0, 0.4)',
                              hoverBorderColor: '#ff9600',
                              data: community.me.scores,
                            },
                          ],
                        }
                      }
                      width={600}
                      height={300}
                      style={{ backgroundColor: 'black' }}
                      options={{
                        maintainAspectRatio: false,
                        legend: { display: false },
                      }}/>
                    </div>
                  </div>
                  <div className="graphTeamContainer">
                    <div className="graphTeam">
                      <Bar
                      data={
                        {
                          labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', ''],
                          datasets: [
                            {
                              label: 'Connexions communauté',
                              backgroundColor: 'rgba(117, 200, 244, 0.4)',
                              borderColor: '#75c8f4',
                              borderWidth: 1,
                              hoverBackgroundColor: 'rgba(117, 200, 244, 0.4)',
                              hoverBorderColor: '#75c8f4',
                              data: community.connexions,
                            },
                          ],
                        }
                      }
                      width={600}
                      height={300}
                      options={{
                        maintainAspectRatio: false,
                        legend: { display: false },
                      }}/>
                    </div>
                    <div className="graphMe">
                      <Bar
                      data={
                        {
                          labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                   '', '', ''],
                          datasets: [
                            {
                              label: 'Vos connexions',
                              backgroundColor: 'rgba(255, 150, 0, 0.4)',
                              borderColor: '#ff9600',
                              borderWidth: 1,
                              hoverBackgroundColor: 'rgba(255, 150, 0, 0.4)',
                              hoverBorderColor: '#ff9600',
                              data: community.me.connexions,
                            },
                          ],
                        }
                      }
                      width={600}
                      height={300}
                      options={{
                        maintainAspectRatio: false,
                        legend: { display: true },
                      }}/>
                    </div>
                  </div>
                </div>
              </li>

            )}
            </ul>

            {/* <div className="graph">
              <img src={Graph} alt="graph" className="graphique"/>
            </div> */}
            <div className="buttons">
              <UserButtons />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default User;
