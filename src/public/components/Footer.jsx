// Footer.js
import React from 'react';
import instagramIcon from '../assests/mealone.jpg'; // Adjust the path according to your project structure
import linkedinIcon from '../assests/mealone.jpg'; // Adjust the path according to your project structure
import whatsappIcon from "../assests/mealone.jpg"; // Adjust the path according to your project structure

const Footer = () => {
  return (
    <footer id='contact' className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        {/* Contact Us Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact us</h2>
          <form className="flex flex-col gap-2">
            <input 
              type="text" 
              placeholder="Name" 
              className="p-2 rounded bg-gray-700 text-white placeholder-gray-400"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="p-2 rounded bg-gray-700 text-white placeholder-gray-400"
            />
            <textarea 
              placeholder="Enter your message" 
              className="p-2 rounded bg-gray-700 text-white placeholder-gray-400"
              rows="3"
            ></textarea>
            <button type="submit" className="bg-white text-gray-800 font-semibold py-2 rounded mt-2">
              Submit
            </button>
          </form>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        {/* Learn More Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Learn More</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Social links</h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram" className="p-2 bg-white text-gray-800 rounded-full">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6"/>
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 bg-white text-gray-800 rounded-full">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6"/>
            </a>
            <a href="#" aria-label="WhatsApp" className="p-2 bg-white text-gray-800 rounded-full">
              <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6"/>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-10 text-gray-400">
        © 2000 MealOne™ Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
