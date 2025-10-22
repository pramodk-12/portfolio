// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 md:p-8">
      {/* Logo/Name */}
      <div className="text-xl md:text-2xl font-bold text-gray-800">
        Pramod Kumar
      </div>

      {/* Navigation Links (Hidden on small screens, adjust as needed for full menu) */}
      <div className="hidden md:flex space-x-8 text-lg font-medium text-gray-700">
        <a href="#home" className="hover:text-blue-600 transition duration-300">Home</a>
        <a href="#about" className="hover:text-blue-600 transition duration-300">About</a>
        <a href="#work" className="hover:text-blue-600 transition duration-300">Work</a>
      </div>

      {/* Social Media Icons (Using simple text/emojis as placeholders) */}
      <div className="flex space-x-4 text-xl">
        {/* Placeholder for social icons (e.g., Dribbble, Behance, Twitter) */}
        <a href="#" className="hover:text-blue-600 transition duration-300">
          <span role="img" aria-label="Dribbble">🏀</span>
        </a>
        <a href="#" className="hover:text-blue-600 transition duration-300">
          <span role="img" aria-label="Behance">🅱️ē</span>
        </a>
        <a href="#" className="hover:text-blue-600 transition duration-300">
          <span role="img" aria-label="Twitter">🐦</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;