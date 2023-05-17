import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Layout.scss"
import Navbar from '../Navbar/Navbar'



const Layout = () => {
  return (
    <>
   <Navbar/>
  
      <div className='opt'>
        <header>
      <span className='opentaghtml'>&lt;html&gt; </span>
      <br/>
        <span className='opentagbody'>&lt;body&gt; </span>
        </header>
           <Outlet/>
<br/>
      <footer>
        <span className='closetagbody'>&lt;/body&gt; </span><br/>
        <span className='closetaghtml'>&lt;/html&gt; </span>
        </footer>
      </div>
    </>
  )
}

export default Layout
