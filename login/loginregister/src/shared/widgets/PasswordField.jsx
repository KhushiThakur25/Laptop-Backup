import React from 'react'

const PasswordField = ({passwordvalue}) => {
  return (
<>
<div className="mb-3">
      <label  className="form-label">{passwordvalue}</label>
      <input type="text"  className="form-control" />
    </div>

</>
  )
}

export default PasswordField