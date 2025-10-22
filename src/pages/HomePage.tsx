// HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import FaceCard from '../components/FaceCard';
import AboutComponent from '../components/About';
import WorkComponent from '../components/WorkComponent';

const HomePage = () => {
  return (
    // Set the overall background color to the light yellow shown in the image
    <div className="min-h-screen bg-[#fffde7]">
      <Navbar />
      <FaceCard />
      <AboutComponent />
      <WorkComponent />
      {/* Note: The decorative elements in ContentComponent are designed to scale with the content */}
    </div>
  );
};

export default HomePage;