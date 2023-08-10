import React from 'react'
import Animateletter from '../Animateletter/Animateletter'
import { useState,useEffect } from 'react'
import ProjectSection from './Projectsection'
import ProjectsData from './Projectdata';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import FireCursorAnimation from "../Cursor/Cursor.js";
import "./Work.scss"


const Work = () => {
  const workArray=  ['M','y',' ','P','r','o','j','e','c','t','s']
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const func= ()=>{setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)}
  func ();
  }, [])
  useEffect(() => {
    AOS.init({  duration: 800});

  }, []);
  
  
    return (
      <>
{/* <FireCursorAnimation/> */}
      <div className='work'  >
      <div className='prj' >
      <span className='hd1'>&lt;h2&gt;</span>
      <br/>
    
      <h1 className='anime'><Animateletter strArray={workArray} letterClass={letterClass} idx={10} />  </h1><br/>
      <span className='hd2'>&lt;/h2&gt;</span>
      <span className='sec1'>&lt;section&gt;</span>
      <br />
      <ProjectSection projectsData={ProjectsData} />
      <br/><br/>
      <span className='sec2'>&lt;/section&gt;</span><br/>

       </div>
  
      </div>
    
      </>
    )
  
}

export default Work
