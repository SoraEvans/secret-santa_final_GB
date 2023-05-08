import React from 'react'
import HeroSection from './components/mainSection/HeroSection'
import Instr from './components/instruction/Instructions'
import Carousel from './components/carousel/Carousel'
import AccordionFaq from './components/accordion/AccordionFaq'

const Home = () => (
  <>
    <HeroSection />
    <Instr />
    <AccordionFaq />
    <Carousel />
  </>
)

export default Home
