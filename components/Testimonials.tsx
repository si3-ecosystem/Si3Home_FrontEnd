"use client";
import Image from "next/image";

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

export default function Testimonials() {
  return (
    <div className="">
      <div className="py-14 md:py-28 ">
        <div className="px-5 md:px-16 ">
          <div className="flex items-center justify-between flex-wrap my-6 md:my-10">
            <h1 className="text-2xl text-[#999984] md:text-4xl md:text-primary  font-1000 ">
              TESTIMONIALS
            </h1>

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

          <div className="space-y-16">
            <h1 className="text-xl md:text-5xl">
              {`“`} <br />
              <span>
                We couldn`&apos;`t have asked for a better investor and board
                member than Bart. Blockchain Capital deeply understands the
                crypto ecosystem and their strategic guidance has been
                instrumental to our success.
              </span>
              {`”`}
            </h1>

            <div className="flex items-center gap-6 md:gap-36">
              <span className="flex gap-2 items-center">
                <Image
                  src={"/user2.svg"}
                  alt=""
                  width={55}
                  height={55}
                  className="rounded-full"
                />

                <h4 className="font-mono text-[#999999]">Aliesa COSTA</h4>
              </span>

              <h4 className="capitalize text-[#5D5D5D]">
                <span>TITle</span> https://yourwebsite link
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
