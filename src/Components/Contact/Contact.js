// ContactSection.jsx
import React, { useState } from 'react';
import './ContactSection.css';
import facebook from '../../images/Facebook.png';
import instagram from '../../images/instagram.png';
import LinkedIn from '../../images/Linkedin.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="icon">📞</div>
              <div className="info">
                <h3>Phone</h3>
                <p>(+081) 9678 1234</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">✉️</div>
              <div className="info">
                <h3>Email</h3>
                <p>mail@nursee.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">📍</div>
              <div className="info">
                <h3>Address</h3>
                <p>London Eye, London</p>
              </div>
            </div>


          </div>

          <div className="social-media">
            <h3>Social Media</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#" className="social-icon">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="#" className="social-icon">
                <img src={LinkedIn} alt="Linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">SUBMIT BUTTON</button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.534624878978!2d-0.1223508842089969!3d51.50332107963652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1632764751094!5m2!1sen!2suk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="London Eye Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;