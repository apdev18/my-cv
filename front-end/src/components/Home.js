import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import profilePic from '../assets/profile-pic.jpg'; //

const Home = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Box
        display="flex"
        alignItems="center"
        p={3}
        bgcolor="white"
        boxShadow={3}
        borderRadius={3}
      >
        <Box>
          <Typography variant="h4" component="div" gutterBottom>
            Hello Portfolio
          </Typography>
          <Typography variant="h5" component="div" gutterBottom>
            Alga Prananda
          </Typography>
          <Typography variant="h6" component="div" color="text.secondary">
            <Typewriter
              words={["I'am Coder", "I'am Developer", "I'am Pythoner"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Typography>
        </Box>
        <Avatar
          src={profilePic}
          alt="Profile"
          sx={{ width: 150, height: 150, marginLeft: 3 }}
        />
      </Box>
    </Box>
  );
};

export default Home;
