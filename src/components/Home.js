import React from 'react';
import Typography from '@material-ui/core/Typography';
import { homeStyles } from '../styles/homeStyles';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons';

const Home = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <section className={classes.main}>
        <Typography variant="h2" gutterBottom classes={{ h2: classes.h2 }}>
          Hello, I'm John
        </Typography>
        <Typography variant="h3" gutterBottom classes={{ h3: classes.h3 }}>
          I'm a software developer who is passion driven and an <br /> active
          lifelong learner
        </Typography>
      </section>

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
    </React.Fragment>
  );
};

export default withStyles(homeStyles)(Home);
