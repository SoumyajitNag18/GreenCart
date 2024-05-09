import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const [product_description, setProductDescription] = useState();
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:4000/product/${productId}`)
    .then((response)=>response.json())
    .then((data)=>{
      console.log("Data: ",data)
      setProduct(data?.product)
      setProductDescription(data?.product?.description)
    });
  },[])
  return (
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox description={product_description}/>
        <RelatedProducts/>
    </div>
  )
}

export default Product
