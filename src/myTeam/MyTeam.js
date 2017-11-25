import React, { Component } from 'react';
import Members from './Members';
import Records from './Records';
import './MyTeam.css';

class MyTeam extends Component {

  render() {
    return (
      <div className="text-center myTeam">
        <div className="accrocheOne text-center">
          <h3>
            <strong>MON ÉQUIPE</strong>
          </h3>
        </div>
          <div className="accrocheOne container-fluid text-left">
            <h4>Liste des membres</h4>
            <Members />
          </div>
          <div className="d-flex">
            <div className="accrocheOne text-left col-md-6">
              <h4>Record des membres</h4>
              <Records />
            </div>
            <div className="accrocheOne text-left col-md-6">
              <h4>Statistiques de l'équipe par jeu</h4>
            </div>
          </div>
      </div>
    );
  }

}

export default MyTeam;
