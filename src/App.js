import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Filter from './filterPage/filterPage';
import MyTeam from './myTeam/MyTeam';

class App extends Component {
  render() {
    return (
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
