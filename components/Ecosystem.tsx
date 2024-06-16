"use client";
import Image from "next/image";
import Button from "./shared/Button";

import "swiper/swiper-bundle.css";

const slides = [
  {
    id: 1,
    src: "/karaUser.svg",
    title: "Smart Business Structures",
    description:
      "Hear from crypto innovators in India as they drive growth and adoption in DeFi. Discover how India a leader crypto exchanges and learn from our presenters this region's outlook in 2024 and beyond.",
    presenters: [
      {
        id: "1",
        name: "Juliya adward",
        role: "CEO of chatGPT",
        src: "/user.svg",
      },
      {
        id: "2",
        name: "Juliya adward",
        role: "CEO of chatGPT",
        src: "/user.svg",
      },
    ],
  },

  {
    id: 2,
    src: "/karaUser.svg",
    title: "Smart Business Structures",
    description:
      "Hear from crypto innovators in India as they drive growth and adoption in DeFi. Discover how India a leader crypto exchanges and learn from our presenters this region's outlook in 2024 and beyond.",
    presenters: [
      {
        id: "1",
        name: "Juliya adward",
        role: "CEO of chatGPT",
        src: "/user.svg",
      },
      {
        id: "2",
        name: "Juliya adward",
        role: "CEO of chatGPT",
        src: "/user.svg",
      },
    ],
  },

  {
    id: 3,
    src: "/karaUser.svg",
    title: "Smart Business Structures",
    description:
      "Hear from crypto innovators in India as they drive growth and adoption in DeFi. Discover how India a leader crypto exchanges and learn from our presenters this region's outlook in 2024 and beyond.",
    presenters: [
      {
        id: "1",
        name: "Juliya adward",
        role: "CEO of chatGPT",
        src: "/user.svg",
      },
      {
        id: "2",
        name: "Juliya adward",
        role: "CEO of chatGPT",
        src: "/user.svg",
      },
    ],
  },

  // Add more slide objects here as needed
];

export default function Ecosystem() {
  return (
    <div className="">
      <div className="py-14 md:py-28 ">
        <div className="px-5 md:px-16">
          <h1 className="text-2xl md:text-4xl md:text-primary mt-6 font-1000">
            ECOsystem Spotlight
          </h1>

          <div className="flex items-center justify-between flex-wrap">
            <p className="font-mono my-4 md:my-6 text-[#999999]">
              Education from industry leaders in the Si3 ecosystem.
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

        <div className="grid grid-cols-2 md:grid-cols-3 px-5 md:px-16 gap-4 md:gap-9">
          {Array.from({ length: 6 }).map((item, index) => (
            <div
              key={index}
              className="border border-[#989898] rounded flex items-center justify-center flex-col py-6"
            >
              <div className="flex items-center gap-1">
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
                Here is heading here
              </p>

              <div className="space-y-1 md:space-y-3 mt-2 md:mt-16 text-center">
                <p className="font-mono text-sm md:text-[32px]">Annie Lu</p>
                <p className="text-[#898989] text-sm">Co-founder ofAURPAY</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
