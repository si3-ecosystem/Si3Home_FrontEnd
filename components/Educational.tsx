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
    <motion.div ref={ref} className="py-14 md:py-28 ">
      <motion.div
        initial={{ opacity: 0.7, x: -100 }}
        animate={controls}
        className="px-5 md:px-16 "
      >
        <h1 className="text-2xl md:text-[40px] font-1000 leading-10 text-primary mt-6 ">
          {educationalProgramming.title}
        </h1>
        <p className="font-mono my-4 md:my-6 w-full mx-auto max-w-xl text-lg leading-7">
          {educationalProgramming.description}
        </p>
      </motion.div>
    

      <div className="w-full px-5 lg:px-0 lg:ml-auto md:flex  ">
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
   
        <Swiper
          onSwiper={(swiper) => {
            swipeRef.current = swiper;
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
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
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
          }}
        >
           
          {educationalProgramming?.Events?.length > 0 &&
            educationalProgramming.Events.map((item: any, key: number) => (
             
            
              <SwiperSlide
                key={key}
                className=" border p-3 sm:p-6 rounded-lg border-[#FAB7D0] group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <ImageUrl
                    image={item.image}
                    className={
                      "w-full sm:w-[440px] aspect-square object-cover object-top rounded-lg card-shaper  group-hover:scale-[1.03] transition-all duration-300"
                    }
                  />
                  <p className="text-[10px] sm:text-xs onramp-background whitespace-pre-wrap absolute top-0 mx font-mono text-white truncate p-1 rounded-lg ">
                    {item.date}
                  </p>
                </div>

                <div className="space-y-3 mt-6 ">
                  <h3 className="text-primary font-1000 text-base sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-[#7B7B7D] text-justify h-full sm:min-h-[226px] text-xs sm:text-base  overflow-hidden ">
                    {item.description}
                  </p>

                  <div>
                    <h5 className="font-bold">Presenters:</h5>

                    <motion.div className="space-y-3 max-h-[250px] overflow-y-scroll">
                      {item?.presenters?.map((presenter: any, key: number) => (
                        <motion.div
                          whileHover={{
                            scale: [1, 1.02],
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          key={key}
                          className="bg-[#F2F1F7] flex items-center justify-between py-2.5 px-[18px] rounded-lg mt-1 "
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
                              <h6 className="font-bold text-xs lg:text-sm">
                                {presenter?.name}
                              </h6>
                              <p className="text-primary text-[10px] lg:text-[12px] font-medium font-mono">
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
                      ))}
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
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.3333 5.66663V1.66663H14.3333"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.16669 1.66663H7.50002C3.33335 1.66663 1.66669 3.33329 1.66669 7.49996V12.5C1.66669 16.6666 3.33335 18.3333 7.50002 18.3333H12.5C16.6667 18.3333 18.3334 16.6666 18.3334 12.5V10.8333"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    
    </motion.div>
  );
}
