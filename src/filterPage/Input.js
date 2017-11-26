import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
  color: '#63CBF2',
  border: '2px solid #63CBF2',
};

const Input = () => (
  <div>
    {/* <TextField hintText="Entrez votre ID" hintStyle={{ color: 'white' }} inputStyle={{ color: 'white' }}/> */}
    <div className="searchButton">
      <RaisedButton label="TROUVEZ DES JOUEURS" style={style} labelColor="#63CBF2"
                    buttonStyle={{ backgroundColor: 'black' }}/>
    </div>
  </div>
);

export default Input;
