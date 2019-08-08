import React from 'react';
import Home from '../components/Home/Home';
import Nav from '../components/Nav/Nav';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <section>
      <Nav />
      <Route path="/" exact component={Home} />
    </section>
  );
};

export default App;
