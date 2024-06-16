"use client";
import Image from "next/image";
import Button from "./shared/Button";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import moment from "moment";
import ImageUrl from "@/utils/imageUrl";

const slides = [
  {
    id: 1,
    src: "/profile1.png",
    summitDate: "26-01-2024",
    summitTime: "03:40-05:40pm UT",
    name: "Zara Fairoz",
    description: "smart Business Structures",
  },
  {
    id: 2,
    src: "/profile2.png",
    summitDate: "26-01-2024",
    summitTime: "03:40-05:40pm UT",
    name: "Zara Fairoz",
    description: "smart Business Structures",
  },
  {
    id: 3,
    src: "/profile1.png",
    summitDate: "26-01-2024",
    summitTime: "03:40-05:40pm UT",
    name: "Zara Fairoz",
    description: "smart Business Structures",
  },
  {
    id: 4,
    src: "/profile2.png",
    summitDate: "26-01-2024",
    summitTime: "03:40-05:40pm UT",
    name: "Zara Fairoz",
    description: "smart Business Structures",
  },
  // Add more slide objects here as needed
];

export default function Granting({ granting }: any) {
  const swipeRef = useRef();

  return (
    <div className="bg-no-repeat bg-[url('/group.png')] bg-cover md:pb-44">
      <div className="px-5 md:px-16 ">
        <Button className="w-full md:w-fit flex justify-center">
          SUBSCRIBE FOR GRANT UPDATES
        </Button>
        <h1 className="text-2xl md:text-4xl md:text-primary mt-6 font-1000">
          {granting.title}
        </h1>
        <p className="font-mono mt-4">
          JULY 10TH 2024 - 11 am - 3 pm CST / UTC 5 (FREE & OPEN EVENT)
        </p>

        <p className="font-mono my-4 md:my-6 max-w-xl">
          {granting.blockContent}
        </p>
      </div>

      <div className="w-full md:w-3/4 px-5 md:px-0 md:ml-auto">
        <Swiper
          onSwiper={(swiper) => {
            /*
      // @ts-ignore */
            swipeRef.current = swiper;
          }}
          slidesPerView={3}
          spaceBetween={10}
          modules={[Pagination]}
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
          {granting?.builders?.length > 0 &&
            granting.builders.map((item: any, key: number) => (
              <SwiperSlide key={key} className="relative rounded-lg">
                <ImageUrl
                  image={item.image}
                  className={
                    "h-[578px] object-cover object-center rounded-lg w-full card-shaper"
                  }
                />
                <p className="text-sm onramp-background absolute top-3 mx font-mono text-white ml-3 p-1 rounded-lg">
                  Summit: {moment(item.summitDate).format("DD-MM-YYYY")} |
                  03:40-05:40pm UT{" "}
                </p>
                <div className="absolute bottom-3 ml-3 text-white">
                  <Image
                    src={"/onramp.svg"}
                    width={150}
                    height={34}
                    alt=""
                    className="object-cover"
                  />
                  <h2 className="text-2xl font-bold">{item.name}</h2>
                  <p className="capitalize font-medium">{item.position}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

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
    </div>
  );
}
