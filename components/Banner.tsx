"use client";
import React from "react";
import Button from "./shared/Button";

export default function Banner() {
  return (
    <div className="relative bg-[url('/banner.png')] w-full  lg:h-screen bg-cover bg-right bg-no-repeat">
      <div className="absolute inset-0" />
      <div className="relative z-10 pl-16 pt-[186px]">
        <h1 className="text-white font-bold text-6xl">ENTERING AN</h1>
        <h1 className="text-primary font-bold uppercase text-6xl">
          Accessible
        </h1>
        <h1 className="text-primary font-bold uppercase text-6xl">Web3 Era</h1>
        <p className="md:pt-6 text-white text-xl font-mono">
          Creating Pathways For Diverse <br /> Voices Of The New Economy
        </p>
        <Button variant="outline" className="mt-[117px]">
          JOIN OUR COMMON GROUND
        </Button>
      </div>
    </div>
  );
}
