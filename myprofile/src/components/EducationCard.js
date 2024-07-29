import React from 'react';
import '../App.css'; // Import file CSS

const EducationCard = () => (
  <div className="education-card">
    <h2 className="education-header">Education</h2>
    <div className="education-content">
      <img className="education-logo" src="/logoUIN.png" alt="University Logo" />
      <div className="education-details">
        <h3 className="education-title">UIN Suska Riau</h3>
        <p className="education-major">Informatics Engineering</p>
        <p className="education-period">2019 - 2023</p>
      </div>
    </div>
  </div>
);

export default EducationCard;
