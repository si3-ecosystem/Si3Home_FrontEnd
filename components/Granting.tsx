"use client";
import Image from "next/image";
import Button from "./shared/Button";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

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
  // Add more slide objects here as needed
];

export default function Granting() {
  const swiper = useSwiper();

  return (
    <div className="bg-no-repeat bg-[url('/group.png')] bg-cover md:pb-44">
      <div className="px-5 md:px-16 ">
        <Button className="w-full md:w-fit flex justify-center">
          SUBSCRIBE FOR GRANT UPDATES
        </Button>
        <h1 className="text-2xl md:text-4xl md:text-primary mt-6 font-1000">
          Granting Access
        </h1>
        <p className="font-mono mt-4">
          JULY 10TH 2024 - 11 am - 3 pm CST / UTC 5 (FREE & OPEN EVENT)
        </p>

        <p className="font-mono my-4 md:my-6">
          Discover grant funding opportunities from leading blockchains, <br />{" "}
          protocols and foundations in support of women & non-binary- <br />{" "}
          builders.
        </p>
      </div>

      <div className="md:w-3/4 px-5 md:px-0 md:ml-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {slides.map((item) => (
          <div key={item.id} className="relative ">
            <Image
              src={"/profile1.png"}
              alt=""
              width={412}
              height={578}
              className="w-[412px] h-[578px] object-cover object-center rounded-lg card-shaper "
            />
            <p className="text-sm onramp-background absolute top-3 mx font-mono text-white ml-3 p-1 rounded-lg">
              Summit: 26-01-2024 | 03:40-05:40pm UT
            </p>
            <div className="absolute bottom-3 ml-3 text-white">
              <Image
                src={"/onramp.svg"}
                width={150}
                height={34}
                alt=""
                className="object-cover"
              />
              <h2 className="text-2xl font-bold">Zara Fairoz</h2>
              <p className="capitalize font-medium">
                smart Business Structures
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 md:px-16 flex items-center gap-6">
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
  );
}
