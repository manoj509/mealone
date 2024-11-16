import React from 'react';

// Import your images or use placeholders for now
import step1Image from "../assests/hand.jpg";
import step3Image from "../assests/deliveryboy.png";
import rightarrow from "../assests/rightarrow.png";
import deliveryreceive from "../assests/deliveryreceive.png";


const WorkingProcess = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4 bg-white">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Working Process</h2>
      <p className="text-gray-600 mb-10 text-center">Our goal is to provide you with healthy food.</p>
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <img src={step1Image} alt="Order Subscription" className="w-24 h-24 mb-4" />
          <p className="text-gray-700">You need to do is order your subscription</p>
        </div>
        
        {/* Arrow */}
        <img src={rightarrow} alt="Arrow" className="w- h-8 transform rotate-90 md:rotate-0" />
        
        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <img src={step3Image} alt="Delivery" className="w-24 h-24 mb-4" />
          <p className="text-gray-700">Delivery is always on time and safe</p>
        </div>
        
        {/* Arrow */}
        <img src={rightarrow} alt="Arrow" className="w-15 h-8 transform rotate-90 md:rotate-0" />
        
        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <img src={deliveryreceive} alt="Receive Food" className="w-30 h-24 mb-4" />
          <p className="text-gray-700">You'll receive the best quality food/tiffin</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
