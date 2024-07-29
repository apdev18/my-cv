// src/pages/Beranda.js
import React from 'react';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import ProjectsSection from '../components/ProjectsSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import '../App.css'; // Import App.css for styles

const Beranda = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <ProfileCard />
        <ProjectsSection />
      </main>
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Beranda;
