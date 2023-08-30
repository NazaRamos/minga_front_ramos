import React from 'react'

let ArrowLeft = ({prev}) => {
  return (
    <>
        <img className='rotate-180 bg-slate-300 w-5 rounded-full p-1 cursor-pointer' src="../public/images/Vector (Stroke).svg" alt="" onClick={prev}/>
    </>
  )
} 

export default ArrowLeft
