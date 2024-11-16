import React from 'react';
import qualityImage from "../../public/assests/right.jpg"; // Dummy image paths
import organicImage from "../../public/assests/vegitables.jpg";
import planImage from "../../public/assests/plan.jpg";
import customizeImage from "../../public/assests/right.jpg";
import varietyImage from "../../public/assests/right.jpg";
import deliveryImage from "../../public/assests/right.jpg";

const SpecialAboutUs = () => {
  const features = [
    {
      title: 'Quality Assurance',
      description: 'Guaranteed best quality in every tiffin, commitment to excellence in every bite.',
      image: qualityImage,
    },
    {
      title: 'Organic Vegetables',
      description: 'Sourced from our own organic farm for freshness, providing healthy meals.',
      image: organicImage,
    },
    {
      title: 'Convenient Plans',
      description: 'Enjoy all your tiffins in one day if desired or over 45 days.',
      image: planImage,
    },
    {
      title: 'Customize Option',
      description: 'Personalize and enjoy meals that reflect your individual choices.',
      image: customizeImage,
    },
    {
      title: 'Weekly Variety',
      description: 'Experience new flavors throughout the week, with no menu repetition.',
      image: varietyImage,
    },
    {
      title: 'Free & Flexible Delivery',
      description: 'Free doorstep delivery with flexible locations to suit your needs.',
      image: deliveryImage,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-orange-200 via-white to-gray-100 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">Special About Us</h2>
        <p className="text-gray-600 mt-2 text-lg">The best food for you at affordable prices</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="bg-white p-4 rounded-full shadow-lg mb-4">
              <img src={feature.image} alt={feature.title} className="w-24 h-24" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialAboutUs;
