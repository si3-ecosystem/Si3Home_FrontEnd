"use client";
import React from "react";
import Button from "./shared/Button";

export default function Banner() {
  return (
    <div className="relative bg-[url('/bgBanner_mobile.png')] md:bg-[url('/banner.png')] w-full h-[482px] lg:h-screen bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0" />
      <div className="relative z-10 px-10 md:px-16 pt-24 md:pt-[186px]">
        <h1 className="text-white font-bold text-2xl md:text-6xl">
          ENTERING AN
        </h1>
        <h1 className="text-primary font-bold uppercase text-2xl md:text-6xl">
          Accessible
        </h1>
        <h1 className="text-primary font-bold uppercase text-2xl md:text-6xl">
          Web3 Era
        </h1>
        <p className=" md:pt-6 text-white text-xl font-mono">
          Creating Pathways For Diverse <br /> Voices Of The New Economy
        </p>
        <Button
          variant="outline"
          className="mt-8 md:mt-[117px] flex items-center justify-center w-full md:w-fit"
        >
          JOIN OUR COMMON GROUND
        </Button>
      </div>
    </div>
  );
}
