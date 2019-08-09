import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

const ListComponent = ({ text }) => {
  return (
    <ListItem button>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default ListComponent;
