import React from 'react';
import { Container, Typography } from '@material-ui/core';

const About = () => {
  return (
    <Container>
      <Typography variant="h4">About Me</Typography>
      <Typography variant="body1">
        {/* Your content about yourself */}
        This is about me.
      </Typography>
    </Container>
  );
};

export default About;
