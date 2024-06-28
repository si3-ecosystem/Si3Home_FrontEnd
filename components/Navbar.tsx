"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
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
        <div className=" items-center space-x-4 md:space-x-14 xl:space-x-36 font-medium hidden lg:flex">
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => handleDropdown("onboard")}
            onMouseLeave={() => handleDropdown("onboard")}
          >
            <a
              href="#"
              className="hidden md:inline text-white font-semibold tracking-wider relative overflow-hidden"
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
                className="absolute top-0 md:top-[17px] group mt-2 py-2 w-48 font-semibold tracking-wider bg-[#d3b4c2] bg-opacity-60 rounded-md shadow-lg z-10"
              >
                <Link
                  href="#siherCoActive"
                  className="block px-4 py-2  hover:text-[#4428f2] text-white "
                >
                  SI Her Co-Active
                </Link>
                <Link
                  href="#ecosystem"
                  className="block px-4 py-2   hover:text-[#4428f2] text-white "
                >
                  Si3 Ecosystem
                </Link>
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
              className="hidden md:inline text-white relative overflow-hidden font-semibold tracking-wider"
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
                className="absolute top-0 md:top-[17px] mt-2 py-2 w-64 font-semibold tracking-wider bg-[#d3b4c2] bg-opacity-60 rounded-md shadow-lg z-10"
              >
                <Link
                  href="#commonGround"
                  className="block px-4 py-2 text-white  whitespace-nowrap hover:text-[#4428f2]"
                >
                  Common Ground
                </Link>
                <a
                  href="#coActivator"
                  className="block px-4 py-2 text-white hover:text-[#4428f2]"
                >
                  Metaverse (Coming Soon)
                </a>
              </motion.div>
            )}
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <Link href="/" className="text-white text-5xl font-bold uppercase">
            {"Si <3>"}
          </Link>
        </div>
        <div className="flex items-center space-x-4 md:space-x-14 xl:space-x-36 font-medium">
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => handleDropdown("about")}
            onMouseLeave={() => handleDropdown("about")}
          >
            <a
              href="#"
              className="hidden lg:inline text-white relative overflow-hidden font-semibold tracking-wider "
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
              className="w-6 h-6 hidden lg:inline"
            />
            {activeDropdown === "about" && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute mt-2 py-2 w-48 top-0 md:top-[17px] font-semibold tracking-wider bg-[#d3b4c2] bg-opacity-60 rounded-md shadow-lg z-10 hidden md:inline"
              >
                <Link
                  href="#ourMission"
                  className="block px-4 py-2 text-white hover:text-[#4428f2]"
                >
                  Our Mission
                </Link>
                <Link
                  href="#testimonials"
                  className="block px-4 py-2 text-white hover:text-[#4428f2]"
                >
                  Testimonials
                </Link>
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
            <Link href="#stayConnected" className="block text-white">
              STAY CONNECTED
            </Link>
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
            className="mobileNav fixed z-[99999999] top-0 left-0 h-screen w-3/4 px-6 py-4 flex flex-col justify-start items-center text-2xl gap-6 md:hidden"
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
            <div className="flex items-center gap-2">
              <Image
                src={"/bell.png"}
                alt="Bell Icon"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <Link
                href="#stayConnected"
                className="block text-white text-base font-medium"
              >
                STAY CONNECTED
              </Link>
            </div>
            <div className="flex flex-col gap-[50px] justify-center h-full">
              <div
                className="relative flex items-center gap-2 cursor-pointer"
                onMouseEnter={() => handleDropdown("onboard")}
                onMouseLeave={() => handleDropdown("onboard")}
              >
                <a
                  href="#"
                  className="md:hidden text-white tracking-wider relative overflow-hidden text-xl font-medium"
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
                  className="w-6 h-6 md:hidden"
                />
                {activeDropdown === "onboard" && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-6 md:top-[17px] group mt-2 py-2 w-48 font-semibold tracking-wider bg-[#d3b4c2] bg-opacity-60 rounded-md shadow-lg z-10 text-lg"
                  >
                    <Link
                      href="#siherCoActive"
                      className="block px-4 py-2  hover:text-[#4428f2] text-white"
                    >
                      SI Her Co-Active
                    </Link>
                    <Link
                      href="#ecosystem"
                      className="block px-4 py-2   hover:text-[#4428f2] text-white "
                    >
                      Si3 Ecosystem
                    </Link>
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
                  className="md:hidden text-white relative overflow-hidden tracking-wider text-xl font-medium"
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
                  className="w-6 h-6 md:hidden"
                />
                {activeDropdown === "live" && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-6 md:top-[17px] mt-2 py-2 w-64 font-semibold tracking-wider bg-[#d3b4c2] bg-opacity-60 rounded-md shadow-lg z-10 text-lg"
                  >
                    <Link
                      href="#commonGround"
                      className="block px-4 py-2 text-white  whitespace-nowrap hover:text-[#4428f2]"
                    >
                      Common Ground
                    </Link>
                    <a
                      href="#coActivator"
                      className="block px-4 py-2 text-white hover:text-[#4428f2]"
                    >
                      Metaverse (Coming Soon)
                    </a>
                  </motion.div>
                )}
              </div>
              <div className="md:hidden">
                <a href="#" className="text-white text-5xl font-bold uppercase">
                  {"Si <3>"}
                </a>
              </div>
              <div
                className="relative flex items-center gap-2 cursor-pointer"
                onMouseEnter={() => handleDropdown("about")}
                onMouseLeave={() => handleDropdown("about")}
              >
                <a
                  href="#"
                  className="md:hidden text-white relative overflow-hidden font-medium tracking-wider text-xl"
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
                  className="w-6 h-6 md:hidden"
                />
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 py-2 w-48 top-6 md:top-[17px] font-semibold tracking-wider bg-[#d3b4c2] bg-opacity-60 rounded-md md:hidden shadow-lg z-10 text-lg"
                  >
                    <Link
                      href="#ourMission"
                      className="block px-4 py-2 text-white hover:text-[#4428f2]"
                    >
                      Our Mission
                    </Link>
                    <Link
                      href="#testimonials"
                      className="block px-4 py-2 text-white hover:text-[#4428f2]"
                    >
                      Testimonials
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
