import React from 'react'

export default function Carrousel() {
  return (
    <>
        <img className="h-40 mb-10" src="../public/images/deku.png" alt="" />
          <img className="h-40 mb-8" src="../public/images/bnha.png" alt="" />
          <div className='md:w-48 lg:w-96'>
            <h4 className='text-white md:text-center lg:text-left'>Shonen:</h4>
            <p className='text-white text-xs md:text-center lg:text-left'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
    </>
  )
}
