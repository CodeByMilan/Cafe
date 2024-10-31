import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Footer from './components/Footer'
import Featured from './components/Featured'
import Review from './pages/Review'
import ContactPage from './pages/ContactPage'
import Registration from './pages/Registration'

const Home = () => {
  return (
   <>
   <Navbar />
   <Hero />
   <Featured/>
   <Registration/>
   <Review/>
   <ContactPage/>
   <Footer/>
   </>
  )
}

export default Home