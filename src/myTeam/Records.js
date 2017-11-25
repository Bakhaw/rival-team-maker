import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/social/person';

const Records = () => (
  <div className="d-flex">
    <List className="col-md-6">
      <ListItem primaryText="Joith" leftIcon={<ContentInbox />} />
      <ListItem primaryText="Randahite" leftIcon={<ContentInbox />} />
      <ListItem primaryText="Stehders" leftIcon={<ContentInbox />} />
    </List>
    <List className="col-md-6">
      <ListItem primaryText="Steown" leftIcon={<ContentInbox />} />
      <ListItem primaryText="Nolan" leftIcon={<ContentInbox />} />
      <ListItem primaryText="Loauz" leftIcon={<ContentInbox />} />
    </List>
  </div>
);

export default Records;
