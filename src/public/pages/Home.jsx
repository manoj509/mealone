import React from 'react'
import PublicNavbar from './PublicNavbar'
import Hero from './Hero'
import SpecialAboutUs from '../components/SpecialAboutUs'
import FoodPlans from './FoodPlans'
import WorkingProcess from './WorkingProcess'
import About from './About'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
         <PublicNavbar/>
   <Hero/>
   <SpecialAboutUs/>
   <FoodPlans/>
   <WorkingProcess/>
   <About/>
   <Footer/>
    </div>
  )
}

export default Home