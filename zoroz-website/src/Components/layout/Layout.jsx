import React from 'react'
import { Navbar } from '../navabar/navbar'
import Footer  from '../footer/footer'

export const Layout = ({children}) => {
  return (
    <div >
      <Navbar/>
      <div className="content">
        {children}
      </div>
      <Footer/>
    </div>
  )
}
