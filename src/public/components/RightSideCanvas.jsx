

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RightSideCanvas = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  // Formik form configuration
  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .required('Phone number is required')
        .matches(/^\d{10}$/, 'Must be a 10-digit number'),
      name: isLogin ? null : Yup.string().required('Name is required'),
      email: isLogin ? null : Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: (values) => {
      console.log('Form values:', values);
      // Handle form submission
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg p-5 z-50 transform transition-transform duration-300 ease-in-out">
      {/* Close Button */}
      <button className="text-black text-2xl font-bold mb-4" onClick={onClose}>
        &times;
      </button>

      {/* Header */}
      <h2 className="text-2xl font-bold mb-1">{isLogin ? 'Login' : 'Sign up'}</h2>
      <p className="text-sm mb-4">
        or{' '}
        <span
          className="text-orange-500 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'create an account' : 'login to your account'}
        </span>
      </p>

      {/* Form */}
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Phone Number Field */}
        <div>
          <label className="block text-gray-500 text-sm" htmlFor="phoneNumber">
            Phone number
          </label>
          <input
            id="phoneNumber"
            type="number"
            {...formik.getFieldProps('phoneNumber')}
            placeholder="Phone number"
            className="w-full border border-gray-300 p-2 py-4 rounded"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.phoneNumber}</p>
          ) : null}
        </div>

        {/* Name and Email Fields (only visible in Sign up mode) */}
        {!isLogin && (
          <>
            <div>
              <input
                type="text"
                {...formik.getFieldProps('name')}
                placeholder="Name"
                className="w-full border border-gray-300 p-2 py-4 rounded"
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
              ) : null}
            </div>

            <div>
              <input
                type="email"
                {...formik.getFieldProps('email')}
                placeholder="Email"
                className="w-full border border-gray-300 p-2 py-4 rounded"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
              ) : null}
            </div>
          </>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded mt-4 font-semibold"
        >
          {isLogin ? 'LOGIN' : 'CONTINUE'}
        </button>
      </form>

      {/* Terms and Conditions (only for Sign up) */}
      {!isLogin && (
        <p className="text-xs text-gray-500 mt-4">
          By creating an account, I accept the{' '}
          <span className="text-blue-500 cursor-pointer">Terms & Conditions</span> &{' '}
          <span className="text-blue-500 cursor-pointer">Privacy Policy</span>
        </p>
      )}
    </div>
  );
};

export default RightSideCanvas;
