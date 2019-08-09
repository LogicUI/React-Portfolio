import React from 'react';
import { List } from '@material-ui/core';
import ListItem from '../ListItem/Listitem';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  list: {
    width: 250
  }
});

const SideList = () => {
  const classes = styles();
  return (
    <div className={classes.list}>
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
