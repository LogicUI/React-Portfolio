import React from 'react';
import { List } from '@material-ui/core';
import ListItem from '../ListItem/Listitem';

const SideList = () => {
  return (
    <div>
      <List>
        <ListItem text="Home" />
        <ListItem text="About" />
        <ListItem text="Projects" />
        <ListItem text="Contact Me" />
      </List>
    </div>
  );
};

export default SideList;
