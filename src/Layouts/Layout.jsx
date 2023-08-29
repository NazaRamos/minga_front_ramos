import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props) => {
    let {children} = props

  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout