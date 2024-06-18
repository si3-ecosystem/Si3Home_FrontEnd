"use client";
import React from "react";
import Image from "next/image";
import Button from "./shared/Button";

export default function Banner({ hero }: any) {
  return (
    <div className="relative w-full h-[482px] lg:h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgBanner_mobile.png"
          alt="Background image mobile"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="md:hidden"
        />
        <Image
          src="/banner.png"
          alt="Background image desktop"
          layout="fill"
          objectFit="cover"
          objectPosition="right center"
          className="hidden md:block"
        />
      </div>
      <div className="relative z-10 px-10 md:px-16 pt-24 md:pt-[186px]">
        <h1 className="text-white font-bold text-2xl md:text-6xl">
          {hero.headingOne}
        </h1>
        <h2 className="text-primary font-bold uppercase text-2xl md:text-6xl max-w-xs">
          {hero.headingTwo}
        </h2>

        <p className=" md:pt-6 text-white text-xl font-mono max-w-xs">
          {hero.subHeader}
        </p>
        <Button
          variant="outline"
          className="mt-8 md:mt-[117px] flex items-center justify-center w-full md:w-fit"
        >
          {hero.cta.text}
        </Button>
      </div>
    </div>
  );
}
