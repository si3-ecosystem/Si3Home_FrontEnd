"use client";
import Image from "next/image";
import Button from "./shared/Button";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import ImageUrl from "@/utils/imageUrl";
import Modal from "./shared/Modal";
import InputField from "./shared/InputField";
import { useAnimation, useInView, motion } from "framer-motion";

export default function Granting({ granting, register }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const swipeRef = useRef<any>();
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        if (top < window.innerHeight && top > 0) {
          controls.start({ opacity: 1, x: 0 });
        } else {
          controls.start({ opacity: 0, x: 0 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

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
      className="bg-no-repeat bg-[url('/group.png')] bg-cover md:pb-44"
    >
      <motion.div
        ref={sectionRef}
        // initial={{ opacity: 0, x: 300 }}
        animate={controls}
        className="px-5 md:px-16 mb-8"
      >
        {/* <Button className="w-full md:w-fit flex justify-center">
          SUBSCRIBE FOR GRANT UPDATES
        </Button> */}
        <h1 className="text-2xl md:text-4xl md:text-primary mt-6 font-1000">
          {granting.title}
        </h1>
        <p className="font-mono mt-4">{granting.date}</p>
        <p className="font-mono my-4 md:my-6 max-w-xl">
          {granting.description}
        </p>
        <Button
          variant="outline"
          className="border !border-black !text-black text-sm md:text-xl my-4 md:my-6 !font-medium px-4 rounded-lg focus:ring-offset-0"
          onClick={() => setIsOpen(true)}
        >
          Register Now
        </Button>
      </motion.div>

      <div className="w-full md:w-3/4 px-5 md:px-0 md:ml-auto ">
        <Swiper
          onSwiper={(swiper) => {
            swipeRef.current = swiper;
          }}
          slidesPerView={3}
          spaceBetween={30}
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
              <SwiperSlide
                key={key}
                className="relative rounded-lg group overflow-hidden"
              >
                <ImageUrl
                  image={item.image}
                  className={
                    "h-[578px] object-cover object-center rounded-lg w-full card-shaper group-hover:opacity-70 transition-all duration-300 group-hover:scale-[1.07] "
                  }
                />
                <p className="text-sm onramp-background absolute top-3 mx font-mono text-white ml-3 p-1 rounded-lg">
                  Summit: {item.summitDate}
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

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        backgroundImage="/registration-bg.svg"
        className="relative md:w-[1174px] max-h-screen md:max-h-[98vh] z-50"
      >
        <div className="absolute inset-0 -z-50">
          <div className="background-gradient" />
        </div>
        <div className="flex flex-col items-center text-center px-4 md:px-0 py-4 md:py-16 z-10">
          <h1 className="text-2xl md:text-5xl font-bold mb-5">
            {register.title}
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-2 mb-4 md:mb-11">
            <p className="font-medium bg-[#342F52] text-white py-1 px-3 md:py-2 md:px-6 rounded-full text-xs md:text-sm">
              {register.date}
            </p>

            <p className="font-medium bg-[#342F52] text-white py-1 px-3 md:py-2 md:px-6 rounded-full text-xs md:text-sm">
              {register.stream}
            </p>
          </div>

          <div className="space-y-2 md:space-y-6 flex flex-col justify-center items-center">
            <p className="text-center text-[#6D6D6D] text-sm md:text-base max-w-sm">
              {register.subtitle}
            </p>

            <form className=" w-full max-w-md">
              <div className="space-y-4">
                <div>
                  <InputField
                    type="text"
                    placeholder="Name"
                    className="w-full py-3 px-4 border border-gray-300 rounded-xl"
                  />
                </div>
                <div>
                  <InputField
                    type="email"
                    placeholder="Work Email"
                    className="w-full py-3 px-4 border border-gray-300 rounded-xl"
                  />
                </div>
              </div>

              <div className="py-4 md:py-10">
                <Button className="w-full hover:scale-[1.02] transition-all duration-300 flex items-center md:py-3 justify-center text-sm md:text-lg">
                  Register Now
                </Button>
              </div>
            </form>
          </div>
          <p className="text-center text-[#6D6D6D] text-sm md:text-base">
            Choose your calendar app where to add event:
          </p>
          <motion.div className="flex justify-center gap-2 md:gap-4 mt-3 md:mt-6 flex-wrap">
            <motion.a
              href={register.apple}
              target="_blank"
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="bg-[#100E1C] cursor-pointer  py-2 px-4 md:py-4 md:px-8 flex flex-col items-center justify-center rounded-lg md:rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
              >
                <path
                  d="M18.1476 5.94565C16.9213 7.17196 14.595 6.83382 14.595 6.83382C14.595 6.83382 14.2568 4.50743 15.4832 3.28112C16.7095 2.0548 19.0358 2.39294 19.0358 2.39294C19.0358 2.39294 19.374 4.71933 18.1476 5.94565Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.13158"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.49951 15.9962C5.49951 19.7097 7.98497 23.975 10.4998 24.8764C11.3717 25.1888 12.2729 24.7576 13.0221 24.2207C13.5905 23.8133 14.2788 23.4242 14.8347 23.4242C15.3905 23.4242 16.0788 23.8133 16.6471 24.2207C17.3964 24.7576 18.2976 25.1888 19.1694 24.8764C20.9565 24.2359 22.7287 21.8968 23.6048 19.2642C21.9083 18.7783 20.6691 17.2433 20.6691 15.4249C20.6691 13.7589 21.7092 12.3308 23.1881 11.7294C22.2352 10.0371 20.6781 9.13965 18.9188 9.13965C18.0087 9.13965 17.1722 9.50653 16.4965 9.94631C15.4181 10.6482 14.2513 10.6482 13.1727 9.94631C12.4971 9.50653 11.6607 9.13965 10.7505 9.13965C7.85047 9.13965 5.49951 11.5783 5.49951 15.9962Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.13158"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-[#838383] text-xs">Apple</p>
            </motion.a>
            <motion.a
              href={register.google}
              target="_blank"
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="bg-[#100E1C] cursor-pointer py-2 px-4 md:py-4 md:px-8 flex flex-col items-center justify-center rounded-lg md:rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M21.0428 2.35059V4.61374M7.46387 2.35059V4.61374"
                  stroke="#68647D"
                  stroke-width="1.13158"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.50342 13.9416C3.50342 9.011 3.50342 6.54568 4.92029 5.01393C6.33716 3.48218 8.61758 3.48218 13.1784 3.48218H15.3284C19.8892 3.48218 22.1697 3.48218 23.5866 5.01393C25.0034 6.54568 25.0034 9.011 25.0034 13.9416V14.5228C25.0034 19.4534 25.0034 21.9187 23.5866 23.4505C22.1697 24.9822 19.8892 24.9822 15.3284 24.9822H13.1784C8.61758 24.9822 6.33716 24.9822 4.92029 23.4505C3.50342 21.9187 3.50342 19.4534 3.50342 14.5228V13.9416Z"
                  fill="white"
                />
                <path
                  d="M11.9905 19.3243L11.9905 15.1909C11.9905 14.9739 11.8357 14.798 11.6449 14.798H10.8589M16.0978 19.3243L17.6305 15.1931C17.7021 15 17.5497 14.798 17.3323 14.798H15.3852"
                  stroke="#9590AA"
                  stroke-width="1.13158"
                  stroke-linecap="round"
                />
                <path
                  d="M7.46387 9.14001H21.0428"
                  stroke="#9591AA"
                  stroke-width="1.13158"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-[#838383] text-xs">Google</p>
            </motion.a>
            <motion.a
              href={register.office}
              target="_blank"
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="bg-[#100E1C] cursor-pointer py-2 px-4 md:py-4 md:px-8 flex flex-col items-center justify-center rounded-lg md:rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M5.14893 20.4556V6.87666L17.0305 2.35034L23.2542 4.6135V22.7188L17.0305 24.9819L5.14893 20.4556ZM5.14893 20.4556L16.4647 21.0214V6.87666L10.241 8.57403V17.6267L5.14893 20.4556Z"
                  fill="white"
                />
                <path
                  d="M5.14893 20.4556V6.87666L17.0305 2.35034L23.2542 4.6135V22.7188L17.0305 24.9819L5.14893 20.4556ZM5.14893 20.4556L16.4647 21.0214V6.87666L10.241 8.57403V17.6267L5.14893 20.4556Z"
                  stroke="#9590AA"
                  stroke-width="1.13158"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-[#838383] text-xs">Office 365</p>
            </motion.a>
          </motion.div>
        </div>
      </Modal>
    </motion.div>
  );
}
