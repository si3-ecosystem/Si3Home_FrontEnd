"use client";
import Image from "next/image";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Ecosystem({ ecosystemSpotlight }: any) {
  return (
    <div id="ecosystem" className="">
      <div className="py-14 md:py-28 ">
        <div className="px-5 md:px-16">
          <h1 className="text-2xl md:text-4xl md:text-primary mt-6 font-1000">
            {ecosystemSpotlight.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap">
            <p className="font-mono my-4 md:my-6 text-[#999999]">
              {ecosystemSpotlight.description}
            </p>

            <div className="flex items-center gap-6 mb-3 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="cursor-pointer"
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
          </div>
        </div>

        <div className="px-5 md:px-16">
          <Swiper grid={{ rows: 2 }} slidesPerView={3}>
            {ecosystemSpotlight?.spotlightList?.length > 0 &&
              ecosystemSpotlight.spotlightList.map((item: any, key: number) => (
                <SwiperSlide
                  key={key}
                  className="border border-[#989898] rounded flex items-center justify-center flex-col text-center py-6 "
                >
                  <div className="flex items-center gap-1 justify-center">
                    <Image
                      src={"/horseLogo.png"}
                      alt=""
                      width={46}
                      height={60}
                      className="w-11 h-11"
                    />
                    <h1 className="font-1000 text-2xl md:text-4xl">Pinata</h1>
                  </div>

                  <p className="font-medium text-sm md:text-base pt-2 md:pt-6">
                    {item.title}
                  </p>

                  <div className="space-y-1 md:space-y-3 mt-2 md:mt-16 text-center">
                    <p className="font-mono text-sm md:text-[32px]">
                      {item.teamMember.name}
                    </p>
                    <p className="text-[#898989] text-sm">
                      {item.teamMember.position}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
