"use client";
import ImageUrl from "@/utils/imageUrl";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css";

export default function Testimonials({ testimonials }: any) {
  const swipeRef = useRef();

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
      id="testimonials"
      className=""
    >
      <div className="py-14 md:py-28 ">
        <div className="px-5 md:px-16 ">
          <div className="flex items-center justify-between flex-wrap my-6 md:my-10">
            {testimonials.length > 1 && (
              <div className="flex items-center gap-6 mb-3 md:mb-0">
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
          </div>

          <Swiper
            onSwiper={(swiper) => {
              /*
      // @ts-ignore */
              swipeRef.current = swiper;
            }}
            slidesPerView={1.2}
            spaceBetween={30}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
            }}
          >
            {testimonials?.map((item: any, key: number) => (
              <SwiperSlide key={key} className="space-y-16">
                <h1 className="text-xl md:text-5xl">
                  {`“`} <br />
                  <span>{item.description}</span>
                  {`”`}
                </h1>

                <div className="flex items-center gap-6 md:gap-36 flex-wrap">
                  <span className="flex gap-2 items-center">
                    <div className="w-14 h-14">
                      <ImageUrl
                        image={item?.image}
                        className={"rounded-full w-14 h-14"}
                      />
                    </div>

                    <h4 className="font-mono text-[#999999]">{item.name}</h4>
                  </span>

                  <h4 className="uppercase text-[#5D5D5D]"> {item.link}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
}
