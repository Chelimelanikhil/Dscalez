import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import NavLogo from '../../images/NavLogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMenuOpen) setIsMenuOpen(false);
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
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/" onClick={handleMenuClick} className="logo">
            <img src={NavLogo} alt="Dscalez Logo" />
          </Link>
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
            to="/benefits"
            className={getActiveMenu() === 'Benefits' ? 'active' : ''}
            onClick={handleMenuClick}
          >
            Benefits
          </Link>
          <Link
            to="/about"
            className={getActiveMenu() === 'About Us' ? 'active' : ''}
            onClick={handleMenuClick}
          >
            About Us
          </Link>
        
          <Link
            to="/gallery"
            className={getActiveMenu() === 'Gallery' ? 'active' : ''}
            onClick={handleMenuClick}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="contact-btn contact-link"
            onClick={handleMenuClick}
          >
            Contact Us
          </Link>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;