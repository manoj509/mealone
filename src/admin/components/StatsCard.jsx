import React from "react";

const StatsCard = ({ title, count, icon }) => {
  return (
    <div className="bg-blue-500 text-white rounded-lg p-4 shadow-lg w-60">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{title}</h3>
        <span>{icon}</span>
      </div>
      <h1 className="text-3xl font-bold mt-2">{count}</h1>
      <button className="mt-4 text-sm underline">View More...</button>
    </div>
  );
};

export default StatsCard;

