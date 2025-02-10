import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import AdminNavbar from "../components/AdminNavbar";
import Dashboard from "../components/Dashboard";
import Users from "../components/Users";
import DeliveryBoy from "../components/DeliveryBoy";
import Plans from "../components/Plans";
import Settings from "../components/Settings";
import Complaint from "../components/Complaint";
import Orders from "../components/Orders";
import DeliveryBoyAsign from "../components/DeliveryBoyAsign";

const AdminDashboard = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1">
        {/* <AdminNavbar /> */}
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
            <Route path="/delivery-boy" element={<DeliveryBoy />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/delivery-boy-assign" element={<DeliveryBoyAsign/>}/>
          </Routes>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};
export default AdminDashboard






