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
    <motion.div ref={ref} className="py-14 md:py-28">
      <motion.div
        initial={{ opacity: 0.7, x: -100 }}
        animate={controls}
        className="px-5 md:px-16"
      >
        {/* <Button className="w-full md:w-fit flex justify-center">
          SUBSCRIBE FOR EVENT UPDATES
        </Button> */}
        <h1 className="text-2xl md:text-[40px] font-1000 leading-10 md:text-primary mt-6 ">
          {educationalProgramming.title}
        </h1>
        <p className="font-mono my-4 md:my-6 max-w-xl text-lg leading-7">
          {educationalProgramming.description}
        </p>
      </motion.div>

      <div className="w-full md:w-3/4 px-5 md:px-0 md:ml-auto">
        <Swiper
          onSwiper={(swiper) => {
            swipeRef.current = swiper;
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2500 }}
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
          {educationalProgramming?.Events?.length > 0 &&
            educationalProgramming.Events.map((item: any, key: number) => (
              <SwiperSlide
                key={key}
                className=" border p-6 rounded-lg border-[#FAB7D0] group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <ImageUrl
                    image={item.image}
                    className={
                      "w-[440px] h-[195px] object-cover object-center rounded-lg card-shaper  group-hover:scale-[1.03] transition-all duration-300"
                    }
                  />
                  <p className="text-xs onramp-background absolute top-0 mx font-mono text-white truncate p-1 rounded-lg ">
                    Summit: {moment(item.date).format("DD-MM-YYYY")} |
                    03:40-05:40pm UT
                  </p>
                </div>

                <div className="space-y-3 mt-6">
                  <h3 className="text-primary font-1000 text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-[#7B7B7D] text-justify max-w-[384px]">
                    {item.description}
                  </p>

                  <div>
                    <h5 className="font-bold">Presenters:</h5>

                    <motion.div className="space-y-3">
                      {item?.presenters?.map((presenter: any, key: number) => (
                        <motion.div
                          key={key}
                          className="bg-[#F2F1F7] flex items-center justify-between py-1 px-2 rounded-lg mt-1 group"
                        >
                          <div className="flex items-center gap-2 transition-all duration-300">
                            <div className="w-7 h-7">
                              <ImageUrl
                                image={presenter.image}
                                className={
                                  "w-[28px] h-[28px] object-cover object-center rounded-full"
                                }
                              />
                            </div>
                            <div>
                              <h6 className="font-bold text-xs">
                                {presenter?.name}
                              </h6>
                              <p className="text-primary text-[10px] font-medium font-mono">
                                {presenter?.position}
                              </p>
                            </div>
                          </div>
                          <Image
                            src={"/orporatio.png"}
                            alt=""
                            width={59}
                            height={12}
                            className="w-[60px] h-[12px]"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
