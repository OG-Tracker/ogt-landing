'use client'

import React, { useState, useEffect } from 'react';
import mobileImage from '@/public/images/mobile-image.png'
import Image from 'next/image';

const MobileBlocker = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 860);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) {
    // If not on mobile, you might want to return null or some desktop-specific content
    return null; // Or replace with any desktop specific content
  }

  // Mobile view
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      
      <div className=' text-white font-bold text-2xl px-5 mb-10'>Please get your 1st <span className='text-kog-900'> OGT</span> experience on desktop<span className='text-kog-900'>.</span></div>
      {/* <img src='../../public/images/mobile-image.png' alt="" style={{ maxWidth: '100%', maxHeight: '40vh', marginBottom: '20px' }} /> */}
      <Image className="rounded-full border border-kog-900 shadow-[0px_0px_10px_10px_rgba(0,0,0,0.4)]" src={mobileImage} width={280} height="14" alt="Element"  />
      
      {/* <p className='text-white font-bold text-2xl'>This application is not accessible on mobile devices. Please use a desktop.</p> */}
    </div>
  );
};

export default MobileBlocker;
