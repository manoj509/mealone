


import React from 'react';
import mealImage1 from "../../public/assests/mealone.jpg"; // Adjusted path to your assets folder
import mealImage2 from "../../public/assests/mealone.jpg";
import mealImage3 from "../../public/assests/mealone.jpg";
import mealImage4 from "../../public/assests/mealone.jpg";
import { Link } from 'react-router-dom';

const FoodPlan = ({ title, description, price, image , desc }) => {
  return (
    <div 
      style={{
        borderTopRightRadius: 90,
        borderBottomLeftRadius: 90,
        margin: '1rem',
        backgroundColor : "#FF8A04",
        height : "230px",
        width : "360px"
      }}
      className="text-white p-4 sm:p-6 flex items-center shadow-lg relative max-w-lg transition-transform transform hover:scale-105"
    >
      <div className="flex-grow pr-4 sm:pr-10">
        <h3 className="text-md sm:text-lg font-bold">{title}</h3>
        <p className="mt-2 text-xs sm:text-sm break-words">{description}</p>
        <p className="mt-2 text-xs sm:text-sm break-words">{desc}</p>
        <div className="text-xl sm:text-2xl font-bold mt-4 mb-5">₹ {price}</div>
        <Link to="/checkout" className="ml-20 bg-white text-orange-500 font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
          Buy............
        </Link>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 sm:-mr-8">
        <img src={image} alt={title} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md" />
      </div>
    </div>
  );
};

const FoodPlans = () => {
  return (
    <section className="bg-gray-100 py-6 sm:py-12">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Food Plan</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 sm:px-4 place-items-center">
        <FoodPlan
          title="1 Time Meal"
          description="4 Chapati or 2  Bhakri,"
          desc = "Sukhi bhaji, Sup, Rice"
          price="80"
          image={mealImage1}
        />
        <FoodPlan
          title="Veg - 1 Time"
          description="5 days veg,"
          desc = "2 days special veg, 30 Tiffin"
          price="2,000"
          image={mealImage2}
        />
        <FoodPlan
          title="Veg"
          description="5 days veg,"
            desc = " 2 days special veg, 60 Tiffin"
          price="3,500"
          image={mealImage3}
        />
        <FoodPlan
          title="Non Veg"
          description="5 days veg, "
            desc = "2 days non veg, 60 Tiffin"
          price="3,500"
          image={mealImage4}
        />
        <FoodPlan
          title="Non Veg - 1 Time"
          description="5 days veg,"
            desc = " 2 days non veg, 30 Tiffin"
          price="2,000"
          image={mealImage4}
        />
      </div>
    </section>
  );
};

export default FoodPlans;




