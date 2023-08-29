import React, {useState} from 'react'
import Display from '../components/Display'

const Navbar = () => {
  let [open, setOpen] = useState(false)
  
  return (
    <>
      <nav className='flex absolute justify-between items-center px-4 pt-2 h-1/6 md:absolute w-full'>
          <img onClick={() => setOpen(true)} className='md:hidden w-15 h-12 absolute top-5 left-5 cursor-pointer' src="../public/images/Menu_mobile.png" alt="" />
          <img onClick={() => setOpen(true)} className='max-md:hidden w-15 h-12 absolute top-5 left-5 cursor-pointer' src="../public/images/Menu.png" alt="" />
          <img className="w-15 h-8 absolute top-5 right-5" src="../public/images/Logo(1)_3.png" alt="" />
      </nav>
      {open && <Display openClose={setOpen} />}
    </>
  )
}

export default Navbar