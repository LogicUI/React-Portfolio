import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to="Home">Home</Link>
      <Link to="About">About</Link>
      <Link to="Projects">Projects</Link>
      <Link to="Contact">Contact Me</Link>
    </div>
  );
};

export default Nav;
