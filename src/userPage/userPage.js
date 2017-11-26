import React, { Component } from 'react';
import './userPage.css';
import Joueur from './joueur.jpg';
import Gauche from './left.png';
import Droite from './right.png';
import Graph from './graph.png';
import UserButtons from './UserButtons';

class User extends Component{
  render () {

    return (
      <div className="userPage">
        <div className="backgroundFight">
          <h1 className="titleJoueur"><u>COMMUNAUTÉS TROUVÉES</u></h1>
          <div className="cadre">
            <div className="flechesImage d-flex justify-content-center align-items-center">
              <img src={Gauche} onClick={this.props.goLeft} alt="gauche" className="gauche"/>
              <img src={Joueur} alt="joueurPicture" className="joueurPicture"/>
              <img src={Droite} onClick={this.props.goRight} alt="droite" className="droite"/>
            </div>
            <ul className="d-flex flex-column justify-content-center align-items-center">
            {this.props.data.map((community, index) =>
              <li key={index}>
                <p>
                  {community.name}
                </p>
                <p>
                  {community.nb_player} joueur(s)
                </p>
                <p>
                  {community.country}
                </p>
                <p>Just Dance</p>
                <p>Horaires: 4 am</p>
              </li>
            )}
            </ul>

            <div className="graph">
              <img src={Graph} alt="graph" className="graphique"/>
            </div>
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
