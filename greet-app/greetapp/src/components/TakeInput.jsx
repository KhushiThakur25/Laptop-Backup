import React from 'react'

const TakeInput = ({r,title}) => {
    
  return (
    <>
     
      <label htmlFor="">{title}</label>
  <input ref={r} className="form-control" type="text" />
    </>
  )
}

export default TakeInput