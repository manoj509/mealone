




import React from "react";
import StatsCard from "./StatsCard";
import {Link } from "react-router-dom"
import { FaTruck } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="flex space-x-4">
      <Link to={"/a-dashboard/orders"}>
        <StatsCard title="Total Orders" count="50" icon="🛒" />
        </Link>
        <Link to={"/a-dashboard/users"}>
        <StatsCard title="Active Users" count="50" icon="👤" />
        </Link>
        <Link to={"/a-dashboard/delivery-boy"}>
        <StatsCard title="Active Delivery boy" count="50" icon={ <FaTruck className="text-sm text-black" />} />
        </Link>
      </div>
{/*       
      <div className="mt-8 bg-white rounded-lg shadow-lg">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Sr. No.</th>
              <th className="px-4 py-2">Code No.</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Verify</th>
              <th className="px-4 py-2">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index}>
                <td className="px-4 py-2">Header</td>
                <td className="px-4 py-2">Header</td>
                <td className="px-4 py-2">Header</td>
                <td className="px-4 py-2">Header</td>
                <td className="px-4 py-2">Header</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Dashboard;
