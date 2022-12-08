import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = (children) => {
  return (
    <div className='layout-container'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout