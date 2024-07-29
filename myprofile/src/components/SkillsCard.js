import React from 'react';
import Card from './Card';
import { FaPython, FaPhp, FaJsSquare, FaDatabase } from 'react-icons/fa';
import { SiTableau, SiPowerbi, SiNumpy, SiPandas, SiTensorflow, SiKeras, SiScikitlearn, SiMysql, SiMongodb } from 'react-icons/si';
import '../App.css'; // Import file CSS

const SkillsCard = () => (
  <Card className="skills-card">
    <h2 className="skills-title">Skills</h2>
    <div className="skills-section">
      <div className="skills-logos">
        <FaPython size={40} title="Python" />
        <FaPhp size={40} title="PHP" />
        <FaJsSquare size={40} title="JavaScript" />
        <SiTableau size={40} title="Tableau" />
        <SiPowerbi size={40} title="Power BI" />
        <SiNumpy size={40} title="NumPy" />
        <SiPandas size={40} title="Pandas" />
        <FaDatabase size={40} title="Excel" />
        <SiScikitlearn size={40} title="Scikit-Learn" />
        <SiTensorflow size={40} title="TensorFlow" />
        <SiKeras size={40} title="Keras" />
        <SiMysql size={40} title="MySQL" />
        <SiMongodb size={40} title="MongoDB" />
      </div>
    </div>
  </Card>
);

export default SkillsCard;
