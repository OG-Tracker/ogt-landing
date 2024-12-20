"use client";
import VideoThumb from '@/public/images/dash.png'
import ModalVideo from '@/components/modal-video'
import CanvasAnimation from './animation'
import Typewriter from './typewriter'
import { useState, useEffect } from 'react';

// import { useEffect } from 'react'

export default function Hero() {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      // Update the state based on window width
      setIsMobile(window.innerWidth <= 768);
    }

    // Call handleResize immediately to set initial state correctly
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className="relative mob-class">
      {!isMobile && <CanvasAnimation />}
      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1 animate-pulse " aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="0" stdDeviation="10" flood-opacity="0.2" />
            </filter>
            <filter id="shadow2">
              <feDropShadow dx="0" dy="0" stdDeviation="10" flood-opacity="0.2" flood-color="#000" />
            </filter>
            <filter id="shadow3">
              <feDropShadow
                dx="-0.8"
                dy="-0.8"
                stdDeviation="10"
                flood-color="#000"
                flood-opacity="0.2" />
            </filter>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#D10374" offset="0%" />
              <stop stopColor="#271438" offset="77.402%" />
              <stop stopColor="#271438" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd" filter='url(#shadow)' >
            <circle cx="1232" cy="128" r="110" filter='url(#shadow2)' />
            <circle cx="155" cy="443" r="64" filter='url(#shadow3)' />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-1 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        
          {/* Section header */}
          <div className="text-center pb-12 md:pb-10">
          
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-white" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-kog-dot to-kog-900">OpenGov</span> Deliverables</h1>
            <div className="max-w-3xl mx-auto">
              {/* <p className="text-3xl text-white mb-8" data-aos="zoom-y-out" data-aos-delay="150">Join the tracking movement</p> */}
              <p className="line-1 anim-typewriter text-white text-2xl md:text-3xl max-w-[420px] mt-10">Join the tracking movement</p>
              {/* <Typewriter/> */}
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              
                <div>
                  <a className="btn  text-white text-2xl hover:bg-kog-100 bg-kog-400 hover:shadow-[0px_0px_10px_4px_rgba(254,0,188,0.2)] shadow-[inset_0px_1px_10px_rgba(0,0,0,1)] border-kog-100 rounded-full border hover:border-kog-900 px-12" href="https://app.ogtracker.io">Enter</a>
                </div>

              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}