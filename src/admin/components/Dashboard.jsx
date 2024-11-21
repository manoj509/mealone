import React from "react";
import StatsCard from "./StatsCard";
import { Link } from "react-router-dom";
import { FaTruck } from "react-icons/fa";
import ChartBox from "./ChartBox";

const Dashboard = () => {
  return (
    <div
    
      className=" hidden-scrollbar" // Add scrollable styles
    >
      <div className="flex space-x-8">
        <Link to={"/admin/orders"}>
          <StatsCard title="Total Orders" count="50" icon="🛒" />
        </Link>
        <Link to={"/admin/users"}>
          <StatsCard title="Active Users" count="50" icon="👤" />
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
      <div className="">
        <ChartBox />
      </div>
    </div>
  );
};

export default Dashboard;
