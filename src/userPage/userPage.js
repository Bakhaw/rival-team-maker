import React, { Component } from 'react';
import './userPage.css';
import Joueur from './joueur.jpg';
import Gauche from './left.png';
import Droite from './right.png';
import Graph from './graph.png';

class User extends Component{
  render(){
    return(
      <div className="userPage">
        <div className="backgroundFight">
          <h1 className="titleJoueur"><u>JOUEURS TROUVÉS</u></h1>
          <div className="cadre">
            <div className="flechesImage">
              <img src={Gauche} alt="gauche" className="gauche"/>
              <img src={Joueur} alt="joueurPicture" className="joueurPicture"/>
              <img src={Droite} alt="droite" className="droite"/>
            </div>
            <h3 className="User"> Jean-Patrick</h3>
            <p>France</p>
            <p>Rainbow 6</p>
            <p>Noob</p>
            <p>Horaires: 4 am</p>
            <div className="graph">
              <img src={Graph} alt="graph" className="graphique"/>
            </div>
            <div className="buttons">
              <button type="button" className="buttonBleu">Rejoindre</button>
              <button type="button" className="buttonOrange">Inviter</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default User;
