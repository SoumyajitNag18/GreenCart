import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  const latestCollectionRedirect = () => {
    window.location.replace('/latest-collection');
}
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Do you also want to save our planet?</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Get ready to switch</p>
          </div>
          <p>to Eco-friendly products with us</p>
        </div>
        <div className="hero-latest-btn" onClick={latestCollectionRedirect}>
          <div>Latest Additions</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
