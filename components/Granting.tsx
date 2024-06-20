// @ts-nocheck

"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Button from "./shared/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";
import moment from "moment";
import ImageUrl from "@/utils/imageUrl";
import Modal from "./shared/Modal";
import InputField from "./shared/InputField";
import { useAnimation, motion } from "framer-motion";
// Import the custom hook

export default function Granting({ granting, register }) {
  const [isOpen, setIsOpen] = useState(false);
  const swipeRef = useRef(null);
  const controls = useAnimation();
  const sectionRef = useRef(null);

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

  useEffect(() => {
    if (isOpen) {
      // Load HubSpot forms script when the modal is open
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "45396312",
          formId: "66a7c18e-95f2-4b85-b030-e29cbda4f05d",
          target: "#hubspotForm",
        });
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

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
        animate={controls}
        className="px-5 md:px-16 mb-8"
      >
        <h1 className="text-2xl md:text-4xl md:text-primary mt-6 font-1000">
          {granting.title}
        </h1>
        <p className="font-mono mt-4">{granting.date}</p>
        <p className="font-mono my-4 md:my-6 max-w-xl">
          {granting.description}
        </p>

        <ButtonCTA
          variant="outline"
          className="border !border-black text-black hover:text-white text-sm md:text-xl my-4 md:my-6 !font-medium px-4 rounded-lg focus:ring-offset-0"
        >
          <div onClick={() => setIsOpen(true)}>Register Now</div>
        </ButtonCTA>
      </motion.div>

      <div className="w-full md:w-3/4 px-5 md:px-0 md:ml-auto">
        <Swiper
          onSwiper={(swiper) => {
            swipeRef.current = swiper;
          }}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2500 }}
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
          {granting?.builders?.length > 0 &&
            granting.builders.map((item, key) => (
              <SwiperSlide
                key={key}
                className="relative rounded-lg group overflow-hidden"
              >
                <ImageUrl
                  image={item.image}
                  className={
                    "h-[578px] object-cover object-center rounded-lg w-full card-shaper group-hover:opacity-70 transition-all duration-300 group-hover:scale-[1.07]"
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

            {/* Add this div where the form should be rendered */}
            <div id="hubspotForm"></div>
          </div>
          {/* <p className="text-center text-[#6D6D6D] text-sm md:text-base">
            Choose your calendar app where to add event:
          </p> */}
          {/* <motion.div className="flex justify-center gap-2 md:gap-4 mt-3 md:mt-6 flex-wrap">
            <motion.a
              href={register.apple}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="bg-[#EFEFEF] w-[128px] md:w-[192px] h-[40px] md:h-[54px] rounded-lg flex justify-center items-center"
            >
              <Image
                src={"/apple-icon.svg"}
                width={22}
                height={22}
                alt=""
                className="object-cover"
              />
            </motion.a>
            <motion.a
              href={register.google}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="bg-[#EFEFEF] w-[128px] md:w-[192px] h-[40px] md:h-[54px] rounded-lg flex justify-center items-center"
            >
              <Image
                src={"/google-icon.svg"}
                width={22}
                height={22}
                alt=""
                className="object-cover"
              />
            </motion.a>
          </motion.div> */}
        </div>
      </Modal>
    </motion.div>
  );
}

function ButtonCTA({ children, className }: any) {
  return (
    <button className={`button ${className} rounded-lg`}>
      <span className="button-text max-sm:text-sm max-sm:py-3">{children}</span>
    </button>
  );
}
