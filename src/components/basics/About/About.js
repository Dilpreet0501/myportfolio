import React from 'react'
import { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Animateletter from '../Animateletter/Animateletter';
import FireCursorAnimation from "../Cursor/Cursor.js";
import "./About.scss";


const About = () => {
  
const aboutArray=  ['A','b','o','u','t',' ','U','s']
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
  <div className='abt'  >
    <div className='port1' >
    <span className='hd1'>&lt;h2&gt;</span>
    <br/>
   
   
    <h1 className='anime'><Animateletter   strArray={aboutArray} letterClass={letterClass} idx={10} /></h1> <br/>
    <span className='hd2'>&lt;/h2&gt;</span>
    <span className='hd3'>&lt;p&gt;</span>
       <br />
       <div className='textzone'>
      <span> I’m a Front-End Developer located in India. I love making beautiful UI's the most. Web Development is more a hobby than a passion for me.</span>
      <br/> <br/>
      <span>I have worked with vast set of web technologies over the period of an year since I started learning to make websites.</span>
      <br/> <br/> 
      <span>The opportunity to learn something new every day is what acts as a fuel that drives me forward.</span>
      </div>
      <span className='hd4'>&lt;/p&gt;</span>

    </div>
   .</div>
    </>
  )
}

export default About
