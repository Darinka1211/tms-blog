import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Header  } from '../Header/Header';




const Layout = () => {
  return (
      <>
        <Header />
        <div className="container">
            <Outlet/>
        </div>
       
      </>
      
     
  )
}

export default Layout