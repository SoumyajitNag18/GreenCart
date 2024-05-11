import React from 'react'
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Offers from '../Components/Offers/Offers'
import Popular from '../Components/Popular/Popular'
import CarouselPage from '../Components/CarouselPage/CarouselPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Shop.css'

const Shop = () => {
  return (
    <div className='shop-div'>
      <CarouselPage/>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
