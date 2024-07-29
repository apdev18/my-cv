// src/components/InfoSection.js
import React from 'react';
import Card from './Card';

const InfoSection = () => {
  return (
    <section className="info-section">
      <Card className="info-card">Education</Card>
      <Card className="info-card">Sertifikat</Card>
      <Card className="info-card">Skills</Card>
    </section>
  );
};

export default InfoSection;
