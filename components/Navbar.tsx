"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FlashInfoHeader from "@/app/(base)/components/v2/FlashInfoHeader";
import ArrowRightIcon from "@/app/icons/arrow-right";
import UserCircleIcon from "@/app/icons/user-circle";
import { initializePushUser } from "@/lib/pushClient";
import Notifications from "@/components/Notifications";

const Navbar = () => {
  const router = useRouter();
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
    window.location.href =
      "https://app.push.org/channels/0x0D54bD457AF5b5691d1D9790746d4C95f7885CFF"; 
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

  const goToURL = (url: string) => {
    setIsOpen(false);
    router.push(url + `#tab-content`);
    // const tab = document.querySelector("#accountTabContent") as HTMLDivElement;

    // if(tab) {
    //   tab.scrollIntoView({behavior: "smooth"});
    // }
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const handleBellClick = async () => {
    setShowDropdown((prev) => !prev); // Toggle dropdown

    if (!isInitialized) {
      try {
        await initializePushUser();
        setIsInitialized(true);
      } catch (error) {
        console.error("Error initializing Push Protocol:", error);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <Link href={"/diversity-tracker"}>
        <FlashInfoHeader />
      </Link>
      <motion.nav className="w-full backdrop-filter backdrop-blur-2xl lg:backdrop-blur-lg shadow-lg transition-all duration-100">
        <div className="flex justify-between items-center px-5 lg:px-16 min-h-[67px] gap-10 xl:gap-12 z-40">
          <div className=" space-x-4  font-medium flex  items-center justify-between">
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="text-white text-5xl font-bold uppercase "
              >
                <p className="text-2xl md:text-4xl text-black font-clesmont font-black">
                  {"SI<3>"}
                </p>
              </Link>
            </div>
          </div>
          <div className="max-lg:hidden font-medium">
            <div className=" flex items-center gap-[13px]">
                <button onClick={handleBellClick} className="h-12 w-12 rounded-full bg-white flex items-center justify-center border">
                  <Image
                    src={"/bell.png"}
                    alt="Bell Icon"
                    width={36}
                    height={36}
                    className="w-[28px] h-[28px]"
                  />
                </button>
         
              {/* <Link href={"/login"}>
                <button
                  style={{ transition: "all ease 5s" }}
                  className="text-base lg:text-xl border border-[rgba(0,0,0,0.3)] font-medium  flex items-center gap-2 cursor-pointer rounded-full !py-2 px-2"
                >
                  <UserCircleIcon />
                </button>
              </Link> */}
              {/* <Link href={"/onboard"}>
                <button
                  style={{ transition: "all ease 5s" }}
                  className="text-base lg:text-xl hover:bg-gradient-to-tr from-[#E2B0FF] from-50% to-[#9F44D3] font-medium  flex items-center gap-2 cursor-pointer rounded-full !py-2 px-8 bg-black  text-white hover:text-white"
                >
                  {"Get Started"}
                </button>
              </Link> */}
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <Link href={"https://app.push.org/channels/0x0D54bD457AF5b5691d1D9790746d4C95f7885CFF"} target="_blank" className="p-2.5 rounded-lg">
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
              <i className="bi bi-list text-2xl"></i>
            </button>
          </div>
        </div>
        <div
          style={{ transition: "all ease 0.5s" }}
          className={`fixed z-[10000] ${isOpen ? "translate-x-0" : "-translate-x-[100%]"} top-0 left-0 w-10/12 sm:w-9/12 p-4 bg-white h-screen`}
        >
          <header className="w-full flex items-center justify-between">
            <p className="text-3xl font-clesmont font-black">{"SI<3>"}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-[#D9D9D9] h-9 w-9 flex items-center justify-center rounded-full"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </header>
          <div className="flex flex-col justify-between h-[75vh]">
            <ul className="flex flex-col gap-4 my-8 justify-between">
              <li
                onClick={() => goToURL("/?tab=explorers")}
                className="border cursor-pointer border-[#D9D9D9] rounded-lg flex items-center justify-between px-4 min-h-[46px]"
              >
                <p>Explore Web3</p>
                <ArrowRightIcon />
              </li>
              <li
                onClick={() => goToURL("/?tab=leaders")}
                className="border cursor-pointer border-[#D9D9D9] rounded-lg flex items-center justify-between px-4 min-h-[46px]"
              >
                <p>Build Web3</p>
                <ArrowRightIcon />
              </li>
              <li
                onClick={() => goToURL("/?tab=brands")}
                className="border border-[#D9D9D9] rounded-lg cursor-pointer flex items-center justify-between px-4 min-h-[46px]"
              >
                <p>Lead Web3</p>
                <ArrowRightIcon />
              </li>
            </ul>
            <div>
              <Link href={"/onboard"}>
                <button className="bg-black w-full py-3 rounded-full text-white">
                  Get Started
                </button>
              </Link>
              <div className="bg-[#EEEEEE] mt-4 p-4 rounded-md min-h-[164px]">
                <p className="font-medium">
                  Help us build a more inclusive Web3!
                </p>
                <p className="my-1 text-xs">
                  Share your unique perspective by filling out our Diversity
                  Tracker—your voice matters.
                </p>
                <Link href={"/diversity-tracker"}>
                  <button className="bg-white rounded-full px-4 py-2 my-2">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
