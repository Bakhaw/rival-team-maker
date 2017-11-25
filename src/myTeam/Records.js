import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/social/person';

const Records = () => (
  <div className="d-flex">
    <List className="col-md-6">
      <ListItem style={{ color: '#75C8F4', fontSize: '.9em' }} primaryText="Joith, Rayman Legends" leftIcon={<ContentInbox />} />
      <ListItem style={{ color: '#FF9600', fontSize: '.9em' }} primaryText="Randahite, Steep" leftIcon={<ContentInbox />} />
      <ListItem style={{ color: '#75C8F4', fontSize: '.9em' }} primaryText="Stehders, Rainbow Six Siege" leftIcon={<ContentInbox />} />
    </List>
    <List className="col-md-6">
      <ListItem style={{ color: '#FF9600', fontSize: '.9em' }} primaryText="Steown, The Crew" leftIcon={<ContentInbox />} />
      <ListItem style={{ color: '#75C8F4', fontSize: '.9em' }} primaryText="Nolan, Just Dance" leftIcon={<ContentInbox />} />
      <ListItem style={{ color: '#FF9600', fontSize: '.9em' }} primaryText="Loauz, Rayman Legends" leftIcon={<ContentInbox />} />
    </List>
  </div>
);

export default Records;
