import React from 'react';
import './Gallery.css';
import featuredImagepic from '../../images/featuredimage.png'

const Gallery = () => {
  // Replace these with your actual image imports
  const topImages = [
    featuredImagepic,
    featuredImagepic,
    featuredImagepic,
    featuredImagepic,
    featuredImagepic,
    featuredImagepic
   
  ];

  const featuredImage = featuredImagepic;
  
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

      <div className="featured-image">
        <img src={featuredImage} alt="Featured gallery" />
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