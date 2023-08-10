import React from 'react'
import { useState,useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Animateletter from '../Animateletter/Animateletter'
// import FireCursorAnimation from "../Cursor/Cursor.js";

import "./Contact.scss"

const Contact = ()=> {
  const contactArray=  ['C','o','n','t','a','c','t',' ',' u','s']
const [letterClass, setLetterClass] = useState('text-animate')
const form = useRef()
useEffect(() => {
  const func= ()=>{setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)}
func ();
}, [])
useEffect(() => {
  AOS.init();
}, []);


const sendEmail = (e) => {
  e.preventDefault()

  emailjs
    .sendForm('service_97xgujh', 'template_xu8wklj', form.current, 'f6MOtkzVAVwSL9aru')
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send the message, please try again')
      }
    )
}

  
  return (
    <>
{/* <FireCursorAnimation/> */}
<div className='ctc'  >

    <div className='contact'>
    <span className='hd1'>&lt;h2&gt;</span>
    <br/>
  
    <h1 className='anime'><Animateletter strArray={contactArray} letterClass={letterClass} idx={10} />  </h1><br/>
    <span className='hd2'>&lt;/h2&gt;</span>
    <span className='ctc1'>&lt;form&gt;</span>
       <br />
       <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
      
      <span className='ctc2'>&lt;/form&gt;</span><br/>
      </div>
    </div>
   
    </>
  )
}

export default Contact
