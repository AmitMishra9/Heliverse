import React from 'react'
import light from '../../assets/motionarteffect-img9.png'
import response from '../../assets/motionarteffect-img6.png'
import user  from '../../assets/motionarteffect-img7.png'
import './Features.css';

function Features() {
    return (
        <div className='Features-section'>
            <h1 className='mainHeading'>An All-Round Plugin <br></br> With Powerful Features</h1>
            <p className='subHeading'>Whether you're a seasoned web designer or just starting out, Motion Art for<br></br> Elementor seamlessly integrates with  the Elementor platform, providing you <br></br> with a seamless and intuitive experience.</p>

            <div className='card-one'>
                <img src={light} alt='' />
                <h3>Light Weight</h3>
                <p>Motion Art for Elementor is designed to be lightweight</p>
            </div>
            <div className='card-two'>
                <img src={response} alt='' />
                <h3>100% Responsive</h3>
                <p>Create a consistent visual experience across all devices.</p>
            </div>
            <div className='card-Three'>
                <img src={user} alt='' />
                <h3>User Friendly Interface</h3>
                <p>Ensure a smooth experience for both applicants and administrators.</p>
            </div>

        </div>
    )
}

export default Features
