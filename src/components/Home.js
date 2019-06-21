import React from 'react';
import Typography from '@material-ui/core/Typography';
import { homeStyles } from '../styles/homeStyles';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons';

const Home = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <section className={classes.main}>
        <Typography variant="h2" gutterBottom classes={{ h2: classes.h2 }}>
          Hello, I am John
        </Typography>
        <Typography variant="h3" gutterBottom classes={{ h3: classes.h3 }}>
          An aspiring web developer
        </Typography>
      </section>

      <section className={classes.buttons}>
        <Button variant="contained" className={classes.button}>
          <FontAwesomeIcon icon={faFacebookSquare} size="lg" pull="left" />
          Facebook
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          <FontAwesomeIcon icon={faGithub} size="lg" pull="left" />
          Github
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" pull="left" />
          Linkedin
        </Button>
      </section>
    </React.Fragment>
  );
};

export default withStyles(homeStyles)(Home);
