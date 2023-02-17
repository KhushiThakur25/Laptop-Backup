import React from 'react'
import './css/Home.css'
import Cart from '../components/Cart'
import Products from '../components/Products'
import arr from '../services/product-services'

const Home = () => {
  return (
   <div className='home-page'>
     <Products arr={arr}/>
    <Cart/>
   </div> 
   
  )
}

export default Home