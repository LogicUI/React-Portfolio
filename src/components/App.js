import React from 'react';
import { styles } from '../styles';
import Header from './Header';
import Home from './navigations/Home';
import About from './navigations/About';
import Skills from './navigations/Skills';
import Project from './navigations/project';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  const classes = styles();
  return (
    <Router>
      <section className={classes.root}>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Project} />
      </section>
    </Router>
  );
};

export default App;
