import React from 'react'

const TextField = ({labelvalue}) => {
  return (
<>
<div className="mb-3">
      <label  className="form-label">{labelvalue}</label>
      <input type="text"  className="form-control" />
    </div>

</>
  )
}

export default TextField