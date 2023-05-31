import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'
import Pricing from '../../Pricing'

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  )
}

export default Home
