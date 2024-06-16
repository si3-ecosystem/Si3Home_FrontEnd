"use client";
import Image from "next/image";
import Button from "./shared/Button";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    id: 1,
    src: "/education.png",
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
    src: "/education.png",
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
    src: "/education.png",
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
    id: 4,
    src: "/education.png",
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

export default function Educational() {
  return (
    <div className="py-14 md:py-28">
      <div className="px-5 md:px-16">
        <Button className="w-full md:w-fit flex justify-center">
          SUBSCRIBE FOR EVENT UPDATES
        </Button>
        <h1 className="text-2xl md:text-4xl md:text-primary mt-6 font-1000">
          EDUCATIONAL PROGRAMMING
        </h1>

        <p className="font-mono my-4 md:my-6">
          Discover grant funding opportunities from leading blockchains, <br />{" "}
          protocols and foundations in support of women & non-binary- <br />{" "}
          builders.
        </p>
      </div>

      {/* <div className="md:w-3/4 px-5 md:px-0 md:ml-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {slides.map((item) => (
          <div
            key={item.id}
            className=" border p-6 rounded-lg border-[#FAB7D0] "
          >
            <div className="relative">
              <Image
                src={"/educational.png"}
                alt=""
                width={440}
                height={195}
                className="w-[440px] h-[195px] object-cover object-center rounded-lg card-shaper "
              />
              <p className="text-xs onramp-background absolute top-0 mx font-mono text-white truncate p-1 rounded-lg ">
                Summit: 26-01-2024 | 03:40-05:40pm UT
              </p>
            </div>

            <div className="space-y-3 mt-6">
              <h3 className="text-primary text-2xl">
                Smart Business Structures
              </h3>
              <p className="text-[#7B7B7D] text-justify">
                Hear from crypto innovators in India as they drive growth and
                adoption in DeFi. Discover how India a leader crypto exchanges
                and learn from our presenters this region`&apos;`s outlook in
                2024 and beyond.
              </p>

              <div>
                <h5 className="font-bold">Presenters:</h5>

                <div className="space-y-3">
                  {item.presenters.map((presenter) => (
                    <div
                      key={presenter.id}
                      className="bg-[#F2F1F7] flex items-center justify-between py-1 px-2 rounded-lg mt-1"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={"/user.svg"}
                          alt="user"
                          height={28}
                          width={28}
                        />

                        <div>
                          <h6 className="font-bold text-xs">Juliya adward</h6>
                          <p className="text-primary text-[10px] font-medium font-mono">
                            CEO of chatGPT
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
          </div>
        ))}
      </div> */}

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
          {slides.map((item) => (
            <SwiperSlide
              key={item.id}
              className=" border p-6 rounded-lg border-[#FAB7D0] "
            >
              <div className="relative">
                <Image
                  src={"/educational.png"}
                  alt=""
                  width={440}
                  height={195}
                  className="w-[440px] h-[195px] object-cover object-center rounded-lg card-shaper "
                />
                <p className="text-xs onramp-background absolute top-0 mx font-mono text-white truncate p-1 rounded-lg ">
                  Summit: 26-01-2024 | 03:40-05:40pm UT
                </p>
              </div>

              <div className="space-y-3 mt-6">
                <h3 className="text-primary text-2xl">
                  Smart Business Structures
                </h3>
                <p className="text-[#7B7B7D] text-justify">
                  Hear from crypto innovators in India as they drive growth and
                  adoption in DeFi. Discover how India a leader crypto exchanges
                  and learn from our presenters this region`&apos;`s outlook in
                  2024 and beyond.
                </p>

                <div>
                  <h5 className="font-bold">Presenters:</h5>

                  <div className="space-y-3">
                    {item.presenters.map((presenter) => (
                      <div
                        key={presenter.id}
                        className="bg-[#F2F1F7] flex items-center justify-between py-1 px-2 rounded-lg mt-1"
                      >
                        <div className="flex items-center gap-2">
                          <Image
                            src={"/user.svg"}
                            alt="user"
                            height={28}
                            width={28}
                          />

                          <div>
                            <h6 className="font-bold text-xs">Juliya adward</h6>
                            <p className="text-primary text-[10px] font-medium font-mono">
                              CEO of chatGPT
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
