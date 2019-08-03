import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons';
import { makeStyles } from '@material-ui/styles';

const homeStyles = makeStyles({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: '26px'
  },
  h2: {
    color: 'lightcoral',
    fontWeight: '500',
    marginTop: '4rem',
    fontSize: '4rem',
    lineHeight: '1.5'
  },
  h3: {
    color: 'white',
    fontWeight: '100',
    lineHeight: 1.5,
    fontSize: '1.5rem'
  },
  buttons: {
    marginTop: '2rem'
  },
  button: {
    color: 'white',
    fontSize: '32px',
    padding: '1.5rem',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  }
});

const Home = () => {
  const classes = homeStyles();

  const headerDetails = () => {
    return (
      <section className={classes.main}>
        <Typography variant="h2" gutterBottom classes={{ h2: classes.h2 }}>
          Hello, I'm John
        </Typography>
        <Typography variant="h3" gutterBottom classes={{ h3: classes.h3 }}>
          I'm a full stack software developer who is passion driven and an{' '}
          <br /> active lifelong learner
        </Typography>
      </section>
    );
  };

  const iconButtons = () => {
    return (
      <section className={classes.buttons}>
        <IconButton aria-label="Facebook" className={classes.button}>
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </IconButton>
        <IconButton aria-label="GitHub" className={classes.button}>
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </IconButton>
        <IconButton aria-label="Linkedin" className={classes.button}>
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </IconButton>
      </section>
    );
  };

  return (
    <React.Fragment>
      {headerDetails()}
      {iconButtons()}
    </React.Fragment>
  );
};

export default Home;
