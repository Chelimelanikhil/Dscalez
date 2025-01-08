import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import NavLogo from '../../images/NavLogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to top and close menu after navigation
  const handleMenuClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling to the top
    });

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const getActiveMenu = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path === '/products') return 'Products';
    if (path === '/about') return 'About Us';
    if (path === '/benefits') return 'Benefits';
    if (path === '/gallery') return 'Gallery';
    return '';
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={NavLogo} alt="Dscalez Logo" />
        </div>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className={getActiveMenu() === 'Home' ? 'active' : ''}
            onClick={handleMenuClick}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={getActiveMenu() === 'Products' ? 'active' : ''}
            onClick={handleMenuClick}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={getActiveMenu() === 'About Us' ? 'active' : ''}
            onClick={handleMenuClick}
          >
            About Us
          </Link>
          <Link
            to="/benefits"
            className={getActiveMenu() === 'Benefits' ? 'active' : ''}
            onClick={handleMenuClick}
          >
            Benefits
          </Link>
          <Link
            to="/gallery"
            className={getActiveMenu() === 'Gallery' ? 'active' : ''}
            onClick={handleMenuClick}
          >
            Gallery
          </Link>
          <button className="contact-btn">Contact Us</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
