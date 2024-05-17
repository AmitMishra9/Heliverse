import React from 'react';
import img1 from '../../assets/motionarteffect-img1.png'
import img2 from '../../assets/motionarteffect-img2.png'
import img3 from '../../assets/motionarteffect-img3.png'
import img4 from '../../assets/motionarteffect-img4.png'
import magicstick from  '../../assets/motionarteffect-img5.png'
import "./Trusted.css"


function Trusted() {
  return (
    <div className='main-sction section-1'>
      <h3 className='heading'>Trusted by thousands of users around the world</h3>
      <div className='reacting-sction'>
      <div className="circleimage">
          <div className="stars">
              <img src={img1} alt="Circle Logo" />
              <img src={img4} alt="Star" />
          </div>
          <div className="rating-info">4.5 Score, 9 Reviews</div>
      </div>
      <div className="circleimage">
          <div className="stars">
              <img src={img2} alt="Circle Logo" />
              <img src={img4} alt="Star" />
          </div>
          <div className="rating-info">4.5 Score, 9 Reviews</div>
      </div>
      <div className="circleimage">
          <div className="stars">
              <img className='barnd-image' src={img3} alt="Circle Logo" />
              <img src={img4} alt="Star" />
          </div>
          <div className="rating-info">4.5 Score, 9 Reviews</div>
      </div>
  </div>

      <div className='text-img-sction    section-2' >
          <div className='text-section '>
             <h1>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
             <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
              <button className='btn'>Purchase-From-Envato</button>
             </div>

             <div className='image-sction'> 
             <img src={magicstick} alt="magicStick"/>
             </div>
      </div>
    </div>
  );
}

export default Trusted;