// AboutComponent.jsx (Revised)
import React from 'react';

const timelineData = [
  {
    year: '2014-2018',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.",
  },
  {
    year: '2018-2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.",
  },
];

const AboutComponent = () => {
  return (
    // ADJUSTMENT: Increase padding on large screens (xl:)
    <div className="min-h-screen bg-[#fffde7] p-6 md:p-16 lg:p-24 xl:px-48"> 
      
      {/* 1. Header Section */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-8xl md:text-9xl font-extrabold text-[#ffeb99] uppercase leading-none">
          about.
        </h2>
        
        {/* ADJUSTMENT: Increase max-width to allow the text to spread more */}
        <p className="max-w-4xl text-lg md:text-xl font-normal text-gray-800 mt-6 pl-0 md:pl-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate 
          tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. 
          Id sit scelerisque neque, proin bibendum diam.
        </p>
      </div>

      {/* 2. Timeline/Experience Section */}
      {/* ADJUSTMENT: Increase max-width here as well */}
      <div className="max-w-6xl pt-8 md:pt-12">
        {timelineData.map((item, index) => (
          <div key={index} className="flex flex-col mb-12 relative">
            
            <div className="ml-0 md:ml-48"> 
              
              {/* Year/Title & Bullet */}
              <div className="flex items-center mb-2">
                {/* Bullet Point */}
                <span className="hidden md:inline-block w-2 h-2 rounded-full bg-gray-800 -ml-8 absolute left-48"></span>
                
                <p className="text-xl md:text-2xl font-bold text-gray-800">
                  {item.year}
                </p>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg font-normal text-gray-700 leading-relaxed max-w-4xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default AboutComponent;