import React from 'react';
import './Footer.css';
import footerLogo from '../../images/NavLogo.png';
import phone from '../../images/Phone.png';
import mail from '../../images/Mail.png';
import facebook from '../../images/Facebook.png';
import instagram from '../../images/instagram.png';
import LinkedIn from '../../images/Linkedin.png';
import YouTube from '../../images/Youtube.png';
import FooterBottom from '../../images/FooterBottom.png';
import Location from '../../images/Location.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <img src={footerLogo} alt="Dscalez Accumulator" className="footer-logo" />
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <div className="links-grid">
            <div className="links-column">
              <a href="/home">Home</a>
              <a href="/products">Products</a>
              <a href="/about-us">About Us</a>
            </div>
            <div className="links-column">
              <a href="/benefits">Benefits</a>
              <a href="/gallery">Gallery</a>
              <a href="/contact-us">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <div className="phone-number">
              <img src={phone} alt="Phone" className="icon" />
              <span>+91 7095221035</span>
            </div>
            <div className="email">
              <img src={mail} alt="Email" className="icon" />
              <span>dscalez@dummyemail.com</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#" className="social-icon">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="#" className="social-icon">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a href="#" className="social-icon">
                <img src={YouTube} alt="YouTube" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-section map-section">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8430437991865!2d144.9537353159188!3d-37.81627974270547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778b8b9a79c15c!2sGoogle!5e0!3m2!1sen!2sin!4v1611828265783!5m2!1sen!2sin"
            width="250"
            height="120"
            style={{ border: 0, borderRadius: 3 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="address">
            <img src={Location} alt="Location" className="icon" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <img src={FooterBottom} alt="" className="checkbox-icon" />
        <p>© 2024 dscalez. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
