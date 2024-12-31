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
      className=""
    >
      <div className="mb-5 pb-8">
        <div className="px-5 md:px-16 ">
          <div className="flex items-center justify-end flex-wrap my-6 md:my-10">
            {testimonials?.length > 1 && (
              <div className="flex items-center gap-6 mb-3 md:mb-0">
                <button
                  className="border border-[#222222] h-8 w-8 md:h-12 md:w-12 text-[#222222]  rounded-full flex items-center justify-center"
                  onClick={() => {
                    /*
            // @ts-ignore */
                    swipeRef.current.slidePrev();
                  }}
                >
                  <i className="bi bi-chevron-left text-xl"></i>
                </button>

                <button
                  className="border border-[#222222] h-8 w-8 md:h-12 md:w-12 text-[#222222] rounded-full flex items-center justify-center"
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
    </motion.div>
  );
}
