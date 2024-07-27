import React from 'react';
import { Container, Typography, Avatar } from '@material-ui/core';
import myProfilePic from '../assets/profile-pic.jpg';

const Home = () => {
  return (
    <Container>
      <Avatar alt="My Name" src={myProfilePic} style={{ width: 100, height: 100 }} />
      <Typography variant="h4">My Name</Typography>
    </Container>
  );
};

export default Home;
