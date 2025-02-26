"use client";
import Image from "next/image";
import Button from "./shared/Button";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageUrl from "@/utils/imageUrl";
import moment from "moment";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import urlFor from "@/utils/urlFor";
import { ChevronLeftIcon, ChevronRightIcon } from "@/app/icons/chevron";

export default function Educational({ educationalProgramming }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const swipeRef = useRef<any>();
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.5, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div ref={ref} className="py-14 px-4 lg:px-8 md:py-28 ">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-[736px] mx-auto text-center">
          <h1 className="text-2xl font-clesmont md:text-[40px] font-1000 md:leading-10 mt-6 ">
            {educationalProgramming.title}
          </h1>
          <p className="font-mono my-4 md:my-6 w-full text-sm lg:text-lg lg:leading-7">
            {educationalProgramming.description}
          </p>
          <div className="px-5 md:px-16 flex items-center gap-2 lg:gap-6 mt-4 md:mt-0 justify-center mb-5">
            <button
              className="h-12 w-12 rounded-full border flex items-center justify-center border-gray-400 hover:border-[#B668E4] hover:bg-[#e9e3ff]"
              onClick={() => {
                swipeRef.current.slidePrev();
              }}
            >
              <ChevronLeftIcon />
            </button>

            <button
              className="h-12 w-12 rounded-full border flex items-center justify-center border-gray-400 hover:border-[#B668E4] hover:bg-[#e9e3ff]"
              onClick={() => {
                swipeRef.current.slideNext();
              }}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </header>

        <div className="w-full lg:px-0 lg:ml-auto md:flex  ">
          <Swiper
            onSwiper={(swiper) => {
              swipeRef.current = swiper;
            }}
            modules={[Pagination, Autoplay]}
            // autoplay={true}
            scrollbar={true}
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
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {educationalProgramming?.Events?.length > 0 &&
              educationalProgramming.Events.map((item: any, key: number) => (
                <SwiperSlide
                  key={key}
                  className="  p-3 sm:p-4 rounded-[30px] border border-[#B0B0B0] group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-[24px] w-full">
                    <ImageUrl
                      image={item.image}
                      className={
                        "!w-full max-h-[259px]  object-cover object-center  group-hover:scale-[1.03] transition-all duration-300"
                      }
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs bg-white text-black whitespace-pre-wrap absolute top-7 left-7 mx font-mono truncate p-1 py-1.5 rounded-lg ">
                    {item.date}
                  </p>
                  <div className="space-y-1.5 mt-6 ">
                    <h3 className="text-black font-clesmont font-1000 text-base sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-justify h-full sm:min-h-[236px] text-xs sm:text-base  overflow-hidden ">
                      {item.description}
                    </p>

                    <div className="mt-[18px] flex flex-col gap-2">
                      <p className=" uppercase font-clesmont leading-[140%]">
                        Presenters
                      </p>

                      <motion.div className="space-y-1.5">
                        {item?.presenters?.map(
                          (presenter: any, key: number) => (
                            <motion.div
                              whileHover={{
                                scale: [1, 1.02],
                              }}
                              transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                              }}
                              key={key}
                              className="bg-[#eee] rounded-[48px] flex items-center justify-between py-2 px-2"
                            >
                              <div className="flex items-center gap-2 ">
                                <div className="w-[38px] h-[38px] rounded-full overflow-hidden">
                                  <ImageUrl
                                    image={presenter.image}
                                    className={
                                      "w-[38px] h-[38px] object-cover object-center rounded-full"
                                    }
                                  />
                                </div>
                                <div>
                                  <h6 className="font-medium leading-[120%]">
                                    {presenter?.name}
                                  </h6>
                                  <p className="text-[10px] lg:text-[14px] font-medium">
                                    {presenter?.position}
                                  </p>
                                </div>
                              </div>
                              <Image
                                src={urlFor(presenter?.logo).url()}
                                alt={presenter?.alt || ""}
                                width={59}
                                height={12}
                                className="w-[54px] lg:w-[84px] h-auto aspect-auto"
                              />
                            </motion.div>
                          )
                        )}
                      </motion.div>
                    </div>
                    <div className="mt-2">
                      {/* <button className="bg-[#222222] text-white text-sm lg:text-xl py-3 w-full text-center flex items-center justify-center gap-2 rounded-lg ">
                      <a href={`${item?.button?.url}`} target="_blank">
                        {item?.button?.text || "Go to Event "}
                      </a>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8333 9.16671L17.6666 2.33337"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.3333 5.66663V1.66663H14.3333"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.16669 1.66663H7.50002C3.33335 1.66663 1.66669 3.33329 1.66669 7.49996V12.5C1.66669 16.6666 3.33335 18.3333 7.50002 18.3333H12.5C16.6667 18.3333 18.3334 16.6666 18.3334 12.5V10.8333"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
}
