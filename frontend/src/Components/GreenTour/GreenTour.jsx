import React from 'react'
import "./GreenTour.css"

const GreenTour = () => {
  return (
    <div className='green'>
      <h1 style={{color: '#3c5b3c'}}><b>ABOUT SUSTAINABLE AND ECO-FRIENDLY PRODUCTS</b></h1>
      <div class="ratio ratio-16x9" >
        <iframe src="https://www.youtube.com/embed/fh0Q7SjoxGc?si=ulBxsPlOmPIt31Mk" title="Decoding Sustainable vs Eco-friendly products" allowFullScreen></iframe>
      </div>
      <div class="ratio ratio-16x9" >
        <iframe src="https://www.youtube.com/embed/ocVeDI99Ph4?si=nWX49dgIHvUIRduZ" title="Products from coffee waste" allowFullScreen></iframe>
      </div>
      <div class="ratio ratio-16x9" >
        <iframe src="https://www.youtube.com/embed/vOh9q6n-OFo?si=qS4wFJPerrTrXXMi" title="Startup Makes Cutlery From Leaves To Avoid Plastic" allowFullScreen></iframe>
      </div>
      <div class="ratio ratio-16x9" >
        <iframe src="https://www.youtube.com/embed/LjxU13Wxiiw?si=WLWgmNS4IsqSs3Ko" title="Capsules Dissolves In Water To Make Cleaners" allowFullScreen></iframe>
      </div>
      <div class="ratio ratio-16x9" >
        <iframe src="https://www.youtube.com/embed/kZIrIQDf1nQ?si=fm1BJUUKGqlzHWhT" title="Sustainability in everyday life" allowFullScreen></iframe>
      </div>
    </div>
    
  )
}

export default GreenTour
