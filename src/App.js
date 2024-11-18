import './index.css'; // Adjust the path if necessary

 import "./App.css"
//  import PublicNavbar from "./public/pages/PublicNavbar.jsx"
// import Hero from './public/pages/Hero.jsx';
// import About from './public/pages/About.jsx';
// import FoodPlans from './public/pages/FoodPlans.jsx';
// import WorkingProcess from './public/pages/WorkingProcess.jsx';
// import Footer from './public/components/Footer.jsx';
// import SpecialAboutUs from './public/components/SpecialAboutUs.jsx';
import Checkout from './user/pages/Checkout.jsx';
// import UserDashboard from './user/pages/UserDashboard.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './public/pages/Home';
import UserDashboard from './user/pages/UserDashboard.jsx';
const App = () => {

  return (
 <>
 <Router>
   {/* <UserDashboard/> */}
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/checkout" element={<Checkout/>} />
     </Routes>
 </Router>

   {/* <UserDashboard/> */}
   {/* <MapComponent/> */}
   {/* <Checkout/> */}
 </>  
  );
}

export default App

