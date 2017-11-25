import React, { Component } from 'react';
import './filterPage.css';
import Checkbox from './Checkbox';

class Filter extends Component{
  render(){
    return(
      <div className="filter">
        <div className="filterChoice">
          <p className="accrocheOne"><u><strong>TROUVEZ DES JOUEURS<br/>avec les mêmes habitudes de jeu que vous!</strong></u></p>
          <div className="inputPart">
            <p className="accrocheTwo">Tapez votre ID joueur</p>
            <input className="input" placeholder="ID" />
            <button className="myButton">RECHERCHER</button>
            <hr/>
            <Checkbox/>
          </div>
        </div>
      </div>
    )
  }
}

export default Filter;
