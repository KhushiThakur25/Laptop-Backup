import React from 'react'

const Button = ({title,fn}) => {
  return (
<button onClick={fn}  className='btn btn-outline-primary btn-lg' >{title}</button>
  )
}

export default Button