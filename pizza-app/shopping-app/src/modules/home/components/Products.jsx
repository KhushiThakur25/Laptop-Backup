import React from 'react'
import './css/Products.css'
import Product from './Product'
const Products = ({arr,addtocart}) => {
   const formCart=(object)=>{
    addtocart(object);
   }

  return (
    <div className='Container'>
      {
        arr.map((element,index)=>(
          <div key={index} >
          <Product
           id={element.id}
           name={element.name}
           desc={element.description}
           price={element.price}
           url={element.url}
           addtocart={formCart}
           />
          </div>
        ))
      }
        
    </div>
  )
}

export default Products
