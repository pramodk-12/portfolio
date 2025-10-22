// WorkComponent.jsx
import React from 'react';
import WorkCard from './WorkCard'; // Import the WorkCard component

// Dummy data for your work items
const workItems = [
  {
    imageSrc: 'https://via.placeholder.com/600x400/add8e6/000000?text=Work+Image+1', // Replace with actual image path
    date: 'November 24, 2019',
    title: 'Some Case Study',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.',
  },
  {
    imageSrc: 'https://via.placeholder.com/600x400/90ee90/000000?text=Work+Image+2', // Replace with actual image path
    date: 'November 24, 2019',
    title: 'Some Case Study',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.',
  },
  {
    imageSrc: 'https://via.placeholder.com/600x400/ffb6c1/000000?text=Work+Image+3', // Replace with actual image path
    date: 'November 24, 2019',
    title: 'Another Project Insight',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis enim ut leo eleifend facilisis vel sit amet turpis. Cras non neque sit amet nulla varius.',
  },
  {
    imageSrc: 'https://via.placeholder.com/600x400/87cefa/000000?text=Work+Image+4', // Replace with actual image path
    date: 'December 10, 2020',
    title: 'Design System Implementation',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
  },
];

const WorkComponent = () => {
  return (
    // Outer container with padding and the required light yellow background
    <div className="min-h-screen bg-[#fffde7] p-6 md:p-16 lg:p-24 xl:px-48">
      
      {/* 1. Header Section */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-8xl md:text-9xl font-extrabold text-[#ffeb99] uppercase leading-none">
          work.
        </h2>
        
        {/* Intro Paragraph */}
        <p className="max-w-4xl text-lg md:text-xl font-normal text-gray-800 mt-6 pl-0 md:pl-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate 
          tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. 
          Id sit scelerisque neque, proin bibendum diam.
        </p>
      </div>

      {/* 2. Work Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pt-8">
        {workItems.map((item, index) => (
          <WorkCard 
            key={index} // Using index as key is okay for static lists, but use a unique ID if items can change order or be removed
            imageSrc={item.imageSrc}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      
    </div>
  );
};

export default WorkComponent;