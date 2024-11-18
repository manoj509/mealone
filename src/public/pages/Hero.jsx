

import React from 'react';

import logo from "../../public/assests/mealone.jpg"
import heroImage from "../assests/onlineservices.png"; // Up // Update this path to match the background image location

const Hero = () => {
  return (
    <div className="md:min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500 flex flex-col items-center justify-center p-4">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-black rounded-full w-36 h-36 md:w-48 md:h-48 flex items-center justify-center shadow-lg">
          <img src={logo} alt="MealOne Logo" className="w-24 h-24 md:w-32 md:h-32 rounded-full" />
        </div>
      </div>

      {/* Main Content with Background Image */}
      <div
        className="text-white text-center py-6 px-8 md:py-10 md:px-12 mt-4  max-w-sm md:max-w-md lg:max-w-xl bg-opacity-80 bg-cover"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backdropFilter: 'blur(4px)', 
        }}
      >
        <h2 style={{
            fontSize : "30px"
        }} className="text-2xl md:text-3xl lg:text-4xl font-bold">#1 Tiffin Online Service</h2>
        <p 
        
        className="mt-3 text-base md:text-lg lg:text-xl">
          Book your Monthly Subscription and Enjoy Delicious Food
        </p>
      </div>
    </div>
  );
};

export default Hero;
