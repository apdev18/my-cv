import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@material-ui/core';
import HtmlIcon from '@material-ui/icons/Code'; // Ganti dengan ikon yang sesuai
import CssIcon from '@material-ui/icons/Palette';
import JsIcon from '@material-ui/icons/Whatshot';
// Tambahkan ikon lainnya sesuai kebutuhan

const skills = [
  { name: 'HTML', icon: <HtmlIcon /> },
  { name: 'CSS', icon: <CssIcon /> },
  { name: 'JavaScript', icon: <JsIcon /> },
  // Tambahkan skill lainnya
];

const Skills = () => {
  return (
    <Container>
      <Typography variant="h4">Skills</Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                {skill.icon}
                <Typography variant="h6">{skill.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
