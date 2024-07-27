import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@material-ui/core';

const certificates = [
  { title: 'Certificate 1', imageUrl: 'path/to/certificate1.jpg' },
  { title: 'Certificate 2', imageUrl: 'path/to/certificate2.jpg' },
  { title: 'Certificate 3', imageUrl: 'path/to/certificate3.jpg' },
  // Tambahkan sertifikat lainnya
];

const Certificates = () => {
  return (
    <Container>
      <Typography variant="h4">Certificates</Typography>
      <Grid container spacing={3}>
        {certificates.map((cert, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={cert.title}
                height="140"
                image={cert.imageUrl}
                title={cert.title}
              />
              <CardContent>
                <Typography variant="h6">{cert.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Certificates;
