

import React, { useState } from 'react';
import './products.css'
import productsimages from '../../images/products.png'
import WaterSofteners from '../../images/WaterSofteners.png'
import SaltFree from '../../images/Salt-Free.png'
import p1 from '../../images/productimage1.png'
import p2 from '../../images/productimage2.png'
import p3 from '../../images/p3.png'
import p4 from '../../images/p4.png'
import check from '../../images/check.png'


const CheckIcon = () => (
  <img src={check} alt="check icon" width="15" height="15" />
);

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "dQw4w9WgXcQ"; // Replace with your YouTube video ID

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const softeners = [
    {
      id: 1,
      image: p1,
      title: 'Dscalez Smart High -1355 Efficiency Municipal'
    },
    {
      id: 2,
      image: p2,
      title: 'Dscalez Smart High -1355 Efficiency Municipal'
    },
    {
      id: 3,
      image: p3,
      title: 'Dscalez Smart High -1355 Efficiency Municipal'
    },
    {
      id: 4,
      image: p1,
      title: 'Dscalez Smart High -1355 Efficiency Municipal'
    },
    {
      id: 5,
      image: p2,
      title: 'Dscalez Smart High -1355 Efficiency Municipal'
    },
    {
      id: 6,
      image: p3,
      title: 'Dscalez Smart High -1355 Efficiency Municipal'
    },
    {
      id: 7,
      image: p4,
      title: 'Dscalez Smart High -1355 Efficiency Municipal'
    },
    {
      id: 8,
      image: p1,
      title: 'Dscalez Smart High -1355 Efficiency Municipal'
    },
    {
      id: 9,
      image: p2,
      title: 'Dscalez Smart High -1355 Efficiency Municipal'
    }
  ];


  const features = [
    { name: "Makes cleaning easier", waterSoftener: true, saltFree: true },
    { name: "Reduces limescale buildup", waterSoftener: true, saltFree: true },
    { name: "Improves energy efficiency", waterSoftener: true, saltFree: true },
    { name: "Prolongs the lifespan of water-using appliances", waterSoftener: true, saltFree: false },
    { name: "Brightens laundry", waterSoftener: true, saltFree: false },
    { name: "Softens hair and skin", waterSoftener: true, saltFree: false }
  ];

  const faqData = [
    {
      question: "What is water hardness?",
      answer: "Water hardness refers to the mineral content in your water, particularly calcium and magnesium..."
    },
    {
      question: "What is water softening?",
      answer: "Water softening is the process of removing calcium, magnesium, and other metal cations from hard water..."
    },
    {
      question: "How does the water softening process work?",
      answer: "The water softening process works through ion exchange, replacing hard minerals with sodium ions..."
    },
    {
      question: "What is a water softening system and how does it work?",
      answer: "A water softening system is a home appliance that removes hardness minerals from your water..."
    },
    {
      question: "What are the benefits of water softening?",
      answer: "Water softening provides numerous benefits including reduced scale buildup, better soap lathering..."
    },
    {
      question: "How much does a water softening system cost?",
      answer: "The cost of a water softening system varies depending on size, features, and installation..."
    },
    {
      question: "How long does a home water softening system last?",
      answer: "A well-maintained water softening system typically lasts 10-15 years..."
    },
    {
      question: "How do I choose the best water softening system for my home?",
      answer: "Choosing the best water softening system depends on your water hardness level, household size..."
    }
  ];


  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="water-softeners">
      <div className="header-section-products">
        <h1>Whole House Water Softeners</h1>
      </div>


      <div className="softener-grid">
        {softeners.map((softener, index) => (
          <div
            key={softener.id}
            className="softener-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="softener-image-container">
              <img
                src={softener.image}
                alt={softener.title}
                className="softener-image"
              />
            </div>
            <h3 className="softener-title">{softener.title}</h3>
            <div className="arrow-container">
              <button className="arrow-button">→</button>
            </div>
          </div>
        ))}
      </div>


      <div className="alternatives-section">
        <div className="alternatives-content">
          <h2>Find Water Softener Alternatives</h2>
          <p>
            Living in a brine-restricted area? Concerned about potential contaminants in your water instead?**
            Discover our salt-free water softener alternatives or see how our water filtration systems can provide
            your home with an endless supply of cleaner, great-tasting water.
          </p>
          <a href="#" className="cta-link">
            See Water Filtration Systems
            <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <div className="comparison-container">
        <h1 className="comparison-title">Compare Water Softening Systems</h1>

        <div className="comparison-content">

          <div className="empty-space"></div>

          {/* Header section */}
          <div className='header1'>
            <div className="column water-softeners">
              <div className="system-image">
                <img src={WaterSofteners} alt="Water Softeners" />
              </div>
              <p className="system-name">Water Softeners</p>
            </div>

            <div className="column salt-free">
              <div className="system-image">
                <img src={SaltFree} alt="Salt-Free Conditioners" />
              </div>
              <p className="system-name">Salt-Free<br />Conditioners</p>
            </div>
          </div>

          {/* Benefits section */}
          <div className="benefits-section">
            <div className="benefits-label">Benefits</div>

            {features.map((feature, index) => (
              <div key={index} className="feature-row">
                <div className="feature-name">{feature.name}</div>
                <div className="check-columns">
                  <div className="check-cell">
                    {feature.waterSoftener && <div className="check-mark"><CheckIcon /></div>}
                  </div>
                  <div className="check-cell">
                    {feature.saltFree && <div className="check-mark"><CheckIcon /></div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      <div className="testimonial-container">
        <div className="video-container">
          <div className="video-wrapper">
            {!isPlaying ? (
              <>
                <div className="video-overlay">
                  <button className="play-button" onClick={handlePlay}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 5v14l11-7L8 5z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div className="video-placeholder">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="video-thumbnail"
                  />
                </div>
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Customer Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-iframe"
              />
            )}
          </div>
        </div>
        <div className="content-container">
          <h2>Hear What Customers Say</h2>
          <p>"Coming out of the shower, it just feels like you have moisturizer on." — Dscalez</p>
          <button className="play-video-link" onClick={handlePlay}>
            Play Video
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow-icon"
            >
              <path
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="faq-question"
              onClick={() => toggleQuestion(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{item.question}</span>
              <svg 
                className="chevron-icon"
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M6 9l6 6 6-6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="faq-answer">
              <div className="answer-content">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    </div>
  );
};

export default Products;