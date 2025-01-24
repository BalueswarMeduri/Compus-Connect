
import Hero from '@/components/Hero/Hero'
import Hero2 from '@/components/Hero2.jsx/Hero2'
import Hero3 from '@/components/Hero3.jsx/Hero3'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Hero2/>
        <Hero3/>
        <Footer/>
    </div>
  )
}

export default Home