import React, { useState } from 'react';
import { darkBlue, white } from '../../helper/colorPalette';
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const styles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: darkBlue
    },
    indicator: {
      backgroundColor: white
    },
    links: {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
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

  const [tabValue, setTabValue] = useState(0);

  const handleOnChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const tabLinks = () => {
    return (
      <Tabs
        value={tabValue}
        onChange={handleOnChange}
        variant="scrollable"
        scrollButtons="on"
        classes={{ indicator: classes.indicator }}
        className={classes.links}
      >
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Projects" />
        <Tab label="Contact Me" />
      </Tabs>
    );
  };

  const menuBar = () => {
    return (
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menuButton"
        className={classes.menu}
      >
        <MenuIcon data-testid="menuIcon" />
      </IconButton>
    );
  };

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        {menuBar()}
        {tabLinks()}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
