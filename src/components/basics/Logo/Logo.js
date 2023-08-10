import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

import "./Logo.scss";
const Logo = () => {
    const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])
  return (
    <>
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src="./images/Dlogo.png"
        alt="JavaScript,  Developer"
      />

{/* <svg width="200" height="200">
      <path d="M50,50 A50,50 0 0,1 150,100 L150,150 A50,50 0 0,0 50,100 Z"
            stroke="black"
            stroke-width="2"
            fill="none">
        <animate attributeName="stroke-dashoffset"
                 from="500"
                 to="0"
                 dur="2s"
                 repeatCount="indefinite" />
                 </path>
                 </svg> */}
      </div>
    </>
  )
}

export default Logo
