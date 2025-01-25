"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";
import urlFor from "@/utils/urlFor";
import { useRouter } from "next/navigation";
import FlashInfoHeader from "@/app/components/v2/FlashInfoHeader";

const Navbar = ({ utils }: any) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const redirectToPushChannel = () => {
    window.location.href = "https://app.push.org/channels/0x0D54bD457AF5b5691d1D9790746d4C95f7885CFF"; // Open specific Push channel
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
    <header className="sticky top-0 z-50">
    <FlashInfoHeader/>
    <motion.nav
      className="w-full backdrop-filter backdrop-blur-2xl lg:backdrop-blur-lg shadow-lg transition-all duration-100"
    >
      <div className="flex justify-between items-center px-5 lg:px-16 min-h-[67px] gap-10 xl:gap-12 z-40">
        <div className=" space-x-4  font-medium flex  items-center justify-between">
          <div className="flex items-center justify-center">
            <Link href="/" className="text-white text-5xl font-bold uppercase ">
              <img
                src={urlFor(utils?.logo?.asset).url()}
                alt={utils?.logo?.alt}
                className="w-24 h-12 "
              />
            </Link>
          </div>
        </div>
        <div className="max-lg:hidden font-medium">
          <div className=" flex items-center gap-[13px]">
            {/* <Link
              href={utils?.stayConnected}
              target="_blank"
              className="p-2.5 rounded-lg"
            >
              <Image
                src={"/bell.png"}
                alt="Bell Icon"
                width={36}
                height={36}
                className="w-[28px] h-[28px]"
              />
            </Link> */}
            {
              utils.stayConnectedText
              ?(
                <button className="text-base lg:text-xl font-medium  flex items-center gap-2 cursor-pointer rounded-xl !py-2 px-4 bg-[#C8BAFD] hover:bg-[#3C1FEF] text-black hover:text-white">
                {utils.stayConnectedText}
              </button>
              )
              :(
                <Link href={"/onboard"}>
                   <button className="text-base lg:text-xl font-medium  flex items-center gap-2 cursor-pointer rounded-full !py-2 px-8 bg-black hover:bg-[#3C1FEF] text-white hover:text-white">
                      {"Get Started"}
                    </button>
                  </Link>
                )
            }
          </div>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Open Menu"
            className="text-white"
          >
            {!isOpen ? (
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
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M4 20.5L20 4.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 20.5L4 4.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="h-[420px] absolute z-30 bg-[#3C1FEF] top-[56px] left-0 right-0 w-full px-5 py-8 flex flex-col justify-start items-center text-2xl gap-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 justify-center items-center h-full mt-4">
              <div className="relative flex items-center gap-2 cursor-pointer">
                <Link
                  href={"/#tab-content"}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="lg:hidden text-white relative overflow-hidden font-medium tracking-wider text-base max-w-[233px]"
                >
                  I AM EXPLORING WEB3
                </Link>
              </div>

              <div className="">
                <Link
                  href={"/#tab-content"}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="lg:hidden text-white relative overflow-hidden font-medium tracking-wider text-base max-w-[233px]"
                >
                  I AM LEADING WEB3
                </Link>
              </div>

              <div className="">
                <Link
                  href={"/#tab-content"}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="lg:hidden text-white relative overflow-hidden font-medium tracking-wider text-base max-w-[233px]"
                >
                  I AM BUILDING WEB3
                  {activeDropdown === "about" && (
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-white bg-opacity-50"
                    />
                  )}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </header>
  );
};

export default Navbar;
