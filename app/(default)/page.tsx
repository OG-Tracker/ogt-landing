export const metadata = {
  title: 'OG Tracker - Home',
  description: 'OG Tracker',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import SimpleSlider from '@/components/carousel'
import MobileBlocker from './mobile'

export default function Home() {
  return (
    
      <>
        <Hero />

        <Testimonials />
        
     
      </>
    
  )
}
