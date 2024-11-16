import React, { useState } from 'react';
import backgroundImage from "../assets/mealone.jpg";

const UserDashboard = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
    const [isLeaveOpen, setIsLeaveOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleCustomize = () => {
        setIsCustomizeOpen(!isCustomizeOpen);
        setIsLeaveOpen(false); // Close Leave pop-up if Customize is opened
    };

    const toggleLeave = () => {
        setIsLeaveOpen(!isLeaveOpen);
        setIsCustomizeOpen(false); // Close Customize pop-up if Leave is opened
    };

    return (
        <div style={{
            height : "1000px"
        }} className="flex flex-col items-center min-h-screen py-6 px-4">
            
            {/* Header */}
            <header className="w-full max-w-4xl bg-white flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">
                    Meal<span className="text-black">One</span>
                </div>
                
                {/* Profile Info */}
                <div className="relative flex items-center space-x-2">
                    <div className="bg-yellow-500 text-white font-bold h-12 w-12 flex items-center justify-center rounded-full text-xl">
                        M
                    </div>
                    <div className="font-medium text-gray-800">Manoj</div>
                    <button onClick={toggleDropdown} className="text-black px-2 py-1 full text-xl">▼</button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg p-2 mt-2 w-40 z-10">
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Profile</button>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Settings</button>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                        </div>
                    )}
                </div>
            </header>

            {/* Profile Card with Background Image */}
            <div className="relative w-full max-w-4xl mx-auto mt-1 overflow-hidden rounded-lg shadow-lg">
                <div
                    className="w-full h-35 sm:h-48 lg:h-45 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="flex items-center space-x-4 p-6 bg-black/50 h-full">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yellow-500 flex items-center justify-center text-4xl text-black font-bold">
                            M
                        </div>
                        <div>
                            <h2 className="text-white text-lg sm:text-xl font-semibold">Manoj Dakle</h2>
                        </div>
                    </div>
                    <button className="absolute top-5 right-5 bg-red-500 text-white px-2 py-1 rounded-md text-sm sm:text-base hover:bg-red-600">
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* Main Dashboard */}
            <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg mt-6">
                
                {/* Profile Plan Details and Tiffin Counter */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
                    <div className="bg-gray-100 p-4 rounded-lg w-full sm:w-1/3 text-center">
                        <div className="font-semibold text-gray-700">PLAN DETAILS</div>
                        <div className="text-sm text-gray-600">Plan Name: Veg</div>
                        <div className="text-sm text-gray-600">5 Days Veg</div>
                        <div className="text-sm text-gray-600">2 Days Sweet Dish</div>
                    </div>
        
                    <div className="text-center w-full sm:w-1/3">
                        <div className="text-3xl sm:text-4xl font-bold text-gray-800">Left 60</div>
                        <div className="text-sm text-gray-500 ml-40">Tiffins</div>
                    </div>
                </div>

                {/* Customize and Leave Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Customize Section */}
                    <div className="relative bg-gray-100 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-gray-800">Customize</h2>
                            <button onClick={toggleCustomize} className="text-gray-500 text-lg">▼</button>
                        </div>
                        {isCustomizeOpen && (
                            <div className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-lg p-4 mt-2 z-20">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="chapati" className="text-yellow-500" />
                                    <label htmlFor="chapati" className="text-gray-700">Chapati</label>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <input type="checkbox" id="bhakhar" className="text-yellow-500" />
                                    <label htmlFor="bhakhar" className="text-gray-700">Bhakhar</label>
                                </div>
                                <div className="mt-4">
                                    <label className="block text-gray-600">Morning Address</label>
                                    <input 
                                        type="text" 
                                        placeholder="Only one time in month" 
                                        className="w-full p-2 border rounded mt-1" 
                                    />
                                    <button className="text-sm text-red-500 mt-1">Change</button>
                                </div>
                                <div>
                                   <label className="block text-gray-600">Evening Address</label>
                                   <input 
                                       type="text" 
                                       placeholder="Only one time in month" 
                                       className="w-full p-2 border rounded mt-1" />
                                   <button className="text-sm text-red-500 mt-1">Change</button>
                               </div>
                               <div className="flex space-x-4">
                                   <div className="flex flex-col">
                                       <label>Morning Tiffin</label>
                                       <input type="number" className="border rounded p-1 w-20" />
                                   </div>
                                   <div className="flex flex-col">
                                       <label>Evening Tiffin</label>
                                       <input type="number" className="border rounded p-1 w-20" />
                                   </div>
                               </div>
                                
                                <button className="w-full bg-yellow-500 text-white rounded p-2 mt-4">Submit</button>
                            </div>
                        )}
                    </div>

                    {/* Leave Section */}
                    <div className="relative bg-gray-100 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-gray-800">Leave</h2>
                            <button onClick={toggleLeave} className="text-gray-500 text-lg">▼</button>
                        </div>
                        {isLeaveOpen && (
                            <div className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-lg p-4 mt-2 z-20">
                                <p className="text-gray-600">[Leave Calendar Here]</p>
                                <button className="w-full bg-yellow-500 text-white rounded p-2 mt-4">Submit</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;












    