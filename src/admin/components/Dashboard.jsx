import React from "react";
import StatsCard from "./StatsCard";
import { Link } from "react-router-dom";
import { FaTruck } from "react-icons/fa";
import ChartBox from "./ChartBox";
import AdminNavbar from "./AdminNavbar";

const Dashboard = () => {
  return (
    <>
    <AdminNavbar/>
    <div
    
      className=" hidden-scrollbar" // Add scrollable styles
    >

      <div className="flex justify-center space-x-8 container mx-auto my-3 px-4 lg:px-8">
        <Link to={"/admin/orders"}>
          <StatsCard title="Total Orders" count="50" icon="🛒" />
        </Link>
        <Link to={"/admin/users"}>
          <StatsCard title="Users" count="50" icon="👤" />
        </Link>
        <Link to={"/admin/delivery-boy"}>
          <StatsCard
            title="Active Delivery boy"
            count="50"
            icon={<FaTruck className="text-sm text-black" />}
          />
        </Link>
      </div>
      {/* Chart Section */}
   
        <ChartBox />
      
    </div>
    </>
  );
};

export default Dashboard;
