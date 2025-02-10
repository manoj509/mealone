


import React, { useEffect } from 'react';
import vegplanimage from "../assests/vegplanimage.png"; // Adjusted path to your assets folder

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPlans } from '../../redux/slices/planSlice';




const FoodPlan = ({ title, description, price, image , desc, tiffins  , permonth}) => {
  function splitDescription(description) {
    const midpoint = Math.ceil(description.length / 2);
    const nearestSpace = description.lastIndexOf(' ', midpoint);
    
    const firstHalf = description.slice(0, nearestSpace).trim();
    const secondHalf = description.slice(nearestSpace).trim();
  
    return { firstHalf, secondHalf };
  }
  const { firstHalf, secondHalf } = splitDescription(description);
  return (
    <div 
      style={{
        borderTopRightRadius: 90,
        borderBottomLeftRadius: 90,
        margin: '1rem',
        backgroundColor : "#FF8A04",
        height : "230px",
        // width : "300px"
      }}
      className="w-72 md:w-96 text-white p-4 sm:p-6 flex items-center shadow-lg relative transition-transform transform hover:scale-105"
    >
      <div className="flex-grow pr-4 sm:pr-10">
        <h3 className="text-md sm:text-2xl font-bold">{title}</h3>
        {/* <p className="mt-2 text-xs sm:text-sm break-words">{description}</p> */}
        
        <p className="mt-2 text-xs sm:text-sm break-words">{firstHalf}</p>
        <p className="mt-2 text-xs sm:text-sm break-words">{secondHalf}</p>
        <p className="mt-2 text-xs sm:text-sm break-words">{!tiffins ? tiffins : "Tiffins :"} {tiffins}</p>
      
        <div className="text-xl sm:text-2xl font-bold mt-4 mb-5">₹ {price}  <span className='text-sm'>{permonth}</span></div> 
        
        <Link to="/checkout" className="ml-20 bg-white text-orange-500 font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
          Buy
        </Link>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 sm:-mr-8">
        <img style={{
           backgroundColor : "white" 
        }} src={image} alt={title} className="w-32 h-32 sm:w-32 sm:h-32 rounded-full" />
      </div>
    </div>
  );
};




const FoodPlans = () => {
  const { plans, loading, error, planUpdatedSuccessfully } = useSelector(
    (state) => state.plan
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlans());
  }, []);
 
  return (
    <section className="bg-gray-100 py-6 sm:py-12">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Food Plan</h2>
      </div>

      {/* Loading and Error States */}
      {loading && <p className="text-center text-orange-500">Loading plans...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}\
      {!loading && (<div>


        {plans[0] && (<><div className=' mt-5 flex justify-center mb-5'>
       <FoodPlan
           title={plans[0]?.mealType}
           description={plans[0]?.description}
           desc = {plans[0]?.description}
           price={plans[0]?.price}
           image={vegplanimage}
             permonth = "one time"
         />
       </div>
      {/* Plans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 sm:px-4 place-items-center">
        {plans?.slice(1).map((plan, i) => (
          <FoodPlan
            key={i}
            title={plan?.mealType}
            description={plan?.description}
            price={plan?.price}
            tiffins = {plan?.maxTiffins}
            permonth="per month"
            image={plan?.image ? `http://localhost:5000/uploads/${plan.image}` : vegplanimage}
          />
        ))}
      </div></>)}
      </div>)}

      
    </section>
  );
};

export default FoodPlans;


