import React from 'react'
import { useState,useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import Animateletter from '../Animateletter/Animateletter'


import "./Contact.scss"

const Contact = ()=> {
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
  const contactArray=  ['C','o','n','t','a','c','t',' ',' M','e']
const [letterClass, setLetterClass] = useState('text-animate')
const form = useRef()
useEffect(() => {
  const func= ()=>{setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)}
func ();
}, [])



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

<div className='ctc'  >

    <div className='contact'>
   {scrollPosition>2100 ||(scrollPosition>=0 && scrollPosition<50)?(<span className='hd1'>&lt;h2&gt;</span>):(<div></div>)}
    <br/>
  
    <h1 className='anime'>{scrollPosition>2100 ||(scrollPosition>=0 && scrollPosition<50)?(<Animateletter strArray={contactArray} letterClass="text-animate" idx={10} />):<Animateletter  letterClass={letterClass} idx={10} />} </h1><br/>
    {scrollPosition>2100 ||(scrollPosition>=0 && scrollPosition<50)?(<span className='hd2'>&lt;/h2&gt;</span>):(<div></div>)}
    {scrollPosition>2100 ||(scrollPosition>=0 && scrollPosition<50)?(<span className='ctc1'>&lt;form&gt;</span>):(<div></div>)}
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
      
          {scrollPosition>2100 ||(scrollPosition>=0 && scrollPosition<50)?(<span className='ctc2'>&lt;/form&gt;</span>):(<div></div>)}
          <br/>
      </div>
    </div>
   
    </>
  )
}

export default Contact
