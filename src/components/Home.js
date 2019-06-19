import React from 'react';
import Typography from '@material-ui/core/Typography';
import { homeStyles } from '../styles/homeStyles';
import { withStyles } from '@material-ui/styles';

const Home = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h2" gutterBottom classes={{ h2: classes.h2 }}>
        Hello, I am John
      </Typography>
      <Typography variant="h2" gutterBottom classes={{ h2: classes.h2 }}>
        an aspiring web developer
      </Typography>
      <section className={classes.buttons}>
    
      </section>
    </React.Fragment>
  );
};

export default withStyles(homeStyles)(Home);
