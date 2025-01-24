"use client";
import ImageUrl from "@/utils/imageUrl";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css";
import SingleTestimonial from "./SingleTestimonial";

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
      className="bg-gradient-to-tr from-[rgb(255,237,207,0.4)] from-50% to-[rgb(252,198,233)]"
    >
      <div style={{
             backgroundImage:`linear-gradient(to bottom right,rgba(255,255,255),rgb(255,237,207,0.5),rgb(252,198,233,0.7)), url("/images/grid-line.png")`
        }}
        className="lg:px-10 py-4 lg:py-[50px]"
      >
<div className="mb-5 pb-8">
        <div className="px-5 md:px-16 ">
        <p className="font-black text-2xl md:text-[40px] leading-[68px] text-center mb-2 lg:mb-6">TESTIMONIALS</p>
          <div className="flex items-center justify-center flex-wrap mb-6">
            {testimonials?.length > 1 && (
              <div className="flex items-center gap-2 md:gap-6 mb-3 md:mb-0">
                <button
                  className="border border-[#222222] bg-white h-10 w-10 md:h-12 md:w-12 text-[#222222]  rounded-full flex items-center justify-center"
                  onClick={() => {
                    /*
            // @ts-ignore */
                    swipeRef.current.slidePrev();
                  }}
                >
                  <i className="bi bi-chevron-left text-xl"></i>
                </button>

                <button
                  className="border border-[#222222] bg-white h-10 w-10 md:h-12 md:w-12 text-[#222222] rounded-full flex items-center justify-center"
                  onClick={() => {
                    /*
            // @ts-ignore */
                    swipeRef.current.slideNext();
                  }}
                >
                  <i className="bi bi-chevron-right md:text-xl"></i>
                </button>
              </div>
            )}
          </div>

          <Swiper
            onSwiper={(swiper) => {
              /*
      // @ts-ignore */
              swipeRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
          >
            {testimonials?.map((item: any, key: number) => (
              <SwiperSlide
                key={key}
                className="flex flex-col gap-16 justify-between"
              >
                <SingleTestimonial testimonial={item}/>
                {/* <h1 className="text-base lg:text-xl h-full min-h-[220px] max-w-[600px]">
                  {`“`} <br />
                  <span>{item?.description}</span>
                  {`”`}
                </h1>

                <div className="flex items-center gap-6 md:gap-36 flex-wrap">
                  <span className="flex gap-2 items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <ImageUrl
                        image={item?.image}
                        className={
                          "rounded-full w-14 h-14 object-cover object-center aspect-auto"
                        }
                      />
                    </div>

                    <div className="flex flex-col ">
                      <h4 className="font-mono text-[#999999]">{item?.name}</h4>
                      <p className="font-mono text-[#999999]">
                        {item?.title},{" "}
                        <a href={item?.link} target="_blank">
                          {item?.companyName}
                        </a>
                      </p>
                    </div>
                  </span>
                </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      </div>
    </motion.div>
  );
}
