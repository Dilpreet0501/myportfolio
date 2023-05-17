import React, { useState,useEffect } from 'react'
import "./Portfolio.scss";
import Skills from '../Skills/Skills';
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import Animateletter from '../Animateletter/Animateletter';
import { Link } from 'react-router-dom';
import FireCursorAnimation from "../Cursor/Cursor.js";
const Portfolio = () => {

// const job="web developer"
// const name="Dilpreet"
// const greet="Hi,"
// const intro="I'm"

const jobArray=  ['w','e','b','  ','d','e','v','e','l','o','p','e','r']
const nameArray=  ['D','i','l','p','r','e','e','t']
const greetArray=  ['H','i',',']
const introArray= ["I'",'m','  ']


const [letterClass, setLetterClass] = useState('text-animate')
useEffect(() => {
  const func= ()=>{setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)}


  func ();
}, [])


  return (
    <>
  <FireCursorAnimation/>
    <div className='main'>
    <div className='port' >
    <span className='head1'>&lt;h1&gt;</span>
    <br/>
    <div className='textzone'>
    <span className='heading'><Animateletter strArray={greetArray} letterClass={letterClass} idx={10} /><br/>
       <Animateletter strArray={introArray} letterClass={letterClass} idx={13}/>
       <Animateletter strArray={nameArray} letterClass={letterClass} idx={16}/>
       <br />
      <Animateletter strArray={jobArray}letterClass={letterClass} idx={23}/>
    
    </span>
    <span className='head2'>&lt;/h1&gt;</span>
    <br/>
    <span className='head3'>&lt;p&gt;</span>
    <h2> Frontend Developer / Web Developer</h2>
    <br/>
    <span className='head4'>&lt;/p&gt;</span>

   </div>
   <div >< Link to="/contact" className='click'><button className='btn'>Contact me!</button></Link> </div>



    </div>
   <About/>
   <Skills/>
   <Work/>
   <Contact/>

   </div> 
    


    </>
  )
}

export default Portfolio
