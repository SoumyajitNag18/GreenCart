import React from 'react'
import "./GreenTour.css"

const GreenTour = () => {
  return (
    <div className='green'>
      <u><h1>About Sustainable and Eco-Friendly Products</h1></u>
      <div class="ratio ratio-16x9" >
        <iframe src="https://www.youtube.com/embed/fh0Q7SjoxGc?si=ulBxsPlOmPIt31Mk" title="Decoding Sustainable vs Eco-friendly products" allowFullScreen></iframe>
      </div>
      <div class="ratio ratio-16x9" >
        <iframe src="https://www.youtube.com/embed/ocVeDI99Ph4?si=nWX49dgIHvUIRduZ" title="Products from coffee waste" allowFullScreen></iframe>
      </div>
      <div class="ratio ratio-16x9" >
        <iframe src="https://www.youtube.com/embed/vOh9q6n-OFo?si=qS4wFJPerrTrXXMi" title="YouTube video3" allowFullScreen></iframe>
      </div>
      <div class="ratio ratio-16x9" >
        <iframe src="https://www.youtube.com/embed/LjxU13Wxiiw?si=WLWgmNS4IsqSs3Ko" title="YouTube video4" allowFullScreen></iframe>
      </div>
    </div>
    
  )
}

export default GreenTour
