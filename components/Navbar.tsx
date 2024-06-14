"use client";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-4">
          <a href="#" className="hidden lg:inline text-white">
            ONBOARD
          </a>
          <a href="#" className="hidden lg:inline text-white">
            SI HER LIVE
          </a>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-bold">
            {"SI <3"}
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hidden lg:inline text-white">
            ABOUT US
          </a>
          <a href="#" className="hidden lg:inline text-white">
            STAY CONNECTED
          </a>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Open Menu"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden px-6 py-4">
          <a href="#" className="block text-white mb-2">
            ONBOARD
          </a>
          <a href="#" className="block text-white mb-2">
            SI HER LIVE
          </a>
          <a href="#" className="block text-white mb-2">
            ABOUT US
          </a>
          <a href="#" className="block text-white">
            STAY CONNECTED
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
