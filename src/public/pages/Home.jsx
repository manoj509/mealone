import React from 'react'
import PublicNavbar from './PublicNavbar'
import Hero from './Hero'
import SpecialAboutUs from '../components/SpecialAboutUs'
import FoodPlans from './FoodPlans'
import WorkingProcess from './WorkingProcess'
import About from './About'
import Footer from '../components/Footer'
import DownloadAppPage from '../../user/components/DownloadAppPage'
// import UserDashboard from '../../user/pages/UserDashboard'

const Home = () => {
  return (
    <div>
         <PublicNavbar/>
   <Hero/>
  <FoodPlans/>
   <SpecialAboutUs/>
   <WorkingProcess/>
   <About/>
   <DownloadAppPage/>
   <Footer/>
    </div>
  )
}

export default Home