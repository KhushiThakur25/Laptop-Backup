import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Button from '../components/Button'
import  Display  from '../components/Display'
import TakeInput from '../components/TakeInput'

const Container = () => {
   const [msg,setMsg]= useState("");
   const first= useRef();
   const last = useRef();
 const dis=()=>{
    setMsg("welcome"+" "+first.current.value.charAt(0).toUpperCase()+first.current.value.substring(1).toLowerCase() +" "+ last.current.value.charAt(0).toUpperCase()+last.current.value.substring(1).toLowerCase() );
 }
 const clear=()=>{
   first.current.value="" ;
   last.current.value="";
    setMsg("" );
 }

  return (
    <>
         <h1 className='text-center alert alert-info'>GREET-APP</h1><br />
        <TakeInput r={first} title="Name" /> <br />
        <TakeInput r={last} title="Last Name" /><br />
        <Button clas="success" title="Greet"  fn={dis}/>&nbsp;
        <Button  clas="danger" title="ClearAll"   fn={clear}/>
        <Display msg={msg}/>
    </>
  )
}

export default Container