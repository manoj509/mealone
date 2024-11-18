// PublicNavbar.js
import React, { useState, useEffect } from 'react';
import logo from "../../public/assests/mealone.jpg";
import RightSideCanvas from '../components/RightSideCanvas';
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';

const PublicNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  // Toggle body scroll and overlay when canvas is open
  useEffect(() => {
    if (isCanvasOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isCanvasOpen]);

  return (
    <nav id='home' className="bg-gradient-to-r from-yellow-400 to-orange-500 w-full px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
        <Link to="/" >
          <img
            src={logo}
            alt="MealOne Logo"
            className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
          /> 
          </Link> 
          <span className="text-white font-bold text-xl ml-3">MealOne</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-black font-semibold">
          <LinkScroll className='cursor-pointer hover:border-b-4 hover:border-white' to='home' smooth={true} duration={500}>Home</LinkScroll>
          <LinkScroll className='cursor-pointer hover:border-b-4 hover:border-white' to='about' smooth={true} duration={500}>About us</LinkScroll>
          <LinkScroll className='cursor-pointer hover:border-b-4 hover:border-white' to='contact' smooth={true} duration={500}>Contact us</LinkScroll>
        </ul>

        {/* Register and Sign In Buttons for Desktop */}
        <div className="hidden md:flex space-x-4">
          <button
            className="bg-white text-black font-semibold px-4 py-2 rounded-full"
            onClick={() => setIsCanvasOpen(true)}
          >
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-white text-black font-semibold px-4 py-2 rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col space-y-4 md:hidden">
          <ul className="space-y-2 text-black font-semibold">
            <li className='cursor-pointer hover:border-b-2 hover:border-white"'>Home</li>
            <li className='cursor-pointer hover:border-b-2 hover:border-white"'>About us</li>
            <li className='cursor-pointer hover:border-b-2 hover:border-white"'>Contact us</li>
          </ul>
          <div className="flex space-x-4">
            {/* <button className="bg-white text-black font-semibold px-4 py-2 rounded-full w-full">
              Register
            </button> */}
            <button
              className="bg-white text-black font-semibold px-4 py-2 rounded-full"
              onClick={() => setIsCanvasOpen(true)}
            >
              Sign In
            </button>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isCanvasOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsCanvasOpen(false)}
        />
      )}

      {/* Right-Side Canvas Component */}
      <RightSideCanvas isOpen={isCanvasOpen} onClose={() => setIsCanvasOpen(false)} />
    </nav>
  );
};

export default PublicNavbar;
