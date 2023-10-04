import React from 'react'
import { useEffect,useState } from 'react';

import Animateletter from '../Animateletter/Animateletter';

import "./About.scss";



const About = () => {


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

const aboutArray=  ['A','b','o','u','t',' ','M','e']
const [letterClass, setLetterClass] = useState('text-animate')

useEffect(() => {

    const func= ()=>{setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)}
  func ();
}, [])



  return (
    <>
   
  <div className='abt'  >
    <div className='port1' >
    {scrollPosition>300 || (scrollPosition>=0 && scrollPosition<50) ?(<span className='hd1'>&lt;h2&gt;</span>):(<div></div>)}
    <br/>
   
   
    <h1  className='anime' >
      {scrollPosition>300 || (scrollPosition>=0 && scrollPosition<50) ?(<Animateletter strArray={aboutArray} letterClass="text-animate" idx={10} />):<Animateletter  letterClass={letterClass} idx={10} />}
      
      
      
      
      </h1><br/>
   {(scrollPosition>300 || (scrollPosition>=0 && scrollPosition<50))?( <span className='hd2'>&lt;/h2&gt;</span>):(<div></div>)}
   {(scrollPosition>300 || (scrollPosition>=0 && scrollPosition<50))?(<span className='hd3'>&lt;p&gt;</span>):(<div></div>)}
       <br />
       <div className='textzone'>
       <span> I’m a Front-End Developer located in India. I love making beautiful UI's the most. Web Development is more a hobby than a passion for me.</span>
      <br/> <br/>
      <span>I have worked with vast set of web technologies over the period of an year since I started learning to make websites.</span>
      <br/> <br/> 
      <span>The opportunity to learn something new every day is what acts as a fuel that drives me forward.</span>
      </div>
     {scrollPosition>300 || (scrollPosition>=0 && scrollPosition<50)?( <span className='hd4'>&lt;/p&gt;</span>):(<div></div>)}

    </div>
    </div>
  
    </>
  )
}

export default About
