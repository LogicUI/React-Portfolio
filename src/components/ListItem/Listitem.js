import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

const Listitem = ({ text }) => {
  return (
    <ListItem>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default Listitem;
