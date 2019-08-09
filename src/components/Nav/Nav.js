import React, { useState, Fragment } from 'react';
import { darkBlue, white } from '../../helper/colorPalette';
import { AppBar, Toolbar, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideList from '../SideList/SideList';
import TabBar from '../TabBar/TabBar';

const styles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: darkBlue
    },
    menu: {
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    }
  };
});

const Nav = () => {
  const classes = styles();
  const [drawerState, toggleDrawerState] = useState(false);

  const toggleDrawer = (state) => (event) => {
    toggleDrawerState(state);
  };

  const menuBar = () => {
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
        <Drawer amchor="left" open={drawerState} onClose={toggleDrawer(false)}>
          <SideList />
        </Drawer>
      </Fragment>
    );
  };

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        {menuBar()}
        <TabBar />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
