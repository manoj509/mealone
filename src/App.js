import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./user/pages/Checkout";
import Home from "./public/pages/Home";
import AdminDashboard from "./admin/pages/AdminDashboard";
import "./admin/components/Sidebar.css"
import { fetchProtected } from "./utils/authApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useDispatch } from "react-redux";
import { verifyToken } from "./redux/slices/authSlices";
import ProfileRouting from "./user/ProfileRouting";
const App = () => {
 const dispatch = useDispatch()
   useEffect(()=>{
          dispatch(verifyToken())
   },[dispatch])
  return (
    <Router>
       <ToastContainer autoClose={1000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={  <Checkout />}  />
        <Route path="/profile/*"    element={ <ProtectedRoute> <ProfileRouting /></ProtectedRoute>} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
