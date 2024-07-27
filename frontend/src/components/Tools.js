import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@material-ui/core';
import GitIcon from '@material-ui/icons/GitHub'; // Ganti dengan ikon yang sesuai
import VsCodeIcon from '@material-ui/icons/Code';
import DockerIcon from '@material-ui/icons/DirectionsBoat';
// Tambahkan ikon lainnya sesuai kebutuhan

const tools = [
  { name: 'Git', icon: <GitIcon /> },
  { name: 'VS Code', icon: <VsCodeIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
  // Tambahkan tools lainnya
];

const Tools = () => {
  return (
    <Container>
      <Typography variant="h4">Tools</Typography>
      <Grid container spacing={3}>
        {tools.map((tool, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                {tool.icon}
                <Typography variant="h6">{tool.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Tools;
