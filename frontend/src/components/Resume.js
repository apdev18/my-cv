import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';

const Resume = () => {
  return (
    <Container>
      <Typography variant="h4">Resume/CV</Typography>
      <Button
        variant="contained"
        color="primary"
        href="https://drive.google.com/path/to/your/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Resume
      </Button>
    </Container>
  );
};

export default Resume;
