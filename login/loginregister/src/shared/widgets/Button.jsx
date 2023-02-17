import React from 'react'
import Login from '../../modules/user/components/Login'

const Button = ({title,fn}) => {
  return (
    
        <button className='btn btn-outline-primary btn-lg' onClick={fn} >{title}  </button>

  )
}

export default Button