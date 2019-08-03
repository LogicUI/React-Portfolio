import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const aboutStyles = makeStyles({
  root: {
    height: '90vh',
    width: '90vw',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120
  },
  h2: {
    color: 'palevioletred',
    fontWeight: '500',
    marginTop: '4rem',
    fontSize: '4rem',
    lineHeight: '1.5',
    textTransform: 'uppercase'
  }
});

const About = () => {
  const classes = aboutStyles();
  return (
    <section className={classes.root}>
      <Typography
        variant="h2"
        gutterBottom
        centered
        classes={{ h2: classes.h2 }}
      >
        About Me
      </Typography>
      <Typography variant="h5" gutterBottom classes={{ h3: classes.h3 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </Typography>
    </section>
  );
};

export default About;
