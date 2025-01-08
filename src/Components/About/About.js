import React from 'react'
import './About.css'
import experince from '../../images/experience.png'
import storeImage from '../../images/storeImage.png'


const StoreCard = ({ location, image }) => {
  return (
    <div className="store-card">
      <div className="store-image-wrapper">
        <img
          src={image}
          alt={`Aquapot RO Store ${location}`}
          className="store-image"
        />
      </div>
      <div className="store-location">
        {location}
      </div>
    </div>
  );
};
export default function About() {

  return (
    <div className='about-section'>
      <div className="header-section-about">
        <h1>About Us</h1>
      </div>

      <div className="section-container">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>We work with you to address your most critical priorities.</h2>
            <p>
              We are ready to provide you with any financial, legal and
              auditing help as well as prepare a business plan, marketing
              or anti-crisis strategy and help with its implementation to
              your business. We are ready to provide you with any
              financial, legal and auditing help as well as prepare a
            </p>
          </div>
          <div className="image-container">
            <img
              src={experince}
              alt="Business meeting with professionals"
              className="meeting-image"
            />
          </div>
        </div>
      </div>

      <div className="vision-mission-container">
        <div className="vision-box">
          <h3>Our Vision</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="mission-box">
          <h3>Our Mission</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
      </div>


      <div className="stores-section">
        <div className="stores-header">
          <h2>Our Stores</h2>
        </div>
        <div className="stores-grid">
          {Array(12).fill(null).map((_, index) => (
            <StoreCard
              key={index}
              image={storeImage}
              location="Nizamabad"
            />
          ))}
        </div>
      </div>



    </div>




  )
}
