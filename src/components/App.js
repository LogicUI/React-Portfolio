import React from 'react';
import { styles } from '../styles';
import Header from './Header';

const App = () => {
  const classes = styles();
  return (
    <section className={classes.root}>
      <Header />
    </section>
  );
};

export default App;
