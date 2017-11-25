import React, { Component } from 'react';
import './filterPage.css';
import Checkbox from './Checkbox';
import Input from './Input';


class Filter extends Component{

  state = {
    formToggle: false,
  };

  handleDisplay = () => {
    this.setState({
      formToggle: this.state.formToggle ? false : true,
    });
  };

  render() {

    const displayer = {
      'display': this.state.formToggle ? 'inline' : 'none',
    };

    return (
      <div className="filter text-center">
        <div className="filterChoice">
          <p className="accrocheOne"><u><strong>TROUVEZ DES JOUEURS<br/>avec les mêmes habitudes de jeu que vous!</strong></u></p>
          <div className="inputPart">
            <Input />
            <div className="filtresBar">
              <p>FILTRES</p>
              <hr onClick={() => this.handleDisplay()} className="filtresDisplay" />
            </div>
            <div className="filtres" style={displayer}>
              <Checkbox/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
