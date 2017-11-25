import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Filter from './filterPage/filterPage';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Filter />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
