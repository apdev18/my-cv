import React, { useState } from 'react';
import Card from './Card';
import '../App.css';

const certificates = [
  { src: 'https://drive.google.com/file/d/1O7rTq3BxXMpmcfRx1oVjE428Bo2bVP5C/view?usp=drive_link', title: 'Certificate 1' },
  { src: 'https://drive.google.com/file/d/1CYLFh6etBweMoSXBXuaSm1dbyzEsRUDw/view?usp=drive_link', title: 'Certificate 2' },
  { src: 'https://drive.google.com/file/d/1FTIli0AXZnFrSbJFzhfkYWuNN-Tj_Xm7/view?usp=drive_link', title: 'Certificate 3' },
  // Tambahkan link Google Drive sertifikat lainnya
];

const CertificatesCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  return (
    <Card className="certificates-card">
      <h2 className="certificates-title">Sertifikat</h2>
      <div className="certificates-slider">
        <button className="slider-control prev" onClick={prevSlide}>‹</button>
        <iframe
          src={certificates[currentIndex].src}
          title={certificates[currentIndex].title}
          className="certificate-iframe"
        />
        <button className="slider-control next" onClick={nextSlide}>›</button>
      </div>
    </Card>
  );
};

export default CertificatesCard;
