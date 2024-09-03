"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";
import urlFor from "@/utils/urlFor";

const CommunityNavbar = ({ utils }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        controls.start({ backgroundColor: "#f1b8c6" }); // pink color
      } else {
        controls.start({ backgroundColor: "#d3b4c2" }); // default color
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.nav
      animate={controls}
      initial={{ backgroundColor: "#d3b4c2" }} // initial background color
      className="fixed w-full z-50 backdrop-filter backdrop-blur-lg shadow-lg transition-all duration-100"
    >
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
        
        <div className="hidden lg:flex items-center justify-center">
          <Link href="/" className="text-white text-5xl font-bold uppercase">
            {utils?.logo?.asset ? (
              <img
                src={urlFor(utils.logo.asset).url()}
                alt={utils.logo.alt || "Logo"}
                className="w-24 h-12"
              />
            ) : (
              <div>No Logo Available</div>
            )}
          </Link>
        </div>
        <div className="flex items-center space-x-4 md:space-x-14 xl:space-x-36 font-medium">
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => handleDropdown("about")}
            onMouseLeave={() => handleDropdown("about")}
          >
          </div>
          <div className="group">
            <div className="flex items-center gap-2 cursor-pointer rounded-xl py-2 px-4 bg-[#C8BAFD] group-hover:bg-[#3C1FEF] text-black group-hover:text-white">
              <Image
                src={"/bell.png"}
                alt="Bell Icon"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <Link
                href={utils?.stayConnected}
                target="_blank"
                className="text-base lg:text-xl font-medium leading-[2.5px] lg:leading-[3px]"
              >
                {utils.stayConnectedText || "SUBSCRIBE"}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="mobileNav fixed z-[99999999] backdrop-blur-md top-0 left-0 h-screen w-3/4 px-6 py-4 flex flex-col justify-start items-center text-2xl gap-6 md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
              className="text-white self-end top-4 mb-4"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            </button>
            <div className="group">
              <div className="flex items-center gap-2 cursor-pointer rounded-xl py-2 px-4 bg-[#C8BAFD] group-hover:bg-[#3C1FEF] text-black group-hover:text-white">
                <Image
                  src={"/bell.png"}
                  alt="Bell Icon"
                  width={36}
                  height={36}
                  className="w-9 h-9"
                />
                <Link
                  href={utils?.stayConnected}
                  target="_blank"
                  className="text-base lg:text-xl font-medium leading-[2.5px] lg:leading-[3px]"
                >
                  {utils.stayConnectedText || "SUBSCRIBE"}
                </Link>
              </div>
            </div>
           
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default CommunityNavbar;
