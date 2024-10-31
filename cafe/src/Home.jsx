import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Footer from './components/Footer'
import Featured from './components/Featured'
import Review from './pages/Review'
import ContactPage from './pages/ContactPage'

const Home = () => {
  return (
   <>
   <Navbar />
   <Hero />
   <Featured/>
   <Review/>
   <ContactPage/>
   <Footer/>
   </>
  )
}

export default Home