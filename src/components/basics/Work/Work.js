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
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  
  
  
  
  console.log(scrollPosition);
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
      {scrollPosition>1500 || (scrollPosition>=0 && scrollPosition<50)?(<span className='hd1'>&lt;h2&gt;</span>):(<div></div>)}
      <br/>
    
      <h1 className='anime'>{scrollPosition>1500 || (scrollPosition>=0 && scrollPosition<50)?(<Animateletter strArray={workArray} letterClass="text-animate" idx={10} />):<Animateletter  letterClass={letterClass} idx={10}/>}  </h1><br/>
      {scrollPosition>1500 || (scrollPosition>=0 && scrollPosition<50)?(<span className='hd2'>&lt;/h2&gt;</span>):(<div></div>)}
      {scrollPosition>1500 || (scrollPosition>=0 && scrollPosition<50)?(<span className='sec1'>&lt;section&gt;</span>):(<div></div>)}
      <br />
      <div className='workdisp'>
      <ProjectSection projectsData={ProjectsData} />
     
      <br/><br/>
      {scrollPosition>1500 || (scrollPosition>=0 && scrollPosition<50)?( <span className='sec2'>&lt;/section&gt;</span>):(<div></div>)}<br/>
      </div>
       </div>
  
      </div>
    
      </>
    )
  
}

export default Work
