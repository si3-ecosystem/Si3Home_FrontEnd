"use client";
import React, { useEffect, useRef } from "react";
import Button from "./shared/Button";

import { motion, useAnimation, useInView } from "framer-motion";

export default function Banner({ hero }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 2, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);
  return (
    <motion.div
      ref={ref}
      className="relative bg-[url('/bgBanner_mobile.png')] md:bg-[url('/banner.png')] w-full h-[482px] lg:h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0" />
      <div className="relative z-10 px-10 md:px-16 pt-24 md:pt-[286px]">
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
          className="md:pt-6 text-white text-xl font-mono max-w-xs"
          initial={{ opacity: 0.7, x: 500 }}
          animate={controls}
        >
          {hero.subHeader}
        </motion.p>
        <motion.div
          initial={{ opacity: 0.7, x: 500 }}
          animate={controls}
          className="mt-8 md:mt-[117px] flex items-center justify-center w-full md:w-fit"
        >
          <ButtonCTA variant="outline">{hero.cta.text}</ButtonCTA>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ButtonCTA({ children, className }: any) {
  return (
    <button className={`button ${className} rounded-lg`}>
      <span className="button-text">{children}</span>
    </button>
  );
}
