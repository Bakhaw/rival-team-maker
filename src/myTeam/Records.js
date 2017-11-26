import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import tropheeOrange from './images/trophee_orange.png';
import tropheeBleu from './images/trophee_bleu.png';

const StatsTeam = () => (
  <div>
    <List className="d-flex">
      <div className="col-md-6">
        <ListItem
          disabled={true}
          style={{ color: '#FF9600' }}
          leftAvatar={<Avatar size={50} backgroundColor='transparent' style={{ borderRadius: '0' }} src={tropheeOrange} />} >
          Joueur 8
        </ListItem>
        <ListItem
          disabled={true}
          style={{ color: '#63CBF2' }}
          leftAvatar={<Avatar size={50} backgroundColor='transparent' style={{ borderRadius: '0' }} src={tropheeBleu} />} >
          Joueur 10
        </ListItem>
        <ListItem
          disabled={true}
          style={{ color: '#FF9600' }}
          leftAvatar={<Avatar size={50} backgroundColor='transparent' style={{ borderRadius: '0' }} src={tropheeOrange} />} >
          Joueur 5
        </ListItem>
      </div>
      <div className="col-md-6">
        <ListItem
          disabled={true}
          style={{ color: '#63CBF2' }}
          leftAvatar={<Avatar size={50} backgroundColor='transparent' style={{ borderRadius: '0' }} src={tropheeBleu} />} >
          Joueur 14
        </ListItem>
        <ListItem
          disabled={true}
          style={{ color: '#FF9600' }}
          leftAvatar={<Avatar size={50} backgroundColor='transparent' style={{ borderRadius: '0' }} src={tropheeOrange} />} >
          Joueur 2
        </ListItem>
        <ListItem
          disabled={true}
          style={{ color: '#63CBF2' }}
          leftAvatar={<Avatar size={50} backgroundColor='transparent' style={{ borderRadius: '0' }} src={tropheeBleu} />} >
          Joueur 9
        </ListItem>
      </div>
    </List>
  </div>
);

export default StatsTeam;
