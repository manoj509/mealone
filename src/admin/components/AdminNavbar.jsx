
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const AdminNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-4 py-2 shadow-md bg-orange-100">
      <h1 className="text-2xl font-bold">MealOne</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Admin</span>
        <div><FaChevronDown className="text-sm" /></div>
      </div>
    </div>
  );
};

export default AdminNavbar;
