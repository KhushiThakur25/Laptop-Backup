import React from 'react'
import './Label.css';

const Label = ({title,val}) => {

  return (
    <h3 className='font'>{title} {val}</h3>
  )
}

export default Label