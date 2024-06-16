"use client";
import Image from "next/image";
import Button from "./shared/Button";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageUrl from "@/utils/imageUrl";
import moment from "moment";

export default function Educational({ educationalProgramming }: any) {
  return (
    <div className="py-14 md:py-28">
      <div className="px-5 md:px-16">
        <Button className="w-full md:w-fit flex justify-center">
          SUBSCRIBE FOR EVENT UPDATES
        </Button>
        <h1 className="text-2xl md:text-4xl md:text-primary mt-6 font-1000">
          {educationalProgramming.title}
        </h1>
        <p className="font-mono my-4 md:my-6 max-w-xl">
          {educationalProgramming.description}
        </p>
      </div>

      <div className="w-full md:w-3/4 px-5 md:px-0 md:ml-auto">
        <Swiper
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
              slidesPerView: 2,
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
                className=" border p-6 rounded-lg border-[#FAB7D0] "
              >
                <div className="relative">
                  <ImageUrl
                    image={item.image}
                    className={
                      "w-[440px] h-[195px] object-cover object-center rounded-lg card-shaper"
                    }
                  />
                  <p className="text-xs onramp-background absolute top-0 mx font-mono text-white truncate p-1 rounded-lg ">
                    Summit: {moment(item.date).format("DD-MM-YYYY")} |
                    03:40-05:40pm UT
                  </p>
                </div>

                <div className="space-y-3 mt-6">
                  <h3 className="text-primary text-2xl">{item.title}</h3>
                  <p className="text-[#7B7B7D] text-justify">
                    {item.description}
                  </p>

                  <div>
                    <h5 className="font-bold">Presenters:</h5>

                    <div className="space-y-3">
                      {item?.presenters?.map((presenter: any, key: number) => (
                        <div
                          key={key}
                          className="bg-[#F2F1F7] flex items-center justify-between py-1 px-2 rounded-lg mt-1"
                        >
                          <div className="flex items-center gap-2">
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
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
