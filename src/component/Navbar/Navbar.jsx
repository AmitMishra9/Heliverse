import React from 'react';
import "./Navbar.css";
import logoImage from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav>
    <div className="logo">
    <img src={logoImage} alt="Your Logo" />
  </div>      <div className="nav-right">
        <button className="nav-btn">Bay Now</button>
      </div>
    </nav>
  );
};

export default Navbar;