'use client'
// import {React,useState} from "react";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image'
import aplha from '@/public/images/alpha.png'
import chaos from '@/public/images/chaos.png'
import kusamarian from '@/public/images/kusamarian.png'
import pw from '@/public/images/pw.png'
import dablock from '@/public/images/dablock.png'
import saxem from '@/public/images/saxem.png'
import wag from '@/public/images/wag.png'
import poker from '@/public/images/white.png'
import ogwatch from '@/public/images/ogwatch.png'
import polkawatch from '@/public/images/polkawatch.png'
import pdata from '@/public/images/pdata.png'


const images = [
  { defaultSrc: '/public/images/alpha.png', hover: '/public/images/alpha-hover.png', id: 'alpha' },
  
];



// export default function SimpleSlider() {
//   // State to track hover status for each image by ID
//   const [hoveredImage, setHoveredImage] = useState(null);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//   };

//   return (
//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div key={image.id} className="center text-center hover:bg-blue">
//           <a href="#">
//             <Image
//               className="m-auto"
//               src={hoveredImage === image.id ? image.hoverSrc : image.defaultSrc}
//               width={80}
//               height="144"
//               alt="Element"
//               onMouseEnter={() => setHoveredImage(image.id)}
//               onMouseLeave={() => setHoveredImage(null)}
//               style={{ top: '30%' }}
//             />
//           </a>
//         </div>
//       ))}
//     </Slider>
//   );
// }
// slick-slider 

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1400,
    arrows: false
  };
  return (
    <Slider {...settings} className="shadow-[inset_0px_0px_20px_5px_rgba(0,0,0,0.5)] rounded-full pt-8 border border-kog-500">
      <div className="center text-center hover:bg-blue">
        <a href="https://twitter.com/AlphAirdrop" target="_blank">
          <Image className="m-auto opacity-50 hover:opacity-100 duration-200" src={aplha} width={80} height="144" alt="Element" style={{ top: '30%' }} />
        </a>
      </div>
      <div>
      <a href="https://saxemberg.com/opengov/ " target="_blank">
        <Image className="m-auto opacity-50 hover:opacity-100 duration-200" src={saxem} width={100} height="44" alt="Element" style={{ top: '30%' }} />
         </a>
      </div>
      <div>
      <a href="https://github.com/ChaosDAO-org/InternalGov-2.0 " target="_blank">
        <Image className="m-auto opacity-50 hover:opacity-100 duration-200" src={chaos} width={80} height="44" alt="Element" style={{ top: '30%' }} />
         </a>
      </div>
      <div>
      <a href="https://twitter.com/TheKusamarian " target="_blank">
        <Image className="m-auto opacity-50 hover:opacity-100 duration-200" src={kusamarian} width={80} height="44" alt="Element" style={{ top: '30%' }} />
         </a>
      </div>
      {/* <div>
      <a href="https://twitter.com/polkaworld_org " target="_blank">
        <Image className="m-auto opacity-50 hover:opacity-100 duration-200" src={pw} width={100} height="44" alt="Element" style={{ top: '0%' }} />
         </a>
      </div> */}
      {/* <div>
      <a href="https://dablock.com/ " target="_blank">
        <Image className="m-auto opacity-50 hover:opacity-100 duration-200" src={dablock} width={100} height="44" alt="Element" style={{ top: '30%' }} />
         </a>
      </div> */}
      <div>
      <a href="https://twitter.com/thatMediaWag" target="_blank">
        <Image className="m-auto opacity-50 hover:opacity-100 duration-200" src={wag} width={80} height="44" alt="Element" style={{ top: '30%' }} />
         </a>
      </div>
      <div>
      <a href="https://twitter.com/PokerDot_Club " target="_blank">
        <Image className="m-auto opacity-50 hover:opacity-100 duration-200" src={poker} width={110} height="44" alt="Element" style={{ top: '30%' }} />
         </a>
      </div>
      <div>
      <a href="https://polkawatch.app/ " target="_blank">
        <Image className="m-auto opacity-50 hover:opacity-100 duration-200" src={polkawatch} width={100} height="44" alt="Element" style={{ top: '30%' }} />
         </a>
      </div>
      <div>
      <a href="https://www.opengov.watch/ " target="_blank">
        <Image className="m-auto opacity-50 hover:opacity-100 duration-200" src={ogwatch} width={80} height="44" alt="Element" style={{ top: '30%' }} />
         </a>
      </div>

      <div>
      <a href="https://dashboards.data.paritytech.io/" target="_blank">
        <Image className="m-auto opacity-50 hover:opacity-100 duration-200" src={pdata} width={100} height="44" alt="Element" style={{ top: '30%' }} />
         </a>
      </div>
      
    </Slider>
  );
}