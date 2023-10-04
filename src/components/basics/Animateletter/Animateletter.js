import React from 'react'
import "./Animateletter.scss"



const Animateletter = ({strArray,letterClass,idx }) => {
  console.log(strArray);


  return (
   <>
   

      { strArray && strArray.map((item,i)=>(
  <span  key={i+item }  className={`${letterClass} _${i+idx}`}  >{item} </span>
    
      ))

}

</>   
  )


}




export default Animateletter
