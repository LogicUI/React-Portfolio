import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import React, { useState } from 'react';
import { Home, Person, Folder, ImageSearch } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const headerStyles = makeStyles({
  root: {
    backgroundColor: '#1A1423'
  },

  MuiTabRoot: {
    padding: '6px 2rem'
  },

  tool: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicator: {
    backgroundColor: 'white'
  }
});

const Header = () => {
  const classes = headerStyles();
  const [tabValue, setTabValue] = useState(0);

  const handleOnChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar className={classes.tool}>
        <Tabs
          value={tabValue}
          onChange={handleOnChange}
          variant="scrollable"
          scrollButtons="on"
          classes={{ indicator: classes.indicator }}
        >
          <Tab
            icon={<Home />}
            label="Home"
            component={RouterLink}
            to="/"
            classes={{ root: classes.MuiTabRoot }}
          />
          <Tab
            icon={<Person />}
            label="About"
            component={RouterLink}
            classes={{ root: classes.MuiTabRoot }}
            to="/about"
          />

          <Tab
            icon={<ImageSearch />}
            label="Skills"
            to="/skills"
            component={RouterLink}
            classes={{ root: classes.MuiTabRoot }}
          />
          <Tab
            icon={<Folder />}
            label="Projects"
            to="/projects"
            component={RouterLink}
            classes={{ root: classes.MuiTabRoot }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
