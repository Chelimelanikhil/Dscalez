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
              <img src={phone} alt="Phone" className="icons" />
              <span>+91 99637 13648</span>
            </div>
            <div className="email">
              <img src={mail} alt="Email" className="icons" />
              <span>info@aquapot.in</span>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9473559319956!2d78.48667157463846!3d17.43843098365612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99f22ebcf9a3%3A0xa9b4c0c9f25b6c77!2sHyderbasti%2C%20Rani%20Gunj%2C%20Secunderabad%2C%20Telangana%20500003!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="address">
            <img src={Location} alt="Location" className="icons" />
            <p>#5-2-291/1, Opp:Mahaveer Complex, Hyderabad, Secunderabad - 500003</p>
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
