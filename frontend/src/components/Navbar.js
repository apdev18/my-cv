import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About Me</Button>
        <Button color="inherit" component={Link} to="/experience">Experience</Button>
        <Button color="inherit" component={Link} to="/skills">Skills</Button>
        <Button color="inherit" component={Link} to="/tools">Tools</Button>
        <Button color="inherit" component={Link} to="/certificates">Certificates</Button>
        <Button color="inherit" component={Link} to="/resume">Resume/CV</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
