"use client";
import { useState, useEffect } from "react";
import Button from "./shared/Button";
import { motion } from "framer-motion";

export default function Onboard({ onboard }: any) {
  const [bgPosition, setBgPosition] = useState("center top 112px");

  useEffect(() => {
    const updateBgPosition = () => {
      if (window.innerWidth < 768) {
        setBgPosition("center top 122px");
      } else {
        setBgPosition("center top 112px");
      }
    };

    window.addEventListener("resize", updateBgPosition);
    updateBgPosition();

    return () => {
      window.removeEventListener("resize", updateBgPosition);
    };
  }, []);

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
      id="onboard"
      className="flex items-center justify-center flex-col px-5 md:px-0 py-16 md:py-28 bg-no-repeat bg-[url('/section-bgsmall.svg')] md:bg-[url('/section-bg.svg')]"
      style={{
        backgroundPosition: bgPosition,
      }}
    >
      <div className="md:w-1/2 text-center space-y-3 md:space-y-[18px]">
        <h3 className="md:text-xl font-medium">{onboard.subtitle}</h3>
        <h1 className="text-4xl uppercase md:text-[64px] md:text-primary font-1000">
          {onboard.title}
        </h1>
        <p className="font-mono text-sm md:text-xl">{onboard.description}</p>
        {/* <Button className="font-medium text-sm md:text-xl">
          {onboard.cta.text}
        </Button> */}
      </div>
    </motion.div>
  );
}
