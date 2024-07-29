import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import ikon dari react-icons

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

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
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
    </header>
  );
};

export default Header;
