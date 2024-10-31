import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Footer from './components/Footer'
import Featured from './components/Featured'

const Home = () => {
  return (
   <>
   <Navbar />
   <Hero />
   <Featured/>
   <Footer/>
   </>
  )
}

export default Home