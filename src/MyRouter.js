import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import User from './userPage/userPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Filter from './filterPage/filterPage';
import UserPage from './userPage/userPage';
import MyTeam from './myTeam/MyTeam';

class MyRouter extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
          <ul className="d-flex justify-content-around">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Rechercher</Link>
            </li>
            <li>
              <Link to="/players">Joueurs trouvés</Link>
            </li>
            <li>
              <Link to="/team">Mon équipe</Link>
            </li>
          </ul>

          {/* <Route path="/"/> */}
          <Route path="/search" component={Filter}/>
          <Route path="/players" component={UserPage}/>
          <Route path="/team" component={MyTeam}/>
        </div>
      </Router>
    </div>
    );
  }

}

export default MyRouter;
