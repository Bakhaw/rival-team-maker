import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';
import './App.css';

const items = [
  '#id: 20218498371',
  '#Plateforme: PS4',
  '#Jeux: Just Dance, The Crew',
];

class App extends Component {

  createCheckboxes = () => {
    items.map(this.createCheckbox);
  };

  createCheckbox = label => {
    <Checkbox label={label} handleCheckboxChange={this.toggleCheckbox} key={label} />;
  };

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  render() {
    return (
      <div className='container-fluid'>
        <h3>Rechercher un joueur</h3>
        <form onSubmit={this.handleFormSubmit}>
          {this.createCheckboxes()}
          <button className='btn btn-default' type='submit'>Rechercher</button>
        </form>
      </div>
    );
  }
}

export default App;
