import React from 'react';
import EducationCard from './EducationCard';
import SkillsCard from './SkillsCard'; 
import CertificatesCard from './CertificatesCard';

const InfoSection = () => (
  <div className="info-section">
    <EducationCard />
    <SkillsCard />
    <CertificatesCard />
  </div>
);

export default InfoSection;
