import React from 'react';
import image1 from '../../assets/motionarteffect-img10.png';
import image2 from '../../assets/motionarteffect-img11.png';
import image3 from '../../assets/motionarteffect-img8.png';
import "./Apply.css";

function Apply() {
  return (
    <div className='applySection'>
      <h1 className='appltheading'>Apply On Any Section Or Enable <br></br> For Whole Page</h1>
      <div className='image-sction'>
        <div className='image-one'>
          <h4>Apply On Section</h4>
          <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
          <img src={image2} alt="image two" />
        </div>
        <div className='image-two'>
          <h4>Apply On Page</h4>
          <p>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
          <img src={image1} alt="image one " />
        </div>
      </div>
      <br></br><br></br>
      <div className='card-sction'>
        <h2>Supported by All Popular Browsers</h2>
        <p>Rest assured, Motion Art is designed to be compatible <br></br> with all major web browsers.</p>
        <img src={image3} alt='image three' />
      </div>
    </div>
  )
}

export default Apply;