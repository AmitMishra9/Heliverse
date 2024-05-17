import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        </div>
        <div className="links">
          <a href="#" className="link">
            Documentation
          </a>
          <a href="#" className="link">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;