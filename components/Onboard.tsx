"use client";
import { useState, useEffect } from "react";
import Button from "./shared/Button";

export default function Onboard() {
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
    <div
      className="flex items-center justify-center flex-col px-5 md:px-0 py-16 md:py-28 bg-no-repeat bg-[url('/section-bgsmall.svg')] md:bg-[url('/section-bg.svg')]"
      style={{
        backgroundPosition: bgPosition,
      }}
    >
      <div className="md:w-1/2 text-center space-y-3 md:space-y-[18px]">
        <h3 className="md:text-xl font-medium">
          EDUCATION. CONNECTION. COLLABORATION.
        </h3>
        <h1 className="text-2xl md:text-[64px] md:text-primary font-1000">
          Onboard
        </h1>
        <p className="font-mono text-sm md:text-xl">
          We have created two pathways to access our offerings. We support
          equitable business models, with fair pricing and access.
        </p>
        <Button className="font-medium text-xl">Subscribe to Push Chat</Button>
      </div>
    </div>
  );
}
