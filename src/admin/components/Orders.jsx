import React, { useState } from "react";
import MealPreparation from "./MealPreparation";
import SubscriptionDailyOrder from "./SubscriptionDailyOrder";

// Components for different pages
const Home = () => <h2 className="text-center mt-10 text-xl">Meal Preparation</h2>;
const Order = () => <h2 className="text-center mt-10 text-xl">Order </h2>;
const Contact = () => <h2 className="text-center mt-10 text-xl">📞 Contact Us</h2>;

const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState("Home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Home":
        return <MealPreparation/>;
      case "Order":
        return <SubscriptionDailyOrder/>;
      case "Contact":
        return <Contact />;
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
              onClick={() => setActiveComponent("Home")}
            >
              Meal Preparation
            </li>
            <li
              className="text-white cursor-pointer hover:underline"
              onClick={() => setActiveComponent("Order")}
            >
              Order
            </li>
            <li
              className="text-white cursor-pointer hover:underline"
              onClick={() => setActiveComponent("Contact")}
            >
              Contact
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

