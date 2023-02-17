import React from 'react'
import { useState } from 'react'
import Button from '../Components/Button'
import Label from '../Components/Label'

const CounterApp = () => {
    const [count,setCount] = useState(0);
    const plus = ()=>{
        setCount(count+1);
        console.log("Count is ",count);

    }
    const minus = ()=>{
        setCount(count-1);
        console.log("Count is ",count);

    }
  return (
    <>
    <Label title="Counter App"/>
    <Button fn={plus} title="+" clas="primary"/>&nbsp;
    <Button fn={minus} title="-" clas="secondary"/>
    <Label title="Count is " is  val = {count}/>
    </>
  )
}
export default CounterApp