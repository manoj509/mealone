

import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { sendLoginOtp, sendRegisterOtp, verifyLoginOtp, verifyRegisterOtp } from '../../redux/slices/authSlices';
import { notifyError } from '../../utils/ToastUtils';

const RightSideCanvas = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const {loginOtpSendSuccess , registerOtpSendSuccess, error } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // Formik form configuration
  const formik = useFormik({
    initialValues: {
      phone: '',
      name: '',
      email: '',
      otp : ""
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .required('Phone number is required')
        .matches(/^\d{10}$/, 'Must be a 10-digit number'),
      otp: (loginOtpSendSuccess || registerOtpSendSuccess ) ? Yup.string()
      .required('otp  is required')   .matches(/^\d{6}$/, 'Must be a 6-digit number') : Yup.string(),
      name: isLogin ? null : Yup.string().required('Name is required'),
      email: isLogin ? null : Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: (values , {resetForm}) => {
      console.log('Form values:', values);
      // Handle form submission
      if(isLogin ){
          const {phone , otp  } = values
          if(loginOtpSendSuccess){
            dispatch(verifyLoginOtp({phone : `+91${phone}` , otp }))
            //  resetForm()
           }else{
             dispatch(sendLoginOtp({phone : `+91${phone}`}))
           }
        }else{
            const {phone} = values
            if(registerOtpSendSuccess){
                  dispatch(verifyRegisterOtp({...values , phone : `+91${phone}`  }))
                  //  resetForm()
            }else{

              dispatch(sendRegisterOtp({phone : `+91${phone}`}))
            }
          
        }
       
      



    },
  });
    useEffect(()=>{
      if(error){
        notifyError(error.message)
    }
    },[error])

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 h-full md:w-[500px] bg-[#FFFFFF] shadow-lg p-5 px-8 z-50 transform transition-transform duration-300 ease-in-out">
      <button className="text-black text-4xl font-bold mb-4" onClick={onClose}>
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
          <label className="block text-gray-500 text-sm" htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            type="number"
            {...formik.getFieldProps('phone')}
            placeholder="Phone number"
            className="w-full border border-gray-300 p-2 py-4 rounded"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
          ) : null}
        </div>
        {
          (loginOtpSendSuccess || registerOtpSendSuccess ) && ( <div>
          <input
            id="otp"
            type="number"
            {...formik.getFieldProps('otp')}
            placeholder="one time otp"
            className="w-full border border-gray-300 p-2 py-4 rounded"
          />
          {formik.touched.otp && formik.errors.otp ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.otp}</p>
          ) : null}
        </div>)
        }
       

        {/* Name and Email Fields (only visible in Sign up mode) */}
        {(!isLogin && !registerOtpSendSuccess) && (
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
          className="w-full bg-[#FF5200] text-white p-2 py-4 rounded mt-4 font-semibold"
        >
          {isLogin ?  `${loginOtpSendSuccess ? "VERIFY OTP" :'LOGIN' } ` : registerOtpSendSuccess?   "VERIFY OTP" :'CONTINUE'}
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






















// import React, { useEffect, useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
// import { sendLoginOtp, sendRegisterOtp, verifyLoginOtp } from '../../redux/slices/authSlices';
// import { notifyError } from '../../utils/ToastUtils';

// const RightSideCanvas = ({ isOpen, onClose }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const {loginOtpSendSuccess , registerOtpSendSuccess, error } = useSelector(state => state.auth)
//   const dispatch = useDispatch()

//   // Formik form configuration
//   const formik = useFormik({
//     initialValues: {
//       phone: '',
//       name: '',
//       email: '',
//       otp : ""
//     },
//     validationSchema: Yup.object({
//       phone: Yup.string()
//         .required('Phone number is required')
//         .matches(/^\d{10}$/, 'Must be a 10-digit number'),
//       otp: loginOtpSendSuccess ? Yup.string()
//       .required('otp  is required')   .matches(/^\d{6}$/, 'Must be a 6-digit number') : Yup.string(),
//       name: isLogin ? null : Yup.string().required('Name is required'),
//       email: isLogin ? null : Yup.string().email('Invalid email address').required('Email is required'),
//     }),
//     onSubmit: (values) => {
//       console.log('Form values:', values);
//       // Handle form submission
//       if(isLogin ){
//           const {phone , otp  } = values
//           if(loginOtpSendSuccess){
//             dispatch(verifyLoginOtp({phone : `+91${phone}` , otp }))
//            }else{
//              dispatch(sendLoginOtp({phone : `+91${phone}`}))
//            }
//         }else{
//             const {phone} = values
//           dispatch(sendRegisterOtp({phone : `+91${phone}`}))
//         }
       
      



//     },
//   });
//     useEffect(()=>{
//       if(error){
//         notifyError(error.message)
//     }
//     },[error])

//   if (!isOpen) return null;

//   return (
//     <div className="fixed top-0 right-0 h-full md:w-[500px] bg-[#FFFFFF] shadow-lg p-5 px-8 z-50 transform transition-transform duration-300 ease-in-out">
//       {/* Close Button */}
//       {/* {
//         JSON.stringify(formik.touched , formik.errors , formik.values)
//       } */}
//       <button className="text-black text-4xl font-bold mb-4" onClick={onClose}>
//         &times;
//       </button>

//       {/* Header */}
//       <h2 className="text-2xl font-bold mb-1">{isLogin ? 'Login' : 'Sign up'}</h2>
//       <p className="text-sm mb-4">
//         or{' '}
//         <span
//           className="text-orange-500 cursor-pointer"
//           onClick={() => setIsLogin(!isLogin)}
//         >
//           {isLogin ? 'create an account' : 'login to your account'}
//         </span>
//       </p>

//       {/* Form */}
//       <form onSubmit={formik.handleSubmit} className="space-y-4">
//         {/* Phone Number Field */}
//         <div>
//           <label className="block text-gray-500 text-sm" htmlFor="phone">
//             Phone number
//           </label>
//           <input
//             id="phone"
//             type="number"
//             {...formik.getFieldProps('phone')}
//             placeholder="Phone number"
//             className="w-full border border-gray-300 p-2 py-4 rounded"
//           />
//           {formik.touched.phone && formik.errors.phone ? (
//             <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
//           ) : null}
//         </div>
//         {
//           loginOtpSendSuccess && ( <div>
//           <input
//             id="otp"
//             type="number"
//             {...formik.getFieldProps('otp')}
//             placeholder="one time otp"
//             className="w-full border border-gray-300 p-2 py-4 rounded"
//           />
//           {formik.touched.otp && formik.errors.otp ? (
//             <p className="text-red-500 text-xs mt-1">{formik.errors.otp}</p>
//           ) : null}
//         </div>)
//         }
       

//         {/* Name and Email Fields (only visible in Sign up mode) */}
//         {!isLogin && (
//           <>
//             <div>
//               <input
//                 type="text"
//                 {...formik.getFieldProps('name')}
//                 placeholder="Name"
//                 className="w-full border border-gray-300 p-2 py-4 rounded"
//               />
//               {formik.touched.name && formik.errors.name ? (
//                 <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
//               ) : null}
//             </div>

//             <div>
//               <input
//                 type="email"
//                 {...formik.getFieldProps('email')}
//                 placeholder="Email"
//                 className="w-full border border-gray-300 p-2 py-4 rounded"
//               />
//               {formik.touched.email && formik.errors.email ? (
//                 <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
//               ) : null}
//             </div>
//           </>
//         )}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-[#FF5200] text-white p-2 py-4 rounded mt-4 font-semibold"
//         >
//           {isLogin ? 'LOGIN' : 'CONTINUE'}
//         </button>
//       </form>

//       {/* Terms and Conditions (only for Sign up) */}
//       {!isLogin && (
//         <p className="text-xs text-gray-500 mt-4">
//           By creating an account, I accept the{' '}
//           <span className="text-blue-500 cursor-pointer">Terms & Conditions</span> &{' '}
//           <span className="text-blue-500 cursor-pointer">Privacy Policy</span>
//         </p>
//       )}
//     </div>
//   );
// };

// export default RightSideCanvas;
