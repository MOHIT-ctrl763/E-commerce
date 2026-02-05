import React from 'react'
import Hero from '../Componenets/Hero'
import LatestCollection from '../Componenets/LatestCollection'
import BestSeller from '../Componenets/BestSeller'
import Ourpolocy from '../Componenets/Ourpolocy'
import NewsLetter from '../Componenets/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Ourpolocy />
      <NewsLetter />
    </div>
  )
}

export default Home
