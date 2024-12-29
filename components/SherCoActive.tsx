"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SherCoActive({ sherCoActive }: any) {
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
      id="siherCoActive"
      className="flex items-center justify-center flex-col mt-[60px] md:px-0 py-16 md:py-28 bg-no-repeat bg-[url('/section-bgsmall.svg')] md:bg-[url('/section-bg.svg')]"
      style={{
        backgroundPosition: bgPosition,
      }}
    >
      <div className="md:w-3/4 text-center space-y-3 md:space-y-[18px]">
        <h3 className="md:text-xl font-medium uppercase">
          {sherCoActive.subtitle}
        </h3>
        <h1 className="text-xl sm:text-4xl uppercase md:text-[64px] text-primary font-medium">
          {sherCoActive.title}
        </h1>
        <p className="font-mono text-sm md:text-xl max-w-[704px] mx-auto">
          {sherCoActive.description}
        </p>
      </div>
    </motion.div>
  );
}
