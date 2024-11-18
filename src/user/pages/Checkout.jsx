

import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import mealoneimg from "../assets/mealone.jpg";
import SubscriptionPlanCard from '../components/SubscriptionPlanCard';
import { Link } from 'react-router-dom';
import LeftSideCanvaAddress from '../components/LeftSideCanvaAddress';
// Validation schemas for login and signup forms
const loginValidationSchema = Yup.object({
  phoneNumber: Yup.string().required('Phone number is required')
});

const signupValidationSchema = Yup.object({
  phoneNumber: Yup.string().required('Phone number is required'),
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required')
});
const addresses = [
  {
    id: 1,
    type: "Morning",
    address: "flat 1, X2W2+XC Malhanwada, Madhya Pradesh, India",
    deliveryTime: "52 MINS",
    icon: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m0 13.5V21m8.485-8.485h-2.25m-13.5 0H3m16.364-5.364l-1.591 1.591m-11.182 0L4.636 5.636m0 12.728l1.591-1.591m11.182 0l1.591 1.591M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
      />
    </svg>
    
    ),
  },
  {
    id: 2,
    type: "Evening",
    address: "sdjkjk`, X2W2+XC Malhanwada, Madhya Pradesh, India",
    deliveryTime: "52 MINS",
    icon: (
      <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-6 h-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.75 9.75 0 0112 3a9.718 9.718 0 019.752 6.748 6.001 6.001 0 00.018 5.254zm-6.006-.002a3.002 3.002 0 100-6.004 3.002 3.002 0 000 6.004z"
  />
</svg>

    ),
  },
];


const Checkout = () => {
  const [isLoginAndSignupToggle, setIsLoginAndSignupToggle] = useState(false); // toggles between Login and Signup forms
  const [isMainLoginAndSignupToggle, setIsMainLoginAndSignupToggle] = useState(true); // toggles between Login/Signup buttons and form view
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  // Toggle between main buttons (Login/Signup) and form view
  const toggleMain = (isSignUp) => {
    setIsMainLoginAndSignupToggle(false);
    setIsLoginAndSignupToggle(isSignUp); // set form view to login or sign-up based on button clicked
  };

  // Function to toggle between Login and Sign Up in form view
  const toggleFormType = () => {
    setIsLoginAndSignupToggle(!isLoginAndSignupToggle);
  };
  useEffect(() => {
    if (isCanvasOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isCanvasOpen]);


  return (
    
    <div className="min-h-screen bg-gray-100 md:px-6">
      <header className="flex items-center justify-between p-4 bg-white shadow-sm flex-col md:flex-row">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
         <Link to='/'>
          <img src={mealoneimg} alt="Logo" className="w-8 h-8 rounded-full" />
         </Link>
          <h1 className="text-xl font-semibold">SECURE CHECKOUT</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-5 py-1 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-all duration-300">
            Help
          </button>
          <button className="px-5 py-1 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-all duration-300">
            Sign in
          </button>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Left Section */}
        <div className="lg:w-2/3 w-full space-y-6">
          {/* Account Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-semibold">Account</h2>
                <p className="text-gray-600">
                  To place your order now, log in to your existing account or sign up.
                </p>
              </div>
              <img src={mealoneimg} alt="Account Illustration" className="w-20 h-20 mx-auto md:mx-0 rounded-full" />
            </div>

            {/* Main Toggle for Login / Sign up */}
            {isMainLoginAndSignupToggle ? (
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4">
                <button
                  onClick={() => toggleMain(false)} // Show login form
                  style={{
                    backgroundColor : "#FF8A04"
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-bold rounded-lg hover:from-green-500 hover:to-blue-600 hover:scale-105 transform transition duration-300 shadow-lg"
                >
                  LOGIN
                </button>
                <button
                  onClick={() => toggleMain(true)} // Show sign-up form
                  style={{
                     backgroundColor : "#FF8A04"
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-bold rounded-lg hover:from-green-500 hover:to-blue-600 hover:scale-105 transform transition duration-300 shadow-lg"
                >
                  SIGN UP
                </button>
              </div>
            ) : (
              <div>
                {/* Toggle between Sign Up and Login */}
                <div className="text-gray-700 mt-4">
                  <span>{isLoginAndSignupToggle ? "Sign up or " : "Log in or "}</span>
                  <a onClick={toggleFormType} href="#" className="text-orange-500 cursor-pointer">
                    {isLoginAndSignupToggle ? "log in to your account" : "sign up for an account"}
                  </a>
                </div>

                {/* Formik Forms for Login and Sign Up */}
                <Formik
  initialValues={{
    phoneNumber: '',
    name: isLoginAndSignupToggle ? '' : '', // Always set a default value
    email: isLoginAndSignupToggle ? '' : '' // Always set a default value
  }}
  validationSchema={isLoginAndSignupToggle ? signupValidationSchema : loginValidationSchema}
  onSubmit={(values) => {
    if (isLoginAndSignupToggle) {
      const signupData = {
        phoneNumber: values.phoneNumber,
        name: values.name,
        email: values.email
      };
      console.log('Signup Data:', signupData);
    } else {
      const loginData = { phoneNumber: values.phoneNumber };
      console.log('Login Data:', loginData);
    }
  }}
>
  {({ isSubmitting }) => (
    <Form className="mt-4 space-y-4">
      <div>
        <Field
          type="text"
          name="phoneNumber"
          placeholder="Phone number"
          className="w-full p-4 border border-gray-300 rounded-md"
        />
        <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
      </div>
      {isLoginAndSignupToggle && (
        <>
          <div>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-4 border border-gray-300 rounded-md"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded-md"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>
        </>
      )}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-bold rounded-lg hover:from-green-500 hover:to-blue-600 hover:scale-105 transform transition duration-300 shadow-lg"
        // disabled={isSubmitting}
      >
        {isLoginAndSignupToggle ? "CONTINUE" : "LOGIN"}
      </button>
      <p className="text-sm text-gray-500 mt-4">
              By creating an account, I accept the{' '}
              <a href="#" className="text-gray-700 font-semibold">
                Terms & Conditions
              </a>{' '}
              &{' '}
              <a href="#" className="text-gray-700 font-semibold">
                Privacy Policy
              </a>
            </p>
    </Form>
  )}
</Formik>

              </div>
            )}

            {/* Terms and conditions */}
           
          </div>

          {/* Delivery Address Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            {/* <h2 className="text-xl font-semibold">Delivery Address</h2> */}
            <div className=" bg-white rounded-lg">
      <h2 className="text-xl font-semibold">Choose a delivery address</h2>
      <p className="text-gray-600 mb-4">Multiple addresses in this location</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <div
          onClick={() => setIsCanvasOpen(true)}
            key={address.id}
            className="border border-gray-300 rounded-lg p-4 flex flex-col space-y-4 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="flex items-center space-x-2">
              {address.icon}
              <h3 className="text-lg font-semibold">{address.type}</h3>
              <h1 
  class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">+</h1>
            </div>
            <p className="text-sm text-gray-600">{address.address}</p>
            <p className="text-sm font-semibold">{address.deliveryTime}</p>
           
        
          </div>
        ))}
      </div>
      <div className='text-center mt-4'>
      <button 
  class="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-bold rounded-lg hover:from-green-500 hover:to-blue-600 hover:scale-105 transform transition duration-300 shadow-lg"
>
  Deliver Here
</button>
      </div>
      {isCanvasOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsCanvasOpen(false)}
        />
      )}
      <LeftSideCanvaAddress isOpen={isCanvasOpen} onClose={() => setIsCanvasOpen(false)} />
    </div>
          </div>

          {/* Payment Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Payment</h2>
          </div> 
        </div>

        {/* Right Section (Order Summary) */}
        <div className="lg:w-1/3 w-full">
          <SubscriptionPlanCard />
        </div>
      </div>
    </div>
  );
};

export default Checkout;





