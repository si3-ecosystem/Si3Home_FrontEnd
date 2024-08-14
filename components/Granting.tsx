// @ts-nocheck

"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Button from "./shared/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";
import moment from "moment";
import ImageUrl from "@/utils/imageUrl";
import Modal from "./shared/Modal";
import InputField from "./shared/InputField";
import { useAnimation, motion } from "framer-motion";
import urlFor from "@/utils/urlFor";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
// Import the custom hook

export default function Granting({ granting, register }) {
  console.log("granting", register);
  const [isOpen, setIsOpen] = useState(false);
  const swipeRef = useRef(null);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        if (top < window.innerHeight && top > 0) {
          controls.start({ opacity: 1, x: 0 });
        } else {
          controls.start({ opacity: 0, x: 0 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

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
      className="bg-no-repeat bg-[url('/group.png')] bg-cover md:pb-44"
    >
      <motion.div
        ref={sectionRef}
        animate={controls}
        className="px-5 md:px-16 mb-8"
      >
        <h1 className="text-2xl md:text-4xl text-primary mt-6 font-1000">
          {granting.title}
        </h1>
        <p className="font-mono mt-4">{granting.date}</p>
        <p className="font-mono my-4 md:my-6 max-w-xl">
          {granting.description}
        </p>

        {/* <ButtonCTA
          variant="outline"
          className="border !border-black text-black hover:text-white text-sm md:text-xl my-4 md:my-6 !font-medium px-4 rounded-lg focus:ring-offset-0"
        >
          <div onClick={() => setIsOpen(true)}>Register Now</div>
        </ButtonCTA> */}
        <button className="button  border !border-black text-black hover:text-white text-sm md:text-xl my-4 md:my-6 !font-medium px-4 focus:ring-offset-0 rounded-lg">
          <a
            href={granting?.button?.url}
            className="button-text max-sm:text-sm max-sm:py-3"
            target="_blank"
          >
            {granting?.button?.text || "Register Now"}
          </a>
        </button>
      </motion.div>

      <div className="w-full md:w-3/4 px-5 md:px-0 md:ml-auto">
        <Swiper
          onSwiper={(swiper) => {
            swipeRef.current = swiper;
          }}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
          }}
        >
          {granting?.builders?.length > 0 &&
            granting.builders.map((item, key) => (
              <SwiperSlide
                key={key}
                className="relative rounded-lg group overflow-hidden"
              >
                <div className="max-sm:max-h-[678px] overflow-hidden">
                  <ImageUrl
                    image={item.image}
                    className={
                      "h-full min-h-[478px] max-h-[478px] overflow-hidden object-cover object-top rounded-lg w-full card-shaper group-hover:opacity-70 transition-all duration-300 group-hover:scale-[1.07]"
                    }
                  />
                </div>
                <p className="text-sm onramp-background absolute top-3 mx font-mono text-white ml-3 p-1 rounded-lg">
                  {item.summitDate}
                </p>
                <div className="absolute bottom-3 ml-3 text-white flex flex-col gap-0.5">
                  {item?.companyLogo?.asset && (
                    <Image
                      src={urlFor(item?.companyLogo?.asset).url()}
                      width={140}
                      height={30}
                      alt=""
                      className="object-cover"
                    />
                  )}

                  <h2 className="text-2xl font-bold">{item.name}</h2>
                  <p className="capitalize font-medium">{item.position}</p>
                  {/* <p className="capitalize font-medium">SI3</p> */}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {granting?.builders?.length > 0 && (
        <div className="px-5 md:px-16 flex items-center gap-6 mt-4 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="cursor-pointer"
            onClick={() => {
              /*
// @ts-ignore */
              swipeRef.current.slidePrev();
            }}
          >
            <path
              d="M20 26.5599L11.3066 17.8666C10.28 16.8399 10.28 15.1599 11.3066 14.1333L20 5.43994"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="cursor-pointer"
            onClick={() => {
              /*
// @ts-ignore */
              swipeRef.current.slideNext();
            }}
          >
            <path
              d="M11.8799 26.5599L20.5732 17.8666C21.5999 16.8399 21.5999 15.1599 20.5732 14.1333L11.8799 5.43994"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="px-4 ">
          <DialogHeader>
            <DialogDescription>
              <div className="absolute inset-0 -z-50">
                <div className="background-gradient" />
              </div>
              <div className="flex flex-col items-center text-center px-4 md:px-0 py-4  z-10">
                <h1 className="text-2xl md:text-5xl font-bold mb-5">
                  {register.title}
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
                  <p className="font-medium bg-[#342F52] text-white py-1 px-3 md:py-2 md:px-6 rounded-full text-xs md:text-sm">
                    {register.date}
                  </p>

                  <p className="font-medium bg-[#342F52] text-white py-1 px-3 md:py-2 md:px-6 rounded-full text-xs md:text-sm">
                    {register.stream}
                  </p>
                </div>

                <div className="space-y-2 md:space-y-6 flex flex-col justify-center items-center">
                  <p className="text-center text-[#6D6D6D] text-sm md:text-base max-w-sm">
                    {register.subtitle}
                  </p>

                  {/* Add this div where the form should be rendered */}
                  <div id="hubspotForm"></div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}

// function ButtonCTA({ children, className }: any) {
//   return (
//     <button className={`button ${className} rounded-lg`}>
//       <span className="button-text max-sm:text-sm max-sm:py-3">{children}</span>
//     </button>
//   );
// }
