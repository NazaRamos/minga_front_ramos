import React from 'react'
import Welcome from '../components/Welcome'
import ButtonWelcome from '../components/ButtonWelcome'
import Carrousel from '../components/Carrousel'

export default function Index() {
  return (
    <main className='flex flex-col justify-center items-center h-screen'>
        <div className='xs:h-screen bg-none gap-5 md:bg-fondo-web bg-cover flex flex-col justify-center items-center md:h-3/4 px-2 w-full'>
            <Welcome/>
            <ButtonWelcome/>
        </div>
        <div className="max-md:hidden md: my-5 w-10/12 h-56 bg-gradient-to-r from-indigo-700 to-indigo-500 flex items-center px-5 justify-between md:h-1/4">
            <Carrousel/>  
        </div>
    </main>
  )
}
