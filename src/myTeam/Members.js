import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import userblue from './images/user_blue.png';
import userorange from './images/user_orange.png';
import './Members.css';

const StatsTeam = () => (
  <div>
    <List className="d-flex">
      <div className="col-md-3">
        <ListItem
          style={{ color: '#63CBF2' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              backgroundColor='transparent' src={userblue} />} >
          Joueur 1
        </ListItem>
        <ListItem
          style={{ color: '#FF9600' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#FF9600"
                              backgroundColor='transparent'  src={userorange} />} >
          Joueur 2
        </ListItem>
        <ListItem
          style={{ color: '#63CBF2' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#75C8F4"
                              backgroundColor='transparent'  src={userblue} />} >
          Joueur 3
        </ListItem>
        <ListItem
          style={{ color: '#FF9600' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#FF9600"
                              backgroundColor='transparent'  src={userorange} />} >
          Joueur 4
        </ListItem>
      </div>
      <div className="col-md-3">
        <ListItem
          style={{ color: '#63CBF2' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#75C8F4"
                              backgroundColor='transparent'  src={userblue} />} >
          Joueur 5
        </ListItem>
        <ListItem
          style={{ color: '#FF9600' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#FF9600"
                              backgroundColor='transparent'  src={userorange} />} >
          Joueur 6
        </ListItem>
        <ListItem
          style={{ color: '#63CBF2' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#75C8F4"
                              backgroundColor='transparent'  src={userblue} />} >
          Joueur 7
        </ListItem>
        <ListItem
          style={{ color: '#FF9600' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#FF9600"
                              backgroundColor='transparent'  src={userorange} />} >
          Joueur 8
        </ListItem>
      </div>
      <div className="col-md-3">
        <ListItem
          style={{ color: '#63CBF2' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#75C8F4"
                              backgroundColor='transparent'  src={userblue} />} >
          Joueur 9
        </ListItem>
        <ListItem
          style={{ color: '#FF9600' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#FF9600"
                              backgroundColor='transparent'  src={userorange} />} >
          Joueur 10
        </ListItem>
        <ListItem
          style={{ color: '#63CBF2' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#75C8F4"
                              backgroundColor='transparent'  src={userblue} />} >
          Joueur 11
        </ListItem>
        <ListItem
          style={{ color: '#FF9600' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#FF9600"
                              backgroundColor='transparent'  src={userorange} />} >
          Joueur 12
        </ListItem>
      </div>
      <div className="col-md-3">
        <ListItem
          style={{ color: '#63CBF2' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#75C8F4"
                              backgroundColor='transparent'  src={userblue} />} >
          Joueur 13
        </ListItem>
        <ListItem
          style={{ color: '#FF9600' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#FF9600"
                              backgroundColor='transparent'  src={userorange} />} >
          Joueur 14
        </ListItem>
        <ListItem
          style={{ color: '#63CBF2' }}
          disabled={true}
          leftAvatar={<Avatar style={{ borderRadius: '0' }}
                              color="#75C8F4"
                              backgroundColor='transparent'  src={userblue} />} >
          Joueur 15
        </ListItem>
      </div>
    </List>
  </div>
);

export default StatsTeam;
