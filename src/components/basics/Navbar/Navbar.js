import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { useState} from 'react'
const Navbar=()=> {
 
 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    // console.log(isDropdownOpen)
  };
      
    return (
        <>
        
            <div className='nav'>
           
  <div className='pro'> <NavLink className="nav_link1"  to="/" ><img src='./images/sonudoc.png' alt="dlogo" className='img'/> <img src='./images/dilpreet.png' alt="dilpreet"  className='img1'/> <img src='./images/webdev.png' alt='web' className='img2' /> </NavLink></div>
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
<div className='menu'>
    
<nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="./images/sonudoc.png" alt="dlogo" className="imges" />
        </NavLink>
        <button className="navbar-toggler" type="button" onClick={handleDropdownToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
            <NavLink className="nav_link" to="/about" >About</NavLink>
            </li>
            <hr></hr>
            <li className='nav-item'>
            <NavLink className="nav_link"  to="/skills"> Skills </NavLink>
            </li>
            <hr></hr>
            <li className='nav-item'>
            <NavLink className="nav_link" to="/work" >Projects </NavLink>
            </li>
            <hr></hr>
            <li className='nav-item'>
            <NavLink  className="nav_link" to="/contact" >Contact</NavLink>
            </li>
            </ul>
  </div> 
  </div> 
</nav>
</div>



        </>
    )
}

export default Navbar