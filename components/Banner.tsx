"use client";
import React, { useEffect, useRef } from "react";
import Button from "./shared/Button";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

export default function Banner({ hero }: any) {
  console.log("hero", hero);
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
    <motion.div ref={ref} className="relative w-full h-[482px] md:h-screen">
      <div className="absolute inset-0 -z-40 ">
        <Image
          src="/bgBanner_mobile.png"
          alt="Background image mobile"
          layout="fill"
          objectFit="cover"
          priority
          objectPosition="center"
          className="md:hidden"
        />
        <motion.div className="hidden md:block">
          <Image
            src="/banner.png"
            alt="Background image desktop"
            layout="fill"
            objectFit="cover"
            priority
            objectPosition="right center"
          />
        </motion.div>
      </div>
      <div className="absolute inset-0" />
      <div className="relative z-10 px-10 md:px-16 pt-36 md:pt-[196px]">
        <motion.h1
          className="text-white font-bold text-2xl md:text-6xl"
          initial={{ opacity: 0.7, x: 500 }}
          animate={controls}
        >
          {hero.headingOne}
        </motion.h1>
        <motion.h2
          className="text-primary font-bold uppercase text-2xl md:text-6xl max-w-xs"
          initial={{ opacity: 0.7, x: 500 }}
          animate={controls}
        >
          {hero.headingTwo}
        </motion.h2>
        <motion.p
          className="md:pt-6 text-white text-sm md:text-xl font-mono max-w-xs"
          initial={{ opacity: 0.7, x: 500 }}
          animate={controls}
        >
          {hero.subHeader}
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
          className="mt-8 md:mt-[80px] flex items-center justify-center w-full md:w-fit"
        >
          <a href={hero.cta.link.external} target="_blank">
            <ButtonCTA variant="outline">{hero.cta.text}</ButtonCTA>
          </a>
        </motion.div>
      </div>
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
