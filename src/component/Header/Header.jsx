import React from 'react';
import headerImage from '../../assets/MotionArtEffect-logo.png'
import "./Header.css";

const Header = () => (
  <header>
    <div className="header-content">
     
      <img src={headerImage} alt="Attract Your Visitors Attention" />
        
      <button className="purchase-btn">Purchase Now</button>
    </div>
  </header>
);

export default Header;