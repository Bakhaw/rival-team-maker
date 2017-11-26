import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './userPage.css';

const styleBlue = {
  margin: 12,
  color: '#63CBF2',
  border: '2px solid #63CBF2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const styleOrange = {
  margin: 12,
  color: '#FE9400',
  border: '2px solid #FE9400',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Input = () => (
  <div className="d-flex justify-content-center align-items-center">
    <div className="joinButton">
      <RaisedButton label="Rejoindre" style={styleBlue} labelColor="#63CBF2"
                    buttonStyle={{ backgroundColor: 'black' }}/>
    </div>
  </div>
);

export default Input;
