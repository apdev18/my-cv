import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent } from '@material-ui/core';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get('/api/experiences')
      .then(response => setExperiences(response.data))
      .catch(error => console.error('Error fetching experiences:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4">Experience</Typography>
      {experiences.map(exp => (
        <Card key={exp._id} style={{ marginBottom: '1em' }}>
          <CardContent>
            <Typography variant="h5">{exp.title}</Typography>
            <Typography variant="body1">{exp.company}</Typography>
            <Typography variant="body2">{new Date(exp.startDate).toLocaleDateString()} - {new Date(exp.endDate).toLocaleDateString()}</Typography>
            <Typography variant="body1">{exp.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Experience;
