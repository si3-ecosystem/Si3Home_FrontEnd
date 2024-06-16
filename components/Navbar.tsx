"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="fixed w-full z-50 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center px-5 md:px-16 py-4">
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
        <div className="flex items-center space-x-4 md:space-x-36 font-medium">
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => handleDropdown("onboard")}
            onMouseLeave={() => handleDropdown("onboard")}
          >
            <a
              href="#"
              className="hidden md:inline text-white relative overflow-hidden"
            >
              ONBOARD
              {activeDropdown === "onboard" && (
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white bg-opacity-30"
                />
              )}
            </a>
            <Image
              src={"/arrow-down.svg"}
              alt="Dropdown"
              width={24}
              height={24}
              className="w-6 h-6 hidden md:inline"
            />
            {activeDropdown === "onboard" && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 md:top-[17px] mt-2 py-2 w-40 bg-white bg-opacity-30 rounded-md shadow-lg z-10"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option 2
                </a>
              </motion.div>
            )}
          </div>

          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => handleDropdown("live")}
            onMouseLeave={() => handleDropdown("live")}
          >
            <a
              href="#"
              className="hidden md:inline text-white relative overflow-hidden"
            >
              SI HER LIVE
              {activeDropdown === "live" && (
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white bg-opacity-30"
                />
              )}
            </a>
            <Image
              src={"/arrow-down.svg"}
              alt="Dropdown"
              width={24}
              height={24}
              className="w-6 h-6 hidden md:inline"
            />
            {activeDropdown === "live" && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 md:top-[17px] mt-2 py-2 w-32 bg-white bg-opacity-30 rounded-md shadow-lg z-10"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option A
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option B
                </a>
              </motion.div>
            )}
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <a href="#" className="text-white text-5xl font-bold uppercase">
            {"Si <3>"}
          </a>
        </div>
        <div className="flex items-center space-x-4 md:space-x-36 font-medium">
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => handleDropdown("about")}
            onMouseLeave={() => handleDropdown("about")}
          >
            <a
              href="#"
              className="hidden md:inline text-white relative overflow-hidden"
            >
              ABOUT US
              {activeDropdown === "about" && (
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white bg-opacity-30"
                />
              )}
            </a>
            <Image
              src={"/arrow-down.svg"}
              alt="Dropdown"
              width={24}
              height={24}
              className="w-6 h-6 hidden md:inline"
            />
            {activeDropdown === "about" && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute mt-2 py-2 w-32 top-0 md:top-[17px] bg-white bg-opacity-30 rounded-md shadow-lg z-10"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option X
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option Y
                </a>
              </motion.div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/bell.png"}
              alt="Bell Icon"
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <a href="#" className="block text-white">
              STAY CONNECTED
            </a>
          </div>
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
