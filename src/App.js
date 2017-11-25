import React, { Component } from 'react';

import ubisoftLogo from './logo_ubisoft.png';
import Filter from './filterPage/filterPage';
import User from './userPage/userPage';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Filter from './filterPage/filterPage';
import MyTeam from './myTeam/MyTeam';


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={ubisoftLogo} className="App-logo" alt="logo ubisoft" />
          <h1>Hackathon</h1>
          <h1>PIMP THE DATA !</h1>
          <h1 className="App-title">UBISOFT X SIMPLON</h1>
          <p className="App-intro">#RivalMaker</p>
        </header>
        <Filter />
        <User/>

      <div>
        <MuiThemeProvider>
          <Filter />
          <p className="text-light text-center">Joueurs trouvés...</p>
          <MyTeam />
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
