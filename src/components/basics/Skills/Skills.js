import React from 'react'
import { useState,useEffect } from 'react'
import Animateletter from '../Animateletter/Animateletter'
import "./Skills.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import FireCursorAnimation from "../Cursor/Cursor.js";
const Skills = () => {
  const skillArray=  ['M','y',' ','S','k','i','l','l','s']
const [letterClass, setLetterClass] = useState('text-animate')
useEffect(() => {
  const func= ()=>{setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)}
func ();
}, [])
useEffect(() => {
  AOS.init();
}, []);


  return (
    <>
  <FireCursorAnimation/>
    <div className='skill'  >
    <div className='skillhead' >
    <span className='hd1'>&lt;h2&gt;</span>
    <br/>
  
    <h1 className='anime'><Animateletter strArray={skillArray} letterClass={letterClass} idx={10} />  </h1><br/>
    <span className='hd2'>&lt;/h2&gt;</span>
    <span className='hd3'>&lt;p&gt;</span>
       <br />
       <div className='textzone1'>
      <span> As different projects requires different set of technologies, I keep exploring new tools regularly to keep myself updated to the world. Some of the noteworthy technologies used by me are,</span>
   <br/>
   <div className='logos'>
      <span className='hd5'>&lt;/p&gt;</span><br/>
      <span className='logo1'><i class=" fa fa-solid fa-code"></i></span>
     <span className='logo2'> <i class="fa fa-brands fa-github"></i></span>
     <span className='logo3'><i class="fa-brands fa-react"></i></span>
    <span className='logo4'><i   class="far fa-brands fa-html5"></i></span> 
     <span className='logo5'><i class=" fa fa-brands fa-js"></i></span>
     <span className='logo6'> <i class="fa fa-brands fa-css3"></i></span>
     <span className='logo7'><i class="fa fa-brands fa-sass"></i></span>
     <span className='logo8'> <i class="fa fa-brands fa-bootstrap"></i></span>
      </div>
      </div>

    </div>
   </div>
    </>
  )
}


export default Skills
