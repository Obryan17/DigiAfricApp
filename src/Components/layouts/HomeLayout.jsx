import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
<<<<<<< HEAD
 
=======

>>>>>>> 482e67647c249fae221c25a6b7f2771ab5d13600
const HomeLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default HomeLayout
