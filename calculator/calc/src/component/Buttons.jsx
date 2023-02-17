import React from 'react'

const Buttons = ({title,clas,fn}) => {
    const cla=`btn btn-${clas} btn-lg`
  return (
    <>
    <button onClick={()=>fn(title)} className = {cla}>{title}</button>
    </>
  )
}

export default Buttons