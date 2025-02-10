import React, { useState } from "react";
import mobileImage1 from "../assets/apphomepage.avif"; // Replace with your actual image
import mobileImage2 from "../assets/apphomepage.avif"; // Replace with your actual image
import googlePlayBadge from "../assets/googleplaybadge.webp"; // Google Play badge
import appStoreBadge from "../assets/appstore.webp"; // App Store badge

const DownloadAppPage = () => {
  const [contactMethod, setContactMethod] = useState("email"); // State to track selected contact method

  return (
    <div className="bg-[#fef8f5] min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 lg:px-20">
        {/* Left Section - Images */}
        <div className="relative flex items-center justify-center mb-10 lg:mb-0">
          <img
            src={mobileImage1}
            alt="Mobile App 1"
            className="w-[500px] lg:w-[500px] drop-shadow-xl z-10"
          />
        </div>

        {/* Right Section - Form */}
        <div className="p-8 w-full lg:w-[500px]">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Get the MealOne app
          </h1>
          <p className="text-gray-600 mb-6">
            We will send you a link, open it on your phone to download the app.
          </p>

          {/* Radio buttons */}
          <div className="flex items-center space-x-4 mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                className="text-red-500 focus:ring-red-500"
                checked={contactMethod === "email"}
                onChange={(e) => setContactMethod(e.target.value)}
              />
              <span>Email</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                className="text-red-500 focus:ring-red-500"
                checked={contactMethod === "phone"}
                onChange={(e) => setContactMethod(e.target.value)}
              />
              <span>Phone</span>
            </label>
          </div>

          {/* Input Field */}
          <div className="flex items-center space-x-2">
            <input
              type={contactMethod === "email"? "text" : "number" }
              placeholder={contactMethod === "email" ? "Email" : "Phone"}
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-[#FA7B16] text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Share App Link
            </button>
          </div>

          {/* Store Badges */}
          <p className="text-gray-500 mt-6">Download app from</p>
          <div className="flex items-center space-x-4 mt-4">
            <img
              src={googlePlayBadge}
              alt="Google Play"
              className="h-12 w-auto cursor-pointer"
            />
            <img
              src={appStoreBadge}
              alt="App Store"
              className="h-12 w-auto cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppPage;
