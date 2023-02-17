import React from 'react'
import { useState } from 'react'
import Button from '../component/Button'
import Label from '../component/Label';

const Container = (title,fn) => {
   const[val,setVal]= useState(0);
     const plus=()=>{
        setVal(val+1);
     }
     const minus=()=>{
        setVal(val-1);
     }

  return (
    <div className='Container'>
        <h1>Counter App </h1>
      <Button title="+" fn={plus}/>&nbsp;&nbsp;
      <Button title="-" fn={minus}/>
      <Label  count={val}/>
    </div>
  )
}

export default Container