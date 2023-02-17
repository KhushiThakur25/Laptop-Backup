import React from 'react'
import Cell from '../component/Cell'
import  { useState } from 'react'

const Grid = () => {
    const[isXand0,setIsXand0]= useState(false);
    const toggleit=()=>{
      setIsXand0(!isXand0);
    }
  return (
    <div className='container'>
        <h1>TIC TAC TOE</h1>
        <table>
            <tbody>
            <tr>
                <Cell flagXorZero={isXand0} fn={toggleit}/>
                <Cell  flagXorZero={isXand0} fn={toggleit}/>
                <Cell flagXorZero={isXand0} fn={toggleit}/>
    
            </tr>
            <tr>
                <Cell flagXorZero={isXand0} fn={toggleit}/>
                <Cell flagXorZero={isXand0} fn={toggleit}/>
                <Cell flagXorZero={isXand0} fn={toggleit}/>
            </tr>
            <tr>
                <Cell flagXorZero={isXand0} fn={toggleit}/>
                <Cell flagXorZero={isXand0} fn={toggleit}/>
                <Cell flagXorZero={isXand0} fn={toggleit}/>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Grid