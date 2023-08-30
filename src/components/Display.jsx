import React from 'react'

const Display = (props) => {

  return (
    <div className='xs:w-full h-screen md:h-screen md:w-1/3 absolute top-0 left-0 z-10 bg-indigo-700 p-4 flex flex-col gap-7'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <img className="rounded-full" src="../public/images/ProfilePic1.jpg" alt="" />
          <p className='text-white text-xs px-3'>mail@gmail.com</p>
        </div>
        <svg onClick={() => props.openClose(false)} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5857 12L5.2928 17.2929C4.90228 17.6834 4.90228 18.3166 5.2928 18.7071C5.68333 19.0976 6.31649 19.0976 6.70702 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.707 6.70711C19.0975 6.31658 19.0975 5.68342 18.707 5.29289C18.3165 4.90237 17.6833 4.90237 17.2928 5.29289L12 10.5857L6.70711 5.29289Z" fill="white"/>
        </svg> 
      </div>
      <h4 className='w-full text-indigo-800 bg-white font-bold rounded-md py-2 text-xs ps-2'>Home</h4>
      <h4 className='w-full text-white font-bold text-xs ps-2'>Register</h4>
      <h4 className='w-full text-white font-bold text-xs ps-2'>Log in</h4>
    </div>
  )
}

export default Display