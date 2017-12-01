import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './pageAcceuil/Home';
import Filter from './filterPage/filterPage';
import UserPage from './userPage/userPage';
import MyTeam from './myTeam/MyTeam';

var communityIndex = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  };

  goRight = ()  => {
    communityIndex++;
    fetch('http://0.0.0.0:5000/api/search/' + communityIndex)
      .then(data => data.json())
      .then(data => this.setState({ data: [data] }));
  };

  goLeft = ()  => {
    communityIndex--;
    fetch('http://0.0.0.0:5000/api/search/' + communityIndex)
      .then(data => data.json())
      .then(data => this.setState({ data: [data] }));
  };

  componentDidMount() {
    fetch('http://0.0.0.0:5000/api/search/' + communityIndex)
      .then(data => data.json())
      .then(data => this.setState({ data: [data] }));
  };

  render() {
    console.log(this.state.data);
    const myUserPage = (props) => {
      return (
        <UserPage
          data={this.state.data} goLeft={() => this.goLeft()} goRight={() => this.goRight()}
          {...props}
        />
      );
    };

    return (
      <div className="text-light">
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
            <Route path="/players" render={myUserPage}/>
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
