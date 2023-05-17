import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar=()=> {

    return (
        <>
            <div className='nav'>
           
  <div className='pro'> <NavLink className="nav_link"  to="/" >Home </NavLink></div>
 <hr></hr>
 <div className='divs'></div>
 <hr></hr>
 <div className='divs'><NavLink className="nav_link" to="/about" >About</NavLink></div>
 <hr></hr>
 <div className='divs'><NavLink className="nav_link"  to="/skills"> Skills </NavLink></div>
 <hr></hr>
 <div className='divs'><NavLink className="nav_link" to="/work" >Projects </NavLink></div>
 <hr></hr>
 <div className='divs'><NavLink  className="nav_link" to="/contact" >Contact</NavLink></div>
 <hr></hr>
 <div className='items'>
 <div className='item1'><a href='https://www.linkedin.com/in/dilpreet-kaur-bhatia-21a7991ba/' > <i class=" fa fa-brands fa-linkedin fa-beat"></i></a> </div>
 <div className='item2'><a href='https://github.com/Dilpreet0501' ><i class=" fa fa-brands fa-github fa-beat"></i></a> </div>
 <div className='item3'><a href='https://www.instagram.com/__dilpreet__0501/' ><i class=" fa fa-brands fa-instagram fa-beat"></i></a></div>


 </div>

</div>




        </>
    )
}

export default Navbar
