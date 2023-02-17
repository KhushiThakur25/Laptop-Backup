import React from 'react'
import { useState } from 'react'
import Buttons from '../component/Buttons'
import Operation from '../component/Operation'
import TextBox from '../component/TextBox'

const Container = () => {
    const[val,setVal]=useState("")
    const fn=(title)=>{
       setVal(val+title);
    }
    const solve=()=>{
      setVal(eval(val));
    }
    const clear=()=>{
      setVal("");
    }
  return (
    <div className='Container'>
        <h1 className='alert-info'>Calculator</h1>
        <TextBox val={val}/><br /><br />
        <Buttons clas="secondary " title="1" fn={fn} />&nbsp;&nbsp;
        <Buttons clas="secondary  " title="2" fn={fn} />&nbsp;&nbsp;
        <Buttons clas="secondary " title="3" fn={fn} />&nbsp;&nbsp;
        <Buttons clas="primary " title="+" fn={fn} /><br /><br />
        <Buttons clas="secondary " title="4" fn={fn} />&nbsp;&nbsp;
        <Buttons clas="secondary  " title="5" fn={fn} />&nbsp;&nbsp;
        <Buttons clas="secondary " title="6" fn={fn} />&nbsp;&nbsp;
        <Buttons clas="primary " title="-" fn={fn} /><br /><br />
        <Buttons clas="secondary " title="7" fn={fn} />&nbsp;&nbsp;
        <Buttons clas="secondary " title="8" fn={fn} />&nbsp;&nbsp;
        <Buttons clas="secondary " title="9" fn={fn} />&nbsp;&nbsp;
        <Buttons clas="primary " title="*" fn={fn} /><br /> <br />    
        <Buttons clas="secondary " title="0" fn={fn} />&nbsp;&nbsp;
        <Buttons clas="primary " title="/" fn={fn} />&nbsp;&nbsp;
        <Operation clas="success" title="=" fn={solve} />&nbsp;&nbsp;
        <Operation clas="info" title="AC" fn={clear}/>
    </div>
  )
}

export default Container