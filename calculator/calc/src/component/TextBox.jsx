import React from 'react'

const TextBox = ({val}) => {
  return (
    <>
    <input className='form-floating mb-3 ' value={val} type="text"  />
    </>
  )
}

export default TextBox