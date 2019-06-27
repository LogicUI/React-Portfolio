import React from 'react';
import { withStyles } from '@material-ui/styles';
import { aboutStyles } from '../../styles/aboutStyles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import profile from "../../images/profileimage.jpg";



const About = (props) => {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Typography variant="h2" gutterBottom centered classes={{h2:classes.h2}} >
        About Me
      </Typography>
      <Avatar alt="my photo" src={profile} className={classes.bigAvatar}  gutterBottom s/>
    <Typography variant="h5" gutterBottom classes={{ h3: classes.h3 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        </Typography>
    </section>
  );
};

export default withStyles(aboutStyles)(About);
