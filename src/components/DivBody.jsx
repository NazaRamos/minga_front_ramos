import React from 'react'
// import Navbar from '../Layouts/Navbar'
// import Index from '../pages/Index'
// import Footer from '../Layouts/Footer'
import Layout from '../Layouts/Layout'
import Index from '../pages/Index'

export default function DivBody() {
  return (
    <div className="xs: w-full h-screen bg-fondo-mobile bg-cover md:bg-none">
      <Layout>
        <Index/>
      </Layout>
    </div>

  )
}
