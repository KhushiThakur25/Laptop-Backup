import React from 'react'
import './css/Product.css';
const Product = ({id,name,description,url,price,addtocart}) => {
  const addtoCart=(id)=>{
    
  }
  return (
    <div className='Product'>
    <div className="card space" >
  <img src={url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="text-center">{id}</h5>
    <h5 className="card-title">{name}</h5>
    <h2 className='text-center' >{price}</h2>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button onClick={() => addtoCart(id)} className="btn btn-primary">
            Add to cart
          </button>
  </div>
</div>
    </div>
  )
}

export default Product