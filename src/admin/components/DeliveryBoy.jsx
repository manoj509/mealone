import React, { useState } from "react";
import MealPreparation from "./MealPreparation";
import DeliveryRequests from "./DeliveryBoyRequests";
import DeliveryBoys from "./DeliveryBoys";

// Components for different pages


const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState("DeliverybodyRequest");

  const renderComponent = () => {
    switch (activeComponent) {
      case "DeliverybodyRequest":
        return <DeliveryRequests/>;
      case "Order":
        return <DeliveryBoys/>;
      default:
        return <MealPreparation/>;
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-500 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">MealOne</h1>
          <ul className="flex space-x-6">
            <li
              className="text-white cursor-pointer hover:underline"
              onClick={() => setActiveComponent("DeliverybodyRequest")}
            >
               Delivery boy Request
            </li>
            <li
              className="text-white cursor-pointer hover:underline"
              onClick={() => setActiveComponent("Order")}
            >
              Delivery Boy 
            </li>
            
          </ul>
        </div>
      </nav>

      {/* Render Selected Component */}
      <div>{renderComponent()}</div>
    </div>
  );
};

export default Navbar;














