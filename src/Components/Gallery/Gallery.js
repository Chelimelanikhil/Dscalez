import React, { useEffect } from 'react';
import './Gallery.css';
import featuredImagepic from '../../images/featuredimage.png';

const Gallery = () => {
  const useScrollAnimation = () => {
    useEffect(() => {
      const elements = document.querySelectorAll('.gallery-item, .featured-video iframe');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      });

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, []);
  };

  useScrollAnimation();

  const topImages = [featuredImagepic, featuredImagepic, featuredImagepic];
  const bottomImages = Array(6).fill(featuredImagepic);

  return (
    <div className="gallery-section">
      <div className="header-section-gallery">
        <h1>Gallery</h1>
      </div>

      <div className="gallery-container">
        <div className="top-grid">
          {topImages.map((image, index) => (
            <div key={`top-${index}`} className="gallery-item top-item">
              <img src={image} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="featured-video">
          <iframe
            width="100%"  // Set to 100% for responsive sizing
            height="600"  // Increase height for a larger video
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video URL
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="bottom-grid">
          {bottomImages.map((image, index) => (
            <div key={`bottom-${index}`} className="gallery-item bottom-item">
              <img src={image} alt={`Team photo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
