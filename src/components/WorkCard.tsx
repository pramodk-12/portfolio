// WorkCard.jsx
import React from 'react';

const WorkCard = ({ imageSrc, date, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      {/* Work Image */}
      <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Date */}
        <p className="text-sm text-gray-500 mb-2">
          {date}
        </p>
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;