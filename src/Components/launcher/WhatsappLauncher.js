import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import './WhatsappLauncher.css';

const WhatsappLauncher = ({ phoneNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show launcher when user has scrolled down 300px
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const formattedNumber = phoneNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${formattedNumber}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="whatsapp-launcher">
      {isOpen && (
        <div className="whatsapp-popup">
          <div className="popup-header">
            <h4>Start a Conversation</h4>
            <button 
              className="close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close popup"
            >
              <IoClose size={24} />
            </button>
          </div>
          <p>Hi! Click below to chat with us on WhatsApp</p>
          <button 
            className="whatsapp-button"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp size={20} />
            Start Chat
          </button>
        </div>
      )}
      <button 
        className="launcher-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp chat"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default WhatsappLauncher;