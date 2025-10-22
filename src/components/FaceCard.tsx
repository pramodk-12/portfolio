// ContentComponent.jsx
import React from 'react';
import image from "../assets/Pramod_Photo.jpeg";
const FaceCard = () => {

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between p-6 md:p-16 lg:p-20 pt-8 md:pt-16 lg:pt-24 min-h-[calc(100vh-80px)]">
      {/* Left Component (Details and Button) */}
      <div className="flex flex-col items-start max-w-lg mb-10 md:mb-0 md:w-1/2">
        <p className="text-xl md:text-2xl font-light text-gray-800 mb-4">
          Hello, I'm Pramod,
        </p>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-tight text-[#1a1a2e] mb-4">
          Full Stack<br />Developer
        </h1>
        
        {/* <p className="text-xl md:text-2xl font-normal text-gray-800 mb-10">
          based in Netherland.
        </p> */}
        
        {/* Resume Button */}
        <button className="py-3 px-8 text-lg font-medium bg-[#ffeb99] text-gray-900 rounded shadow-lg hover:bg-[#ffe066] transition duration-300 w-fit">
          Resume
        </button>
      </div>

      {/* Right Component (Image) */}
      <div className="relative flex justify-center md:justify-center md:w-1/2">
        {/* Decorative "+" elements */}
        <div className="absolute -top-6 right-0 md:right-10 lg:right-20 text-3xl font-extrabold transform rotate-45 text-[#1a1a2e]">
          &times;<br />&times;
        </div>
        
        {/* Image Container with Circle and Dashes */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          {/* Circular frame effect */}
          <div className="absolute inset-0 border-[3px] border-gray-700 rounded-full z-0 transform scale-105"></div>
          
          {/* Dashes decoration */}
          <div className="absolute bottom-10 -left-10 text-3xl font-extrabold transform text-[#1a1a2e] z-10">
            /////
          </div>

          {/* Actual Image */}
          <img
            src={image}
            alt="John Doe Profile"
            className="w-full h-full object-cover rounded-full z-10 relative"
          />
        </div>
      </div>
    </div>
  );
};

export default FaceCard;