import React from 'react'

const Operation = ({title,clas,fn}) => {
    const cla=`btn btn-${clas} btn-lg`
  return (
    <>
    <button onClick={fn} className={cla}>{title}</button>
    </>
  )
}

export default Operation