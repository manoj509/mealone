import React, { useState } from 'react';

const LeftSideCanvaAddress = ({ isOpen, onClose }) => {
  const [addressType, setAddressType] = useState('Home'); // Manage address type selection

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
      {/* Header (Close Button) */}
      <div className="p-4 bg-white shadow sticky top-0 z-10 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Save delivery address</h2>
        <button
          className="text-black text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="p-5 overflow-y-auto max-h-[calc(100vh-150px)]">
        {/* Map Section */}
        <div className="h-48 mb-4 relative">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            {/* Placeholder for Google Maps */}
            <div className="h-full w-full bg-gray-200 rounded-lg">
              <p className="flex items-center justify-center h-full text-gray-500">
                Map goes here
              </p>
            </div>
          </div>
          <button className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
            Drag map
          </button>
        </div>

        {/* Address Section */}
        <div className="mb-4">
          <label className="block text-gray-500 text-sm mb-1" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Enter address"
            value="X2W2+XC Malhanwada, Madhya Pradesh"
            readOnly
            className="w-full border border-gray-300 p-3 rounded bg-gray-100 text-gray-700"
          />
        </div>
        <div className="">
          <input
            id="flatNo"
            type="text"
            placeholder="Enter door/flat number"
            className="w-full border border-gray-300 p-3"
          />
        </div>

        <div className="">
          <input
            id="area"
            type="text"
            placeholder="Enter area"
            className="w-full border border-gray-300 p-3"
          />
        </div>

        <div className="mb-4">
          <input
            id="landmark"
            type="text"
            placeholder="Enter landmark"
            className="w-full border border-gray-300 p-3"
          />
        </div>

        {/* Address Type Selector */}
        <div className="mb-20">
          <p className="text-gray-500 text-sm mb-2">Address Type</p>
          <div className="flex items-center gap-4 ">
            <button
              type="button"
              className={`px-4 py-2 rounded border font-semibold ${
                addressType === 'Home'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setAddressType('Home')}
            >
              Home
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded border font-semibold ${
                addressType === 'Work'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setAddressType('Work')}
            >
              Work
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded border font-semibold ${
                addressType === 'Other'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setAddressType('Other')}
            >
              Other
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="p-5 bg-white shadow sticky bottom-0 w-full">
        <button
          type="button"
          className="w-full px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-bold rounded-lg hover:from-green-500 hover:to-blue-600 hover:scale-105 transform transition duration-300 shadow-lg"
        >
          Save Address & Proceed
        </button>
      </div>
    </div>
  );
};

export default LeftSideCanvaAddress;
