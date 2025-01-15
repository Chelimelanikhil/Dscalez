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

  const topImages = [featuredImagepic, featuredImagepic, featuredImagepic, featuredImagepic];
  const bottomImages = Array(4).fill(featuredImagepic);

  return (
    <div className="gallery-section">
      <div className="header-section-gallery">
        <h1>Gallery</h1>
      </div>

      <div className="gallery-container-gallery">


        <div className="top-grid">

          <div className="gallery-wrapper">
            <div className="gallery-grid">
              <div className="gallery-item large-image">
                <img
                  src={featuredImagepic}
                  alt="Team at Aquapot exhibition stand"
                />
              </div>
              <div className="gallery-item small-image">
                <img
                  src={featuredImagepic}
                  alt="Individual portrait outdoors"
                />
              </div>
            </div>

          </div>
          <div className="gallery-wrapper">
            <div className="gallery-grid1">
              <div className="gallery-item small-image">
                <img
                  src={featuredImagepic}
                  alt="Individual portrait outdoors"
                />
              </div>
              <div className="gallery-item large-image">
                <img
                  src={featuredImagepic}
                  alt="Team at Aquapot exhibition stand"
                />
              </div>

            </div>

          </div>


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
          <div className="gallery-wrapper">
            <div className="gallery-grid">
              <div className="gallery-item large-image">
                <img
                  src={featuredImagepic}
                  alt="Team at Aquapot exhibition stand"
                />
              </div>
              <div className="gallery-item small-image">
                <img
                  src={featuredImagepic}
                  alt="Individual portrait outdoors"
                />
              </div>
            </div>

          </div>
          <div className="gallery-wrapper">
            <div className="gallery-grid1">
              <div className="gallery-item small-image">
                <img
                  src={featuredImagepic}
                  alt="Individual portrait outdoors"
                />
              </div>
              <div className="gallery-item large-image">
                <img
                  src={featuredImagepic}
                  alt="Team at Aquapot exhibition stand"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Gallery;
