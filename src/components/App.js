import React from 'react';
import Header from './Header';
import Home from './navigations/Home';
import About from './navigations/About';
import Skills from './navigations/Skills';
import Project from './navigations/project';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import background from '../images/background.jpeg';

const styles = makeStyles({
  '@global': {
    body: {
      margin: 0
    }
  },
  root: {
    height: '100vh',
    background: `linear-gradient(41deg, rgba(61, 49, 74, 0.5) 50%, rgba(104, 71, 86, 0.5) 100%),url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '3rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

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
