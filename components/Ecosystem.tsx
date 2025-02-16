"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import urlFor from "@/utils/urlFor";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@/app/icons/chevron";

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
    <div
      // whileInView={{
      //   y: [100, 0],
      //   opacity: [0, 1],
      // }}
      // transition={{
      //   duration: 0.5,
      //   ease: "easeInOut",
      // }}
      id="ecosystem"
      className="px-4 lg:px-10 py-12 lg:py-[156px] bg-cover bg-[url('/images/immersion-2.png')]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[629px] text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-clesmont text-black mt-6 font-black uppercase">
            {ecosystemSpotlight.title}
          </h1>

          <div className="">
            <p className="my-4 md:my-6 text-[#999999] text-base sm:text-xl">
              {ecosystemSpotlight.description}
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex justify-center lg:justify-end gap-4 mb-5 mt-5">
            <button
              className="bg-white h-12 w-12 flex items-center justify-center rounded-full border hover:border-[#B668E4] hover:bg-[#e9e3ff]"
              onClick={slideLeft}
            >
              <ChevronLeftIcon />
            </button>
            <button
              className=" bg-white h-12 w-12 flex items-center justify-center rounded-full border hover:border-[#B668E4] hover:bg-[#e9e3ff]"
              onClick={slideRight}
            >
              <ChevronRightIcon />
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-3 gap-3 md:gap-10"
            >
              {getVisibleItems().map((item: any, key: number) => (
                <motion.div
                  key={key}
                  className="border-2 bg-white px-2 sm:px-3 rounded-lg flex flex-col py-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="max-sm:h-14">
                    <a
                      href={item?.companyUrl || "#"}
                      target="_blank"
                      className="flex gap-1  cursor-pointer rounded-lg px-2 py-2"
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

                  <div className="space-y-1 md:space-y-3 mt-2 md:mt-16">
                    <p className="font-clesmont text-sm md:text-lg">
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
    </div>
  );
}
