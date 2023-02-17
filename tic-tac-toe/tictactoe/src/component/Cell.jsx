import React, { useState } from 'react'

const Cell = ({flagXorZero,fn}) => {  
  const[val,setVal]= useState("");
  const toggle=()=>{
    fn();
    setVal(flagXorZero?"X":"0");
  }
   return (
<td>
    <button onClick={toggle} className='btn btn-primary btn-lg'>{val}</button>
</td>
  )
}

export default Cell