"use client";

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="hidden md:block text-blue-950 font-bold text-lg">
          Zafeer Ahamed
        </div>

        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('home')} className="text-blue-950 hover:text-gray-500 font-medium">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-blue-950 hover:text-gray-500 font-medium">About</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-blue-950 hover:text-gray-500 font-medium">Portfolio</button>
          <button onClick={() => scrollToSection('contact')} className="text-blue-950 hover:text-gray-500 font-medium">Contact</button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col space-y-2 pb-4">
            <button onClick={() => scrollToSection('home')} className="block text-blue-950 hover:text-gray-500 font-medium text-center">Home</button>
            <button onClick={() => scrollToSection('about')} className="block text-blue-950 hover:text-gray-500 font-medium text-center">About</button>
            <button onClick={() => scrollToSection('portfolio')} className="block text-blue-950 hover:text-gray-500 font-medium text-center">Portfolio</button>
            <button onClick={() => scrollToSection('contact')} className="block text-blue-950 hover:text-gray-500 font-medium text-center">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
