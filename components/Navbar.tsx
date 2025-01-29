"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";
import urlFor from "@/utils/urlFor";
import { useRouter } from "next/navigation";
import FlashInfoHeader from "@/app/components/v2/FlashInfoHeader";
import ArrowRightIcon from "@/app/icons/arrow-right";

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

  const goToURL = (url:string) => {
    setIsOpen(false);
    router.push(url);
  }

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
              <p className="text-2xl md:text-4xl text-black font-clesmont font-black">{"SI<3>"}</p>
            </Link>
          </div>
        </div>
        <div className="max-lg:hidden font-medium">
          <div className=" flex items-center gap-[13px]">
            <Link
              href={utils?.stayConnected}
              target="_blank"
              className="p-2.5 rounded-lg"
            >
             <button className="h-12 w-12 rounded-full bg-white flex items-center justify-center border">
              <Image
                  src={"/bell.png"}
                  alt="Bell Icon"
                  width={36}
                  height={36}
                  className="w-[28px] h-[28px]"
                />
             </button>
            </Link>
            {
              utils.stayConnectedText
              ?(
                <button className="text-base lg:text-xl font-medium  flex items-center gap-2 cursor-pointer rounded-xl !py-2 px-4 bg-[#C8BAFD] hover:bg-[#3C1FEF] text-black hover:text-white">
                {utils.stayConnectedText}
              </button>
              )
              :(
                <Link href={"/onboard"}>
                   <button style={{transition:"all ease 5s"}} className="text-base lg:text-xl hover:bg-gradient-to-tr from-[#E2B0FF] from-50% to-[#9F44D3] font-medium  flex items-center gap-2 cursor-pointer rounded-full !py-2 px-8 bg-black  text-white hover:text-white">
                      {"Get Started"}
                    </button>
                  </Link>
                )
            }
          </div>
        </div>
        <div className="flex items-center lg:hidden">
            <Link
                href={utils?.stayConnected}
                target="_blank"
                className="p-2.5 rounded-lg"
              >
              <button className="h-12 w-12 rounded-full bg-white flex items-center justify-center border">
                <Image
                    src={"/bell.png"}
                    alt="Bell Icon"
                    width={36}
                    height={36}
                    className="w-[28px] h-[28px]"
                  />
              </button>
            </Link>
          <button
            onClick={toggleMenu}
            aria-label="Open Menu"
            className="text-white bg-black h-10 w-10 rounded-full flex items-center justify-center"
          >
            {!isOpen ? (
             <i className="bi bi-list text-2xl"></i>
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
          <div
            style={{transition:"all ease 0.5s"}}
            className={`fixed z-[10000] ${isOpen?"translate-x-0":"-translate-x-[100%]"} top-0 left-0 w-10/12 sm:w-9/12 p-4 bg-white h-screen`}
          >
            <header className="w-full flex items-center justify-between">
              <p className="text-3xl font-clesmont font-black">{"SI<3>"}</p>
              <button onClick={()=>setIsOpen(false)} className="bg-[#D9D9D9] h-9 w-9 flex items-center justify-center rounded-full"><i className="bi bi-x-lg"></i></button>
            </header>
            <div className="flex flex-col justify-between h-[85vh]">
            <ul className="flex flex-col gap-4 my-8 justify-between">
              <li onClick={()=>goToURL("/?tab=explore")} className="border cursor-pointer border-[#D9D9D9] rounded-lg flex items-center justify-between px-4 min-h-[46px]">
                <p>Explore Web3</p>
                <ArrowRightIcon/>
              </li>
              <li onClick={()=>goToURL("/?tab=build")} className="border cursor-pointer border-[#D9D9D9] rounded-lg flex items-center justify-between px-4 min-h-[46px]">
                <p>Build Web 3</p>
                <ArrowRightIcon/>
              </li>
              <li onClick={()=>goToURL("/?tab=lead")} className="border border-[#D9D9D9] rounded-lg cursor-pointer flex items-center justify-between px-4 min-h-[46px]">
                <p>Learn Web 3</p>
                <ArrowRightIcon/>
              </li>
            </ul>
            <div>
            <Link href={"/onboard"}><button className="bg-black w-full py-3 rounded-full text-white">Get Started</button></Link>
            <div className="bg-[#EEEEEE] mt-4 p-4 rounded-md min-h-[164px]">
              <p className="font-medium text-lg">Help us build a more inclusive Web3!</p>
              <p className="my-1">Share your unique perspective by filling out our Diversity Tracker—your voice matters.</p>
              <button className="bg-white rounded-full px-4 py-2 my-2">Learn More</button>
            </div>
            </div>
            </div>
          </div>
    </motion.nav>
    </header>
  );
};

export default Navbar;
