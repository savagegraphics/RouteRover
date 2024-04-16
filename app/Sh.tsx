import React from 'react'
import Card from './ShareBike/UnCard'
import Hero from './ShareBike/Hero'
import Onboarding from './ShareBike/Onboarding'
import SingleCard from './ShareBike/SingleCard'
import Refer from './ShareBike/Refer'
import GHCN from './ShareBike/ghcn'
import Footer from './Home/Footer'

type Props = {}

const Share = (props: Props) => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <SingleCard />
      <Onboarding />
      <Refer />
      <GHCN />
      <Footer />
    </div>
  )
}

export default Share
