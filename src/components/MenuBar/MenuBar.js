import React, { useState, Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Drawer, List } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ListComponent from '../ListComponent/ListComponent';

const styles = makeStyles((theme) => {
  return {
    menu: {
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    }
  };
});
const MenuBar = ({ links }) => {
  const classes = styles();
  const [drawerState, toggleDrawerState] = useState(false);

  const toggleDrawer = (state) => (event) => {
    toggleDrawerState(state);
  };
  return (
    <Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menuButton"
        className={classes.menu}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon data-testid="menuIcon" />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerState}
        onClose={toggleDrawer(false)}
        data-testid="list"
      >
        <List>
          {links.map((link, index) => {
            return <ListComponent text={link} key={index} />;
          })}
        </List>
      </Drawer>
    </Fragment>
  );
};

export default MenuBar;
