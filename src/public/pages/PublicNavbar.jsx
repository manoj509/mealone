
import React, { useState, useEffect } from 'react';
import logo from "../../public/assests/mealone.jpg";
import RightSideCanvas from '../components/RightSideCanvas';
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

const PublicNavbar = ({isFalse}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    if (isCanvasOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    if (user) {
      setIsCanvasOpen(false);
    }
  }, [isCanvasOpen, user]);

  console.log("isDropdownOpen", isDropdownOpen)

  const handleLogOut = ()=>{
       localStorage.removeItem("token")
  }

  return (
    <>
      <nav onMouseLeave={() => setIsDropdownOpen(false)} id="home" className="bg-gradient-to-r from-yellow-400 to-orange-500 w-full px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="MealOne Logo"
                className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
              />
            </Link>
            <span className="text-white font-bold text-xl ml-3">MealOne</span>
          </div>

          {/* Desktop Menu */}
          <ul style={{
             display : isFalse ? "none" : ""
          }} className="hidden md:flex space-x-6 text-black font-semibold">
            <LinkScroll className="cursor-pointer hover:border-b-4 hover:border-white" to="home" smooth={true} duration={500}>Home</LinkScroll>
            <LinkScroll className="cursor-pointer hover:border-b-4 hover:border-white" to="about" smooth={true} duration={500}>About us</LinkScroll>
            <LinkScroll className="cursor-pointer hover:border-b-4 hover:border-white" to="contact" smooth={true} duration={500}>Contact us</LinkScroll>
          </ul>

          {/* User or Sign In Section */}
          <div className="hidden md:flex space-x-4 items-center relative">
            {/* <Link to="/admin"
              className="px-2 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-bold rounded-lg hover:from-green-500 hover:to-blue-600 hover:scale-105 transform transition duration-300 shadow-lg"
            >
              Admin
            </Link> */}
            {user ? (
              <div className="relative">
                <button
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  className="text-white flex  items-center gap-1 font-bold text-xl px-4  rounded-full"
                >
                  <FaUserCircle size={24} />
                  {user?.name
                    ? user.name.slice(0, 5).toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
                    : ''}
                  <FiChevronDown className="text-xl" />
                </button>
                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                    <ul className="divide-y divide-gray-100">
                      {/* Profile Section */}
                      <li className="px-4 py-3">
                        <div className="flex items-center">
                          <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
                            {user?.name?.[0]?.toUpperCase()}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-semibold text-gray-800">
                              {user?.name || 'User Name'}
                            </p>
                            <p className="text-xs text-gray-500">View your profile</p>
                          </div>
                        </div>
                      </li>

                      {/* Options */}
                      <Link to="/profile/plan" className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                        <span className="bg-green-500 text-white rounded-full p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 12h12M6 12l6-6m-6 6l6 6"
                            />
                          </svg>
                        </span>
                        Profile
                      </Link>
                      <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                        <span className="bg-yellow-500 text-white rounded-full p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 10h16M4 14h16M4 18h16"
                            />
                          </svg>
                        </span>
                        Settings
                      </li>
                      <li onClick={handleLogOut} className="px-4 py-2 hover:bg-red-50 cursor-pointer flex items-center gap-2">
                        <span className="bg-red-500 text-white rounded-full p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 16l4-4m0 0l-4-4m4 4H7"
                            />
                          </svg>
                        </span>
                        Logout
                      </li>
                    </ul>
                  </div>
                )}

              </div>
            ) : (
              <div>

              <button
                className="bg-white text-black font-semibold px-4 py-2 rounded-full"
                onClick={() => setIsCanvasOpen(true)}
              >
                Sign In
              </button>

              <button 
                className="bg-white text-black font-semibold px-4 py-2 rounded-full"
                
              >
                <Link to={"/admin"} >Admin</Link>
              </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex flex-col space-x-4 md:hidden ">
              <ul className={`space-y-2 text-black font-semibold ${(setIsMobileMenuOpen) ? "hidden" : ""}`}>
                <li className="cursor-pointer hover:border-b-2 hover:border-white">Home</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-white">About us</li>
                <li className="cursor-pointer hover:border-b-2 hover:border-white">Contact us</li>
              </ul>
              <div className="flex space-x-4">
                {user ? (
                  <div className="relative">
                    <button
                      onTouchStart={() => setIsDropdownOpen(true)}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      className="text-white flex items-center gap-2 font-bold text-xl   rounded-full"
                    >
                      <FaUserCircle size={24} />
                      {user?.name
                        ? user.name.slice(0, 5).toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
                        : ''}
                      <FiChevronDown className="text-xl" />
                    </button>
                    {/* Dropdown */}
                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                        <ul className="divide-y divide-gray-100">
                          {/* Profile Section */}
                          <li className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
                                {user?.name?.[0]?.toUpperCase()}
                              </div>
                              <div className="ml-3">
                                <p className="text-sm font-semibold text-gray-800">
                                  {user?.name || 'User Name'}
                                </p>
                                <p className="text-xs text-gray-500">View your profile</p>
                              </div>
                            </div>
                          </li>

                          {/* Options */}
                          <Link to={"/profile/plan"} className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                            <span className="bg-green-500 text-white rounded-full p-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 12h12M6 12l6-6m-6 6l6 6"
                                />
                              </svg>
                            </span>
                            Profile
                          </Link>
                          <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                            <span className="bg-yellow-500 text-white rounded-full p-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                />
                              </svg>
                            </span>
                            Settings
                          </li>
                          <li onClick={handleLogOut} className="px-4 py-2 hover:bg-red-50 cursor-pointer flex items-center gap-2">
                            <span className="bg-red-500 text-white rounded-full p-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                                />
                              </svg>
                            </span>
                            Logout
                          </li>
                        </ul>
                      </div>
                    )}

                  </div>
                ) : (
                  <button
                    className="bg-white text-black font-semibold px-4 py-2 rounded-full"
                    onClick={() => setIsCanvasOpen(true)}
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
        </div>

         
        {/* Overlay */}
        {isCanvasOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setIsCanvasOpen(false)}
          />
        )}

        {/* Right-Side Canvas Component */}
        {console.log("iscan open" , isCanvasOpen)}
        <RightSideCanvas isOpen={isCanvasOpen} onClose={() => setIsCanvasOpen(false)} />
      </nav>
    </>
  );
};

export default PublicNavbar;




















// import React, { useState, useEffect } from 'react';
// import logo from "../../public/assests/mealone.jpg";
// import RightSideCanvas from '../components/RightSideCanvas';
// import { Link as LinkScroll } from 'react-scroll';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { FaUserCircle } from 'react-icons/fa';
// import { FiChevronDown, FiChevronUp } from "react-icons/fi"

// const PublicNavbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isCanvasOpen, setIsCanvasOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const { user } = useSelector(state => state.auth);

//   useEffect(() => {
//     if (isCanvasOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//     if (user) {
//       setIsCanvasOpen(false);
//     }
//   }, [isCanvasOpen, user]);

//   console.log("isDropdownOpen" , isDropdownOpen)

//   return (
//     <>
//       <nav  onMouseLeave={() => setIsDropdownOpen(false)} id="home" className="bg-gradient-to-r from-yellow-400 to-orange-500 w-full px-8 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <Link to="/">
//               <img
//                 src={logo}
//                 alt="MealOne Logo"
//                 className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
//               />
//             </Link>
//             <span className="text-white font-bold text-xl ml-3">MealOne</span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-black font-semibold">
//             <LinkScroll className="cursor-pointer hover:border-b-4 hover:border-white" to="home" smooth={true} duration={500}>Home</LinkScroll>
//             <LinkScroll className="cursor-pointer hover:border-b-4 hover:border-white" to="about" smooth={true} duration={500}>About us</LinkScroll>
//             <LinkScroll className="cursor-pointer hover:border-b-4 hover:border-white" to="contact" smooth={true} duration={500}>Contact us</LinkScroll>
//           </ul>

//           {/* User or Sign In Section */}
//           <div className="hidden md:flex space-x-4 items-center relative">
//             <Link to="/admin"
//               className="px-2 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-bold rounded-lg hover:from-green-500 hover:to-blue-600 hover:scale-105 transform transition duration-300 shadow-lg"
//             >
//               Admin
//             </Link>
//             {user ? (
//               <div className="relative">
//                 <button
//                   onMouseEnter={() => setIsDropdownOpen(true)}
//                   className="text-white flex  items-center gap-1 font-bold text-xl px-4  rounded-full"
//                 >
//                   <FaUserCircle size={24} />
//                   {user?.name
//                     ? user.name.slice(0, 5).toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
//                     : ''}
//                     <FiChevronDown className="text-xl" />
//                 </button>
//                 {/* Dropdown */}
//                 {isDropdownOpen && (
//   <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
//     <ul className="divide-y divide-gray-100">
//       {/* Profile Section */}
//       <li className="px-4 py-3">
//         <div className="flex items-center">
//           <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
//             {user?.name?.[0]?.toUpperCase()}
//           </div>
//           <div className="ml-3">
//             <p className="text-sm font-semibold text-gray-800">
//               {user?.name || 'User Name'}
//             </p>
//             <p className="text-xs text-gray-500">View your profile</p>
//           </div>
//         </div>
//       </li>

//       {/* Options */}
//       <Link to="/profile" className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
//         <span className="bg-green-500 text-white rounded-full p-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 12h12M6 12l6-6m-6 6l6 6"
//             />
//           </svg>
//         </span>
//         Profile
//       </Link>
//       <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
//         <span className="bg-yellow-500 text-white rounded-full p-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 10h16M4 14h16M4 18h16"
//             />
//           </svg>
//         </span>
//         Settings
//       </li>
//       <li className="px-4 py-2 hover:bg-red-50 cursor-pointer flex items-center gap-2">
//         <span className="bg-red-500 text-white rounded-full p-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M17 16l4-4m0 0l-4-4m4 4H7"
//             />
//           </svg>
//         </span>
//         Logout
//       </li>
//     </ul>
//   </div>
// )}

//               </div>
//             ) : (
//               <button
//                 className="bg-white text-black font-semibold px-4 py-2 rounded-full"
//                 onClick={() => setIsCanvasOpen(true)}
//               >
//                 Sign In
//               </button>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden bg-white text-black font-semibold px-4 py-2 rounded-full"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             Menu
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="flex flex-col space-y-4 md:hidden ">
//             <ul   className={`space-y-2 text-black font-semibold ${setIsMobileMenuOpen ? "hidden" : ""}`}>
//               <li className="cursor-pointer hover:border-b-2 hover:border-white">Home</li>
//               <li className="cursor-pointer hover:border-b-2 hover:border-white">About us</li>
//               <li className="cursor-pointer hover:border-b-2 hover:border-white">Contact us</li>
//             </ul>
//             <div className="flex space-x-4">
//             {user ? (
//               <div className="relative">
//                 <button
//                 onTouchStart={()=>setIsDropdownOpen(true)}
//                   onMouseEnter={() => setIsDropdownOpen(true)}
//                   className="text-white flex items-center gap-2 font-bold text-xl   rounded-full"
//                 >
//                   <FaUserCircle size={24} />
//                   {user?.name
//                     ? user.name.slice(0, 5).toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
//                     : ''}
//                   <FiChevronDown className="text-xl" />
//                 </button>
//                 {/* Dropdown */}
//                 {isDropdownOpen && (
//   <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
//     <ul className="divide-y divide-gray-100">
//       {/* Profile Section */}
//       <li className="px-4 py-3">
//         <div className="flex items-center">
//           <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
//             {user?.name?.[0]?.toUpperCase()}
//           </div>
//           <div className="ml-3">
//             <p className="text-sm font-semibold text-gray-800">
//               {user?.name || 'User Name'}
//             </p>
//             <p className="text-xs text-gray-500">View your profile</p>
//           </div>
//         </div>
//       </li>

//       {/* Options */}
//       <Link to={"/profile"} className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
//         <span className="bg-green-500 text-white rounded-full p-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 12h12M6 12l6-6m-6 6l6 6"
//             />
//           </svg>
//         </span>
//         Profile
//       </Link>
//       <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
//         <span className="bg-yellow-500 text-white rounded-full p-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 10h16M4 14h16M4 18h16"
//             />
//           </svg>
//         </span>
//         Settings
//       </li>
//       <li className="px-4 py-2 hover:bg-red-50 cursor-pointer flex items-center gap-2">
//         <span className="bg-red-500 text-white rounded-full p-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M17 16l4-4m0 0l-4-4m4 4H7"
//             />
//           </svg>
//         </span>
//         Logout
//       </li>
//     </ul>
//   </div>
// )}

//               </div>
//             ) : (
//               <button
//                 className="bg-white text-black font-semibold px-4 py-2 rounded-full"
//                 onClick={() => setIsCanvasOpen(true)}
//               >
//                 Sign In
//               </button>
//             )}
//             </div>
//           </div>
//         )}

//         {/* Overlay */}
//         {isCanvasOpen && (
//           <div
//             className="fixed inset-0 bg-black opacity-50 z-40"
//             onClick={() => setIsCanvasOpen(false)}
//           />
//         )}

//         {/* Right-Side Canvas Component */}
//         <RightSideCanvas isOpen={isCanvasOpen} onClose={() => setIsCanvasOpen(false)} />
//       </nav>
//     </>
//   );
// };

// export default PublicNavbar;
