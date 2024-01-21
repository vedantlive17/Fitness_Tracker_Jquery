// Navbar.tsx
import React from 'react';
import './navbar.css';

interface NavbarProps {
  style: 'navbar-1' | 'navbar-2' | 'navbar-3';
  logo: string;
}

export const Navbar: React.FC<NavbarProps> = ({ style, logo }) => {
  if (style === 'navbar-3') {
    return (
      <div className={`navbar ${style}`}>
        <div className="navbar-3-container">
          <div className="navbar-logo">{logo}</div>
          <div>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    );
  }

  // Render other navbars normally
  return (
    <div className={`navbar ${style}`}>
      <div className="navbar-logo">{logo}</div>
      <div>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};
