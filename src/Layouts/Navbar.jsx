import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex absolute justify-between items-center px-4 pt-2 h-1/6 md:absolute w-full'>
        <img className='md:hidden w-15 h-12 absolute top-5 left-5' src="../public/images/Menu_mobile.png" alt="" />
        <img className='max-md:hidden w-15 h-12 absolute top-5 left-5' src="../public/images/Menu.png" alt="" />
        <img className="w-15 h-8 absolute top-5 right-5" src="../public/images/Logo(1)_3.png" alt="" />
    </nav>
  )
}
