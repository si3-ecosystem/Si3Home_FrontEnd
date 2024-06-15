"use client";
import { useState, useEffect } from "react";

export default function SherCoActive() {
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
          PERSONAL BRAND. PUBLIC SPEAKING. COLLABORATIONS.
        </h3>
        <h1 className="text-2xl md:text-[64px]  md:text-primary font-1000">
          Si Her Co-Active
        </h1>
        <p className="font-mono text-sm md:text-xl">
          Si Her is a global community of women & non-binary emerging tech
          innovators. We co-activate by taking action towards our professional
          goals in a supportive membership experience.
        </p>
      </div>
    </div>
  );
}
