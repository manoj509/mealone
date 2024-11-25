import React from "react";

const StatsCard = ({ title, count, icon }) => {
  return (
    <div className="bg-blue-500 text-white rounded-lg p-4 shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-base md:text-lg lg:text-xl font-bold">{title}</h3>
        <span className="text-lg md:text-xl lg:text-2xl">{icon}</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{count}</h1>
        <button className="text-sm md:text-base underline">View More...</button>
      </div>
    </div>
  );
};

export default StatsCard;
