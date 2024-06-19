"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function SherLive({ sheHerLive }: any) {
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
    <div
      ref={ref}
      id="siherlive"
      className="flex items-center justify-center flex-col px-5 md:px-0 py-16 md:!py-28 lg:my-32 bg-no-repeat bg-[url('/section-bgsmall.svg')] md:bg-[url('/section-bg.svg')]"
      style={{
        backgroundPosition: bgPosition,
      }}
    >
      <motion.div
        initial={{ opacity: 0.7, x: 500 }}
        animate={controls}
        className="md:w-1/2 text-center space-y-3 md:space-y-[18px]"
      >
        <h3 className="md:text-xl font-medium">{sheHerLive.subtitle}</h3>
        <h1 className="text-4xl uppercase md:text-[64px]  md:text-primary font-1000">
          {sheHerLive.title}
        </h1>
        <p className="font-mono text-sm md:text-xl max-w-[704px] mx-auto">
          {sheHerLive.description}
        </p>
      </motion.div>
    </div>
  );
}
