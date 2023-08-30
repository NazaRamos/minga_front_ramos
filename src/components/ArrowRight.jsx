import React from 'react'

let ArrowRight = ({next}) => {
  return (
    <img className='bg-slate-300 w-5 rounded-full p-1 cursor-pointer' src="../public/images/Vector (Stroke).svg" alt="" onClick={next}/>
  )
}

export default ArrowRight