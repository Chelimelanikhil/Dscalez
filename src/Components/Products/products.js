

import React, { useState } from 'react';
import './products.css'
import productsimages from '../../images/products.png'
import WaterSofteners from '../../images/WaterSofteners.png'
import SaltFree from '../../images/Salt-Free.png'
import p1 from '../../images/productimage1.png'
import p2 from '../../images/productimage2.png'



const CheckIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const softenerData = [
    {
      id: 1,
      title: "Dscalez Smart High Efficiency Water Softener",
      description: "Our most advanced softener offers hassle-free control through our app.",
      image: p1,
    },
    {
      id: 2,
      title: "Dscalez Smart High Efficiency Water Softener",
      description: "Our most advanced softener offers hassle-free control through our app.",
      image: p1,

    },
    {
      id: 3,
      title: "Dscalez Smart High Efficiency Water Softener",
      description: "Our most advanced softener offers hassle-free control through our app.",
      image: p1,

    },
    {
      id: 4,
      title: "Dscalez Smart High Efficiency Municipal Water Softener with Chlorine Filtration",
      description: "Tackle hard water and chlorine, and control your system from your phone.",
      image: p2,

    },
    {
      id: 5,
      title: "Dscalez Smart High Efficiency Municipal Water Softener with Chlorine Filtration",
      description: "Tackle hard water and chlorine, and control your system from your phone.",
      image: p1,

    },
    {
      id: 6,
      title: "Dscalez Smart High Efficiency Municipal Water Softener with Chlorine Filtration",
      description: "Tackle hard water and chlorine, and control your system from your phone.",
      image: p1,

    },
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
    { question: "What is water hardness?", answer: "Water hardness refers to..." },
    { question: "What is water softening?", answer: "Water softening is a..." },
    { question: "How does the water softening process work?", answer: "The process involves..." },
    {
      question: "What is a water softening system and how does it work?",
      answer: "A water softening system...",
    },
    { question: "What are the benefits of water softening?", answer: "The benefits include..." },
    { question: "How much does a water softening system cost?", answer: "The cost depends on..." },
    { question: "How long does a home water softening system last?", answer: "Typically, it lasts..." },
    {
      question: "How do I choose the best water softening system for my home?",
      answer: "To choose the best system...",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="water-softeners">
      <div className="header-section-products">
        <h1>Whole House Water Softeners</h1>
      </div>
      <div className="softener-grid">
        {softenerData.map(softener => (
          <div key={softener.id} className="softener-card">
            <div className="softener-image">
              <img src={softener.image} alt="Water Softener" />
            </div>
            <div className="softener-content">
              <h3>{softener.title}</h3>
              <p>{softener.description}</p>
              <div className="button-container">
                <button className="top-pick-btn">Top Pick</button>
                <button className="arrow-btn">→</button>
              </div>
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



      <div className="customer-section">
        {/* Video Section */}
        <div className="video-section">
          <div className="video-wrapper">
            <div className="video-overlay">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video URL
                title="Customer Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-video"
              ></iframe>
              <div className="play-button">
                <span>&#9658;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-section">
          <h2 className="heading">Hear What Customers Say</h2>
          <p className="quote">
            Coming out of the shower, it just feels like you have moisturizer on.
            — Stacey R
          </p>
          <a href="#play-video" className="link">
            Play Video <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff' }}>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div
                  className={`faq-question ${activeIndex === index ? "active" : ""}`}
                  onClick={() => toggleAnswer(index)}
                >
                  {faq.question}
                  <span className="toggle-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>
                {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default Products;