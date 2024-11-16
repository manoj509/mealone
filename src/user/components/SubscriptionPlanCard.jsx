// SubscriptionPlanCard.js
import React from 'react';
import subscriptionplanimage from "../assets/subscriptionplanimage.png";

const SubscriptionPlanCard = () => {
  return (
    <div className="p-6 bg-white rounded-3xl shadow-lg max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
       <div className='bg-gray-500 p-2'>
       <img
          src={subscriptionplanimage}
          alt="Veg Tiffin"
          className="w-20 h-20 rounded-xl object-cover"
        />
       </div>
       <div>
       <h2 className="text-2xl font-bold text-gray-800">Veg</h2>
       </div>
      </div>
      <ul className="text-gray-600 text-sm space-y-1 mb-4">
        <li>5 days veg</li>
        <li>2 days Special veg</li>
        <li>60 Tiffins</li>
        <li>45 Days Limit</li>
      </ul>
      <hr className="border-gray-300 mb-4" />
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span>00/00/0000</span>
        <span>00:00</span>
      </div>
      <hr className="border-gray-300 mb-4" />
      <div className="text-gray-700 text-sm mb-4 space-y-2">
        <div className="flex justify-between">
          <span>Total Plan</span>
          <span className="font-semibold">3500/-</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span className="font-semibold">0/-</span>
        </div>
      </div>
      <hr className="border-gray-300" />
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg text-gray-700">To Pay</p>
        <p className="text-3xl font-bold text-gray-900">₹ 3,500</p>
      </div>
     
    </div>
    
  );
};

export default SubscriptionPlanCard;
