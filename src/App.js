import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import User from './userPage/userPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './pageAcceuil/Home';
import Filter from './filterPage/filterPage';
import UserPage from './userPage/userPage';
import MyTeam from './myTeam/MyTeam';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Router>
            <div>
            <ul className="d-flex justify-content-around" style={{ marginTop: '10px' }}>
              <li>
                <Link style={{ color: 'white' }} to="/">Home</Link>
              </li>
              <li>
                <Link style={{ color: 'white' }} to="/search">Rechercher</Link>
              </li>
              <li>
                <Link style={{ color: 'white' }} to="/players">Joueurs trouvés</Link>
              </li>
              <li>
                <Link style={{ color: 'white' }} to="/team">Mon équipe</Link>
              </li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route path="/search" component={Filter}/>
            <Route path="/players" component={UserPage}/>
            <Route path="/team" component={MyTeam}/>
          </div>
        </Router>
          {/* <Filter />
          <UserPage />
          <MyTeam /> */}
        </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
