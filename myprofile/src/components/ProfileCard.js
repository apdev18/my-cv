// src/components/ProfileCard.js
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Card from './Card';

const ProfileCard = () => {
  return (
    <Card className="profile-card">
      <div className="profile-image-wrapper">
        <img className="profile-image" src="/profile.jpg" alt="Profile" />
      </div>
      <h2 className="profile-name">Alga Prananda</h2>
      <p className="job-title">Data Analyst | Web Developer</p>
      <a className="resume-link" href="path/to/your/resume.pdf" download>
        Download Resume/CV
      </a>
      <div className="social-media-icons">
        <a href="https://github.com/apdev18" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/apdevs18" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.instagram.com/__qlgqprqnqndq" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>
    </Card>
  );
};

export default ProfileCard;
