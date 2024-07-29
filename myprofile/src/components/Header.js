// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div>My Profile</div>
      <nav className="navbar">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#pengalaman">Pengalaman</a>
        <a href="#skills">Skills</a>
        <a href="#sertifikat">Sertifikat</a>
      </nav>
      <button>Dark Mode</button>
    </header>
  );
};

export default Header;
