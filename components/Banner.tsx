"use client";
import React, { useEffect, useRef } from "react";
import Button from "./shared/Button";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import urlFor from "@/utils/urlFor";

const partners = [
  {
    title: "ecosystem partners",
    src: "/icons/Ecosystem Partners_.svg",
  },
  {
    title: "livepeer",
    src: "/icons/liepeer.svg",
  },
  {
    title: "huddle",
    src: "/icons/huddle.svg",
  },
  {
    title: "pinata",
    src: "/icons/pinata.svg",
  },
  {
    title: "aurpay",
    src: "/icons/aurpay.svg",
  },
  {
    title: "charmverse",
    src: "/icons/charmverse.svg",
  },
  {
    title: "ikiguide",
    src: "/icons/ikiguide.svg",
  },
];

export default function Banner({ hero }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,

        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);
  return (
    <motion.div
      ref={ref}
      className="relative w-full max-[390px]:h-[400px] max-md:h-[460px] max-h-[860px] -z-10 md:h-screen overflow-hidden  bg-gradient-to-r from-[#F5B6D3] to-[#E5B9DA]"
    >
      <div className="absolute inset-0 -z-40 ">
        <Image
          src="/heromobile.png"
          alt="Background image mobile"
          width={800}
          height={500}
          priority
          className="md:hidden w-full translate-x-36 scale-[1.2] sm:scale-[1.05] lg:scale-[1.2] translate-y-20 sm:translate-y-0 lg:translate-y-20 object-cover"
        />
        <motion.div className="hidden md:block">
          <Image
            src="/herobgdesktop.png"
            alt="Background image desktop"
            layout="fill"
            decoding="async"
            objectFit="cover"
            priority
            objectPosition="center right "
            className="ml-96  mt-20"
          />
        </motion.div>
      </div>
      <div className="absolute inset-0" />
      <div className="relative z-10 px-4 md:px-16 pt-36 2xl:pt-[196px] ">
        <motion.h1
          className="text-white text-2xl md:text-6xl font-[1000]"
          initial={{ opacity: 0.7, x: 500 }}
          animate={controls}
        >
          {hero?.headingOne}
        </motion.h1>
        <motion.h2
          className="text-primary uppercase text-2xl md:text-6xl max-w-[200px] sm:max-w-xs font-[1000]"
          initial={{ opacity: 0.7, x: 500 }}
          animate={controls}
        >
          {hero?.headingTwo}
        </motion.h2>
        <motion.p
          className="md:pt-6 text-white text-sm md:text-xl font-mono max-w-[182px] md:max-w-[522px] max-sm:mt-4  "
          initial={{ opacity: 0.7, x: 500 }}
          animate={controls}
        >
          {hero?.subHeader}
        </motion.p>

        <button className="w-full sm:max-w-[150px] text-white text-sm font-medium leading-[140%] uppercase py-3.5 rounded-lg px-2.5 border border-white hover:text-white hover:bg-[#3C1FEF] hover:border-[#3C1FEF] lg:hidden mt-7">
          Login
        </button>
      </div>
      {/* banner */}
      <div className="bg-[#F0DEDE] h-[100px] w-full absolute bottom-0 z-40  hidden md:flex  items-center justify-between gap-2 px-10 md:px-16">
        {partners.map((item, key) => (
          <div key={key}>
            <Image
              src={item.src}
              alt={item.title}
              width={400}
              height={400}
              className="w-full h-auto aspect-auto"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ButtonCTA({ children, className }: any) {
  return (
    <button className={`button ${className} rounded-lg max-sm:w-full`}>
      <span className="button-text max-sm:text-sm max-sm:py-3 max-sm:w-full">
        {children}
      </span>
    </button>
  );
}
