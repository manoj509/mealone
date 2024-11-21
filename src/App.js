import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./user/pages/Checkout";
import Home from "./public/pages/Home";
import AdminDashboard from "./admin/pages/AdminDashboard";
import "./admin/components/Sidebar.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;




 {/* <AdminDashboardRouting/> */}
   {/* <UserDashboard/> */}
   {/* <MapComponent/> */}
   {/* <Checkout/> */}