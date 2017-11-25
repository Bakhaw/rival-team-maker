import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

const Records = () => (
  <div className="d-flex">
    <List className="col-md-6">
      <ListItem primaryText="Joith" leftIcon={<ContentInbox />} />
      <ListItem primaryText="Randahite" leftIcon={<ActionGrade />} />
      <ListItem primaryText="Stehders" leftIcon={<ContentSend />} />
    </List>
    <List className="col-md-6">
      <ListItem primaryText="Steown" leftIcon={<ContentInbox />} />
      <ListItem primaryText="Nolan" leftIcon={<ActionGrade />} />
      <ListItem primaryText="Loauz" leftIcon={<ContentSend />} />
    </List>
  </div>
);

export default Records;
