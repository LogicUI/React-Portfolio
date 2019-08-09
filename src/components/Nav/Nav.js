import React, { useState, Fragment } from 'react';
import { darkBlue } from '../../helper/colorPalette';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuBar from '../MenuBar/MenuBar';
import TabBar from '../TabBar/TabBar';

const styles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: darkBlue
    }
  };
});

const Nav = () => {
  const classes = styles();
  const NavNames = ['Home', 'About', 'Projects', 'Contact Me'];

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <MenuBar links={NavNames} />
        <TabBar />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
