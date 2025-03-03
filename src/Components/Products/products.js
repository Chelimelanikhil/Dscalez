

import React, { useState, history } from 'react';
import './products.css'
import productsimages from '../../images/products.png'
import WaterSofteners from '../../images/WaterSofteners.png'
import SaltFree from '../../images/Salt-Free.png'
import p1 from '../../images/productimage1.png'
import p2 from '../../images/productimage2.png'
import p3 from '../../images/p3.png'
import p4 from '../../images/p4.png'
import check from '../../images/check.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CheckIcon = () => (
  <img src={check} alt="check icon" width="15" height="15" />
);

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "5p1Y6Z1unI8";
  const handlePlay = () => {
    setIsPlaying(true);
  };
  const navigate = useNavigate();

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
      question: "What is a water softener, and why do I need one?",
      answer: "A water softener removes minerals like calcium and magnesium that cause hard water. It protects your plumbing, extends appliance life, and improves skin and hair health."
    },
    {
      question: "How do water softeners work?",
      answer: "Water softeners use ion exchange to replace hard minerals with sodium or potassium ions, reducing scale buildup and delivering soft water throughout your home."
    },
    {
      question: "What are the benefits of using a water softener?",
      answer: "Soft water prevents scale buildup, reduces dry skin and hair, improves the efficiency of soaps, and extends the lifespan of appliances like washing machines and water heaters."
    },
    {
      question: "What’s the difference between a salt-based and a salt-free water softener?",
      answer: "A salt-based system removes hard minerals, while a salt-free system conditions water by preventing minerals from forming scale. Both improve water quality but work differently."
    },
    {
      question: "Can a water softener remove harmful contaminants?",
      answer: "Traditional water softeners focus on removing hard minerals. For harmful contaminants like chlorine, bacteria, or heavy metals, a water filtration system is recommended."
    },
    {
      question: "Is maintenance required for a water softener?",
      answer: "Yes, regular maintenance includes refilling salt, cleaning the brine tank, and occasionally replacing parts to ensure your system works efficiently and lasts longer."
    },
    {
      question: "Will a water softener increase my water bill?",
      answer: "A water softener uses a small amount of water during its regeneration cycle. However, it can save money over time by reducing plumbing issues and extending appliance lifespan."
    },
    {
      question: "How do I know which water softener is right for my home?",
      answer: "The right system depends on your water hardness level, household size, and water usage. Schedule a consultation to get a personalized recommendation."
    }
  ];
  
  


  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleProduct = () => {
    navigate('/product-details');
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
            onClick={() => handleProduct(softener.id)} // Add the click handler here
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