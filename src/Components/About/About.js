import React from 'react'
import './About.css'
import experince from '../../images/About1.png'
import storeImage from '../../images/storeImage.png'
import locationIcon from '../../images/Location.png'


const StoreCard = ({ location, image }) => {
  return (
    <div className="store-card">
      <div className="store-image-wrapper">
        <img
          src={image}
          alt={`Aquapot RO Store ${location}`}
          className="store-image"
        />
        <div className="store-location">
          <img
            src={locationIcon}
            alt="Location Icon"
            className="location-icon"
          />
          <span className="location-name">{location}</span>
        </div>
      </div>
      <div className="store-overlay">
        <h3>KARNATAKA - {location.toUpperCase()}</h3>
        <div className="store-details">
          <p>BRO STORE {location.toUpperCase()}</p>
          <p>No. 11/1(193), Chaitanya Ground Floor,</p>
          <p>K.P. Puttanna Chetty Road,</p>
          <p>5th Main Road Chamrajpet,</p>
          <p>{location}, Karnataka - 560018</p>
          <p>Tel: +91 9393936142, 9642972325</p>
          <p>Email: <a href={`mailto:rostore${location.toLowerCase()}@gmail.com`}>
            rostore{location.toLowerCase()}@gmail.com
          </a></p>
          <p>Toll free: 1800-425-3648</p>
        </div>
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
          <p>To bring comfort and wellness into every home by providing smarter water solutions that improve water quality and enhance everyday living.</p>
        </div>
        <div className="mission-box">
          <h3>Our Mission</h3>
          <p>We strive to solve water-related challenges with reliable, easy-to-use products that soften water, protect appliances, and improve health and hygiene for families everywhere.</p>
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
