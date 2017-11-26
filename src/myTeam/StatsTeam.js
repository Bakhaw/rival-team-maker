import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import justdance from './images/justdance.png';
import steep from './images/steep.png';
import rayman from './images/rayman.png';
import rainbow from './images/rainbow.png';
import thecrew from './images/thecrew.png';

const StatsTeam = () => (
  <div>
    <List className="d-flex">
      <div className="col-md-6">
        <ListItem
          disabled={true}
          style={{ color: '#FF9600' }}
          leftAvatar={<Avatar size={50} backgroundColor='transparent' style={{ borderRadius: '0' }} src={justdance} />} >
          Just Dance
        </ListItem>
        <ListItem
          disabled={true}
          style={{ color: '#63CBF2' }}
          leftAvatar={<Avatar size={50} backgroundColor='transparent' style={{ borderRadius: '0' }} src={steep} />} >
          Steep
        </ListItem>
        <ListItem
          disabled={true}
          style={{ color: '#FF9600' }}
          leftAvatar={<Avatar size={50} backgroundColor='transparent' style={{ borderRadius: '0' }} src={rayman} />} >
          Rayman Legends
        </ListItem>
      </div>
      <div className="col-md-6">
        <ListItem
          disabled={true}
          style={{ color: '#63CBF2' }}
          leftAvatar={<Avatar size={50} backgroundColor='transparent' style={{ borderRadius: '0' }} src={rainbow} />} >
          Rainbow Six Siege
        </ListItem>
        <ListItem
          disabled={true}
          style={{ color: '#FF9600' }}
          leftAvatar={<Avatar size={50} backgroundColor='transparent' style={{ borderRadius: '0' }} src={thecrew} />} >
          The Crew
        </ListItem>
      </div>
    </List>
  </div>
);

export default StatsTeam;
