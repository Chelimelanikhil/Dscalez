// ContactSection.jsx
import React, { useState } from 'react';
import './ContactSection.css';
import facebook from '../../images/FacebookC.png';
import instagram from '../../images/InstaC.png';
import LinkedIn from '../../images/LinkedinC.png';
import Mail from '../../images/Mail.png';
import Location from '../../images/Location.png';
import Phone from '../../images/Phone.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    message: '',
    type: '' // 'success' or 'error'
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: '', type: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'f30defa0-147e-47be-888b-bc137613d622', // Replace with your access key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      const result = await response.json();
      if (response.status === 200) {
        setStatus({
          message: 'Thank you for contacting us! We will get back to you soon.',
          type: 'success'
        });
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setStatus({
          message: result.message || 'Something went wrong. Please try again later.',
          type: 'error'
        });
      }
    } catch (error) {
      setStatus({
        message: 'Something went wrong. Please try again later.',
        type: 'error'
      });
    } finally {
      setLoading(false);
      // Clear status after 5 seconds
      setTimeout(() => {
        setStatus({ message: '', type: '' });
      }, 5000);
    }
  };

  return (
    <div className='contact-section'>
      <div className="header-section-contact">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="icon"><img src={Phone} alt="Phone" /></div>
                <div className="info">
                  <h3>Phone</h3>
                  <p>(+081) 9678 1234</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><img src={Mail} alt="Email" /></div>
                <div className="info">
                  <h3>Email</h3>
                  <p>mail@nursee.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><img src={Location} alt="Location" /></div>
                <div className="info">
                  <h3>Address</h3>
                  <p>London Eye, London</p>
                </div>
              </div>
            </div>

            <div className="social-media-icons">
              <h3>Social Media</h3>
              <div className="social-icons">
                <a href="#" className="social-icons">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="#" className="social-icons">
                  <img src={instagram} className="insta" alt="Instagram" />
                </a>
                <a href="#" className="social-icons">
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
              <button 
                type="submit" 
                className="submit-button"
                disabled={loading}
              >
                {loading ? 'SENDING...' : 'SUBMIT'}
              </button>
              {status.message && (
                <div className={`status-message ${status.type}`}>
                  {status.message}
                </div>
              )}
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
    </div>
  );
};

export default ContactSection;