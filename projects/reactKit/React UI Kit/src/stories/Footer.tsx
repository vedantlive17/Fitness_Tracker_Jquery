// Footer.tsx
import React from 'react';
import './Footer.css';

interface FooterProps {
  style: 'footer-1' | 'footer-2' | 'footer-3';
}

export const Footer: React.FC<FooterProps> = ({ style }) => {
  return (
    <div className={`footer ${style}`}>
      {style === 'footer-1' && <p>© 2024 Company Name. All rights reserved.</p>}
      {style === 'footer-2' && (
        <React.Fragment>
          <div>
            <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#services">Services</a>
          </div>
        </React.Fragment>
      )}
      {style === 'footer-3' && (
        <React.Fragment>
          <p>Follow us:</p>
          <div className="social-media-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
