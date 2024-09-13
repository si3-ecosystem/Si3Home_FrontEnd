"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Button from "./shared/Button";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import urlFor from "@/utils/urlFor";


export default function Banner({ hero, utils }: any) {
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
      className="relative w-full h-[482px] md:h-screen overflow-hidden"
    >
      <div className="absolute inset-0 -z-40 ">
        <Image
          src="/banner_desk.png"
          alt="Background image mobile"
          layout="fill"
          objectFit="contain"
          priority
          className="md:hidden w-full  scale-[3]"
        />
        <motion.div className="hidden md:block">
          <Image
            src="/banner_desk.png"
            alt="Background image desktop"
            layout="fill"
            decoding="async"
            objectFit="cover"
            priority
            objectPosition="right center"
         
          />
        </motion.div>
      </div>
      <div className="absolute inset-0" />
      <div className="relative z-10 px-10 md:px-16 pt-36 2xl:pt-[196px] ">
        <motion.div className="w-[70px] h-7 ">
        <img src="/images/siherLogo.png" alt="" className="md:hidden lg:hidden object-contain" />
        </motion.div>
        <motion.h1
          className="text-white text-2xl md:text-6xl font-[1000] hidden md:block"
          initial={{ opacity: 0.7, x: 500 }}
          animate={controls}
        >
          {hero?.headingOne}
        </motion.h1>
        <motion.h2
          className="text-primary uppercase text-2xl md:text-6xl w-fit md:max-w-[450px] max-w-xs font-[1000] hidden md:block "
          initial={{ opacity: 0.7, x: 500 }}
          animate={controls}
        >
          {hero?.headingTwo}
        </motion.h2>
        <motion.p
          className="md:pt-6 text-white text-sm md:text-xl font-mono max-w-xs max-sm:mt-4 w-[60%] lg:w-full md:w-full "
          initial={{ opacity: 0.7, x: 500 }}
          animate={controls}
        >
          {hero?.subHeader}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="mt-8 md:mt-10 xl:mt-[40px] flex items-center justify-center w-full md:w-fit"
        >
          <a href={hero.cta.link.external} target="_blank" className="w-full">
            <ButtonCTA variant="outline">{hero?.cta?.text}</ButtonCTA>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ButtonCTA({ children, className }: any) {
  return (
    <button className={`button ${className} rounded-lg max-sm:w-full mt-5`}>
      <span className="button-text max-sm:text-sm font-normal max-sm:py-3 max-sm:w-full leading-5">
        {children}
      </span>
    </button>
  );
}
