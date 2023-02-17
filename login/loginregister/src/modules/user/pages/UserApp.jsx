import React, { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

const UserApp = () => {
  const [toggle,setToggle] = useState(false);
  const registerToggle = ()=>{
    setToggle(false);
  }
  const loginToggle = ()=>{
    setToggle(true);
  }
  return (
    <div className='container'>
      {toggle?<Register fn = {registerToggle}/>: <Login fn = {loginToggle}/>}    
  
   
   </div>
  )
}

export default UserApp