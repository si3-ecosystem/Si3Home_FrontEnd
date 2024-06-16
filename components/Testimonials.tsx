"use client";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

const testimonials = [
  {
    id: 1,
    quote: `We couldn't have asked for a better investor and board member than Bart. Blockchain Capital deeply understands the crypto ecosystem and their strategic guidance has been instrumental to our success.`,
    name: "Aliesa Costa",
    title: "CEO of Crypto Ventures",
    website: "https://cryptoventures.com",
    imageSrc: "/user2.svg",
  },
  {
    id: 2,
    quote: `Bart's insights into the crypto market have been invaluable. Their support has helped us navigate the complexities of the industry with confidence.`,
    name: "John Doe",
    title: "Founder of Blockchain Innovations",
    website: "https://blockchaininnovations.com",
    imageSrc: "/user1.svg",
  },
  {
    id: 3,
    quote: `Working with Bart and Blockchain Capital has been a game changer. Their strategic input and deep understanding of blockchain technology have propelled us forward.`,
    name: "Jane Smith",
    title: "CTO of Digital Assets Corp",
    website: "https://digitalassets.com",
    imageSrc: "/user3.svg",
  },
];

export default function Testimonials() {
  const swipeRef = useRef();

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

          {/* <div className="space-y-16">
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
          </div> */}

          <Swiper
            onSwiper={(swiper) => {
              /*
      // @ts-ignore */
              swipeRef.current = swiper;
            }}
            slidesPerView={1.2}
            spaceBetween={30}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="space-y-16">
                <h1 className="text-xl md:text-5xl">
                  {`“`} <br />
                  <span>{item.quote}</span>
                  {`”`}
                </h1>

                <div className="flex items-center gap-6 md:gap-36 flex-wrap">
                  <span className="flex gap-2 items-center">
                    <Image
                      src={"/user2.svg"}
                      alt=""
                      width={55}
                      height={55}
                      className="rounded-full"
                    />

                    <h4 className="font-mono text-[#999999]">{item.name}</h4>
                  </span>

                  <h4 className="uppercase text-[#5D5D5D]">
                    <span>TITle </span> {item.website}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
