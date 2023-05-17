import React from 'react'
import "./Animateletter.scss"
const Animateletter = ({strArray,letterClass,idx }) => {
  console.log(strArray)
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
