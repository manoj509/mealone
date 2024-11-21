import React from "react";

const StatsCard = ({ title, count, icon }) => {
  return (
    <div className="bg-blue-500 text-white rounded-lg p-4 shadow-lg w-60">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{title}</h3>
        <span>{icon}</span>
      </div>
      <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold mt-2">{count}</h1>
      <button className="mt-2 text-sm underline">View More...</button>
      </div>
    </div>
  );
};

export default StatsCard;

