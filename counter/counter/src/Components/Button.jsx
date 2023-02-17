import React from 'react'

const Button = ({title,clas,fn}) => {
    const cla = `btn btn-${clas}`
  return (
    <button onClick={fn} className={cla}>{title}</button>
  )
}

export default Button