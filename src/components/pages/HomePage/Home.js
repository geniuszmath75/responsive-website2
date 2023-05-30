import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

function Home() {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjFour} />
    </>
  )
}

export default Home
