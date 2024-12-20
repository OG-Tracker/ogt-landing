'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import pLogo from '@/public/logo.png'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition mob-class duration-300 ease-in-out ${!top ? 'bg-kog-100 backdrop-blur-sm shadow-[0_0px_10px_rgba(0,0,0,0.5)] mob-class' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-20 py-12 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 md:mt-1">
          {/* <Image src={pLogo} /> */} 
          <Image className="m-auto  duration-200 inline-block mr-5 bg-kog-100 bg-opacity-50" src={pLogo} width={50} height="144" alt="Element" /><span className='text-white font-bold text-2xl inline-block '></span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
              <a className="btn text-white hover:bg-kog-100 bg-kog-400 hover:shadow-[0px_0px_10px_4px_rgba(254,0,188,0.2)] shadow-[inset_0px_1px_10px_rgba(0,0,0,1)] border-kog-100 rounded-full border hover:border-kog-900 text-bold animate-bounce" href="https://app.ogtracker.io" >OG Tracker</a>
              </li>
              {/* <li>
                <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li> */}
            </ul>

          </nav>

          {/* <MobileMenu /> */}

        </div>
      </div>
    </header>
  )
}
