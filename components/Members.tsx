"use client";
import Image from "next/image";
import Button from "./shared/Button";

import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import ImageUrl from "@/utils/imageUrl";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Members({ memberSpotlight }: any) {
  const swipeRef = useRef<any>();
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
      id="coActivator"
      className="bg-[url('/memberbg.svg')] bg-cover bg-right"
    >
      <div className="py-14 md:py-28 ">
        <div className="px-5 md:px-16">
          <h1 className="text-2xl md:text-4xl text-primary mt-6 font-1000">
            {memberSpotlight.title}
          </h1>

          <p className="font-mono my-4 md:my-6 text-[#999999] max-w-xl">
            {memberSpotlight.description}
          </p>
        </div>

        <div className="w-full md:w-3/4 px-5 md:px-0 md:ml-auto md:flex">

        <div className="px-5 md:px-16 flex items-center gap-6 mt-4 md:mt-0 justify-center mb-5">
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
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
          <Swiper
            onSwiper={(swiper) => {
              swipeRef.current = swiper;
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            slidesPerView={3}
            spaceBetween={10}
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
            {memberSpotlight?.teammembers?.length > 0 &&
              memberSpotlight.teammembers.map((item: any, key: number) => (
                <SwiperSlide
                  key={key}
                  className=" border-2 p-5 rounded-lg border-[#FAB7D0] group"
                >
                  <div className="w-full h-[350px] rounded-lg overflow-hidden">
                    <ImageUrl
                      image={item.image}
                      className={
                        "w-[440px] min-h-[350px] object-cover object-center rounded-lg group-hover:scale-[1.03] transition-all duration-300 group-hover:opacity-70"
                      }
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-12">
                    <div className="space-y-3 mt-6">
                      <h3 className="text-lg sm:text-[22px] ">{item.name}</h3>
                      <div className="flex flex-col items-start gap-2">
                        <span className="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M11.9999 13.512C13.723 13.512 15.1199 12.1151 15.1199 10.392C15.1199 8.66884 13.723 7.27197 11.9999 7.27197C10.2768 7.27197 8.87988 8.66884 8.87988 10.392C8.87988 12.1151 10.2768 13.512 11.9999 13.512Z"
                              stroke="#696969"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M3.61995 8.57203C5.58995 -0.0879664 18.42 -0.0779662 20.38 8.58203C21.53 13.662 18.37 17.962 15.6 20.622C13.59 22.562 10.41 22.562 8.38995 20.622C5.62995 17.962 2.46995 13.652 3.61995 8.57203Z"
                              stroke="#696969"
                              strokeWidth="1.5"
                            />
                          </svg>
                          <p className="capitalize font-mono text-sm md:text-lg text-[#696969]">
                            {item.country}
                          </p>
                        </span>

                        <span className="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M10.1334 9.1402C10.05 9.13187 9.95005 9.13187 9.85838 9.1402C7.87505 9.07354 6.30005 7.44854 6.30005 5.44854C6.30005 3.40687 7.95005 1.74854 10 1.74854C12.0417 1.74854 13.7 3.40687 13.7 5.44854C13.6917 7.44854 12.1167 9.07354 10.1334 9.1402Z"
                              stroke="#696969"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.9666 12.2155C3.94993 13.5655 3.94993 15.7655 5.9666 17.1072C8.25827 18.6405 12.0166 18.6405 14.3083 17.1072C16.3249 15.7572 16.3249 13.5572 14.3083 12.2155C12.0249 10.6905 8.2666 10.6905 5.9666 12.2155Z"
                              stroke="#696969"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="capitalize font-mono text-sm md:text-lg text-[#696969] whitespace-pre-wrap line-clamp-1">
                            {""}
                            {item.position}
                          </p>
                        </span>
                      </div>
                      <p className="text-[#7B7B7D] text-start tracking-widest text-sm">
                        {item.hobbies.join(", ")}
                      </p>
                    </div>

                    <button className="text-xl font-bold w-full flex items-center justify-center border-gradient rounded-lg p-2">
                      <a href={item?.link} target="_blank">
                        {item?.email || "Not provided"}
                      </a>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
       
      </div>
    </motion.div>
  );
}
