// About.js
import React from 'react';
import aboutusdeliveryboy from '../assests/aboutusdeliveryboy.jpg'; // Adjust the path according to your project structure

const About = () => {
  return (
    <div id='about' className="bg-gradient-to-r from-yellow-400 to-orange-500 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img 
            src={aboutusdeliveryboy} // Use the imported image
            alt="Delivery"
            className="w-full h-auto rounded-md" 
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">About us</h2>
          <h1 className="text-3xl font-bold text-black mb-4">MealOne</h1>
          <p className="text-sm mb-4">
            Welcome to MealOne – your online tiffin delivery app for delicious, fresh meals every day. With MealOne, you can choose from our two categories: Veg and Non-Veg, tailored to suit every taste. We provide a convenient, flexible meal solution with options for monthly subscriptions, where you'll receive two tiffins daily, or a one-time delivery if you need a single meal. Just select your plan, subscribe, and enjoy the ease of daily meals delivered right to your door.
          </p>
          <p className="text-sm">
            Your trusted online tiffin delivery service committed to health and freshness. We offer daily, hygienic meals prepared with care, using vegetables that we grow ourselves to ensure top quality and flavor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
