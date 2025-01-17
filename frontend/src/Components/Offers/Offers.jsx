import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/BambooBTSpeaker.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive Offers</h1>
        <p>Grab yours before it's gone</p>
        <button onClick={() => {window.location.replace("/product/16");}}>Check Now!</button>
      </div>
      <div className="offers-right">
            <img src={exclusive_image} alt=""/>
      </div>
    </div>
  )
}

export default Offers
