import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import { white } from '../../helper/colorPalette';

const styles = makeStyles((theme) => {
  return {
    indicator: {
      backgroundColor: white
    },
    links: {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  };
});

const TabBar = () => {
  const classes = styles();
  const [tabValue, setTabValue] = useState(0);

  const handleOnChange = (event, newValue) => {
    setTabValue(newValue);
  };
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

export default TabBar;
