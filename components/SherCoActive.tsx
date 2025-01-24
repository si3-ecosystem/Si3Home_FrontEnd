"use client";
import { useState, useEffect } from "react";
import { Image } from "antd";

interface Props {
  sherCoActive:any,
  isLeaderTab?:boolean
}

export default function SherCoActive({ sherCoActive,isLeaderTab=false }:Props) {
  const [, setBgPosition] = useState("center top 112px");

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
    <div
      // whileInView={{
      //   y: [100, 0],
      //   opacity: [0, 1],
      // }}
      // transition={{
      //   duration: 0.5,
      //   ease: "easeInOut",
      // }}
      id="siherCoActive"
      className="g lg:mt-[60px] px-4 lg:px-10 border-y border-gray-400"
    >
      <div className="max-w-7xl grid lg:grid-cols-2">
          <div className="lg:border-r text-center lg:text-left lg:border-gray-400 py-8 lg:py-32 lg:pr-24">
            <h3 className="text-base text-primary  uppercase">
              {sherCoActive.subtitle}
            </h3>
            <h1 className="text-xl sm:text-2xl uppercase md:text-[44px] my-4 text-black font-black">
              {sherCoActive.title}
            </h1>
            <p className="font-mono text-sm md:text-lg">
              {sherCoActive.description}
            </p>
          </div>
          <div className="flex items-center justify-center pb-4">
            {isLeaderTab
            ?(<Image alt="Explorers Image" preview={false}  src="/images/leaders-coactive.png"/>)
            :(<Image alt="Explorers Image" preview={false}  src="/images/explorers-2.png"/>)}
          </div>
      </div>
    </div>
  );
}
