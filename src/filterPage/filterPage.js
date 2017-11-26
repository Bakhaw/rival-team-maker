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

    // const displayer = {
    //   'display': this.state.formToggle ? 'inline' : 'none',
    // };

    return (
      <div className="filter text-center">
        <div className="filterChoice d-flex justify-content-center align-items-center">
          <div className="inputPart">
            <Input />
            {/* <div>
              <h5 onClick={() => this.handleDisplay()} className="filtresBar">Affiner ma recherche</h5>
            </div>
            {/* <div className="filtres" style={displayer}>
              <Checkbox/>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
