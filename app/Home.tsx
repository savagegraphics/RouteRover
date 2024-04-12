import React from 'react'
import Hero from './Home/Hero'
import First from './MultiCard/First'
import WhyUs from './Home/WhyUs'
import Customers from './Home/Customers'
import Footer from './Home/Footer'
import LoService from './Home/LoService'
import FAQs from './Home/FAQs'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <First />
      <WhyUs />
      <Customers />
      <LoService />
      <FAQs />
      <Footer />
    </div>
  )
}

export default Home
