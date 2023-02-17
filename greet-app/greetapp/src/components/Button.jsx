import React from 'react'

const Button = ({clas,fn,title}) => {
    const cla=`btn btn-outline-${clas} btn-lg`
  return (
    <>
        <button onClick={fn} className={cla} >{title}</button>
    </>
  )
}

export default Button