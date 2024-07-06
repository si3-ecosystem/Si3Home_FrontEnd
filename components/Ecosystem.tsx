"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import urlFor from "@/utils/urlFor";
import Link from "next/link";

export default function Ecosystem({ ecosystemSpotlight }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Default to 6 for larger screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(4); // 2x2 layout for mobile
      } else {
        setItemsPerPage(6); // 2x3 layout for larger screens
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Adjust on window resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(
        prevIndex + 1,
        Math.ceil(ecosystemSpotlight.spotlightList.length / itemsPerPage) - 1
      )
    );
  };

  const getVisibleItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    return ecosystemSpotlight.spotlightList.slice(
      startIndex,
      startIndex + itemsPerPage
    );
  };

  return (
    <motion.div
      whileInView={{
        y: [100, 0],
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      id="ecosystem"
      className=""
    >
      <div className="py-14 md:py-28">
        <div className="px-5 md:px-16">
          <h1 className="text-2xl md:text-4xl text-primary mt-6 font-1000">
            {ecosystemSpotlight.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap">
            <p className="font-mono my-4 md:my-6 text-[#999999]">
              {ecosystemSpotlight.description}
            </p>
          </div>
        </div>

        <div className="px-5 md:px-16">
          <div className="flex justify-end gap-4 mb-4">
            <svg
              onClick={slideLeft}
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <g id="vuesax/linear/arrow-left">
                <g id="arrow-left">
                  <path
                    id="Vector"
                    d="M20 26.642L11.3066 17.9486C10.28 16.922 10.28 15.242 11.3066 14.2153L20 5.52197"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>

            <svg
              onClick={slideRight}
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <g id="vuesax/linear/arrow-right">
                <g id="arrow-right">
                  <path
                    id="Vector"
                    d="M11.8799 26.642L20.5732 17.9486C21.5999 16.922 21.5999 15.242 20.5732 14.2153L11.8799 5.52197"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10"
            >
              {getVisibleItems().map((item: any, key: number) => (
                <motion.div
                  key={key}
                  className="border-2 px-2 sm:px-3 rounded-lg flex items-center sm:justify-center flex-col text-center py-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="max-sm:h-14">
                    <a
                      href={item?.companyUrl || "#"}
                      target="_blank"
                      className="flex items-center gap-1  cursor-pointer justify-center bg-slate-100 rounded-lg px-2 py-2"
                    >
                      <Image
                        src={urlFor(item.companyLogo.asset).url()}
                        alt={item?.companyLogo?.alt || ""}
                        width={145}
                        height={60}
                        className="w-16 md:w-44 h-auto max-h-14 sm:h-16 aspect-auto object-center object-contain"
                      />
                    </a>
                  </div>

                  <p className="font-medium text-sm md:text-base pt-2 md:pt-6 ">
                    {item.title}
                  </p>

                  <div className="space-y-1 md:space-y-3 mt-2 md:mt-16 text-center">
                    <p className="font-mono text-sm md:text-[32px]">
                      {item.presenterName}
                    </p>
                    <p className="text-[#898989] text-sm">
                      {item.presenterTitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
