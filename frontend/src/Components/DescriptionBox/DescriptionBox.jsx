import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = (props) => {
  const {description} = props;
  return (
    <div className='descriptionBox'>
      <div className="descriptionox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        <div className='descriptionbox-description'>
          {description}
        </div>
      </div>
    </div>
  )
}

export default DescriptionBox

