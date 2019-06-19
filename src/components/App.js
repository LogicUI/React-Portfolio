import React from 'react';
import { styles } from '../styles';
import Header from './Header';
import Home from './Home';

const App = () => {
  const classes = styles();
  return (
    <section className={classes.root}>
      <Header />
      <Home />
    </section>
  );
};

export default App;
