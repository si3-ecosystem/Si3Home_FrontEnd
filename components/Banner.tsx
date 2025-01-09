"use client";
import React, { useEffect, useRef } from "react";
import Button from "./shared/Button";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import urlFor from "@/utils/urlFor";
import ImageUrl from "@/utils/imageUrl";

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

interface BannerProps{
  hero:any,
  partners:{
    name:string,
    logo:any
  }[]
}

export default function Banner({ hero,partners }:BannerProps) {

  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(()=>{
    if(videoRef.current){
      videoRef.current.play();
    }
  },[videoRef])

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
      <video ref={videoRef} src="/hero.mp4" autoPlay className="w-full h-full absolute top-0 left-0 right-0 object-cover" loop/>
      <div className="absolute inset-0 -z-40 ">
        <motion.div className="hidden md:block ">
        </motion.div>
      </div>
      <div className="absolute inset-0" />
      <div className="relative z-10 px-4 md:px-16 pt-36 2xl:pt-[196px] ">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-[1000]"
          initial={{ opacity: 0.7, x: 500 }}
          animate={controls}
        >
          {hero?.headingOne}
        </motion.h1>
        <motion.h2
          className="text-primary uppercase text-4xl md:text-6xl max-w-[100px] sm:max-w-xs font-[1000]"
          initial={{ opacity: 0.7, x: 500 }}
          animate={controls}
        >
          {hero?.headingTwo}
        </motion.h2>

        <button className="w-full max-md:hidden sm:max-w-[150px] text-white text-sm font-medium leading-[140%] uppercase py-3.5 rounded-lg px-2.5 border border-white hover:text-white hover:bg-[#3C1FEF] hover:border-[#3C1FEF] lg:hidden mt-7">
          Login
        </button>
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
