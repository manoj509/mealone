
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-4 py-2 shadow-md bg-orange-100">
      <h1 className="text-2xl font-bold">MealOne</h1>
      <div className="flex items-center space-x-4">
      <Link to={"/"}
          type="button"
          className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-bold rounded-lg hover:from-green-500 hover:to-blue-600 hover:scale-105 transform transition duration-300 shadow-lg"
        >
          home screen
        </Link>
        <span className="text-gray-600">Admin</span>
        <div><FaChevronDown className="text-sm" /></div>
      </div>
    </div>
  );
};

export default AdminNavbar;
