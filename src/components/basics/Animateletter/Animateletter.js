import React from 'react'
import "./Animateletter.scss"
import { useEffect, useState } from 'react';


const Animateletter = ({strArray,letterClass,idx }) => {
  console.log(strArray);
//   const [scrollPosition, setScrollPosition] = useState(0);
// const handleScroll = () => {
//     const position = window.pageYOffset;
//     setScrollPosition(position);

// };

// useEffect(() => {
//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//         window.removeEventListener('scroll', handleScroll);
//     };
// }, []);



  
//   var _window = window,Splitting = _window.Splitting,ScrollOut = _window.ScrollOut;
// Splitting();
// ScrollOut({
//   targets: '.word',
//   scrollingElement: '.page' });

  return (
   <>
   
  {/* <div  className={`animated-text ${isVisible ? 'visible' : ''}`}> */}
      { strArray && strArray.map((item,i)=>(
  <span  key={i+item }  className={`${letterClass} _${i+idx}`}  >{item} </span>
    
      ))

}

</>   
  )


}




export default Animateletter
