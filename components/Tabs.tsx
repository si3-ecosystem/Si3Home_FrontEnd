"use client";

import { useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SherCoActive from "./SherCoActive";
import Ecosystem from "./Ecosystem";
import Mission from "./Mission";
import Testimonials from "./Testimonials";
import Educational from "./Educational";
import Onboard from "./Onboard";
import Members from "./Members";
import SherLive from "./SherLive";
import { MembershipBanner } from "./organism/banner/membership";
import Brand from "./Brand";
import Granting from "./Granting";
import { title } from "process";

type TabsProps = {
  educationalProgramming: any;
  ecosystemSpotlight: any;
  mission: any;
  testimonials: any;
  brand:any;
  sherCoActive: any;
  onboard: any;
  memberSpotlight: any;
  sheHerLive: any;
  granting: any;
  sherexplorer: any;
  register: any;
};

export default function Tabs({
  educationalProgramming,
  ecosystemSpotlight,
  mission,
  testimonials,
  sherCoActive,
  onboard,
  memberSpotlight,
  sheHerLive,
  brand,
  granting,
  sherexplorer,
  register,
}: TabsProps) {
  const [bgPosition, setBgPosition] = useState("center top 112px");
  const [activeTab, setActiveTab] = useState("explorers");

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
      className="flex items-center justify-center flex-col px-5 md:px-0 py-16 md:!py-4 bg-no-repeat bg-[url('/section-bgsmall.svg')] md:bg-[url('/section-bg.svg')]"
      style={{
        backgroundPosition: bgPosition,
      }}
    >
      <div className="w-full mx-auto p-4 mt-10">
        {/* Tab Buttons */}
        <div className="flex w-full max-w-[633px] mx-auto justify-start rounded-[12px] border border-gray-300 bg-white p-1">
          <button
            onClick={() => setActiveTab("explorers")}
            className={`flex-1 text-center h-14 rounded-[12px] transition ${
              activeTab === "explorers"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Explorers
          </button>
          <button
            onClick={() => setActiveTab("leaders")}
            className={`flex-1 text-center h-14 px-4 py-2 rounded-[12px] transition ${
              activeTab === "leaders"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Leaders
          </button>
          <button
            onClick={() => setActiveTab("brands")}
            className={`flex-1 text-center h-14 px-4 py-2 rounded-[12px] transition ${
              activeTab === "brands"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Partners
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "explorers" && (
            <div className="p-4 text-center">
              <SherCoActive sherCoActive={sherexplorer} />
              <Educational educationalProgramming={educationalProgramming} />
              {/* <Ecosystem ecosystemSpotlight={ecosystemSpotlight} /> */}
              <Mission mission={mission} />
              {/* <Testimonials testimonials={testimonials} /> */}
            </div>
          )}
          {activeTab === "leaders" && (
            <div className="p-4 text-center">
              {/* <SherCoActive sherCoActive={sherCoActive} /> */}
              <Brand brand={brand} />
              <Educational educationalProgramming={educationalProgramming} />

              {/* <Members memberSpotlight={memberSpotlight} /> */}
              {/* <Mission mission={mission} /> */}
              {/* <Testimonials testimonials={testimonials} /> */}
              {/* <MembershipBanner /> */}
            </div>
          )}
          {activeTab === "brands" && (
            <div className="p-4 text-center">
              {/* <Granting granting={granting} register={register} />
              <Educational educationalProgramming={educationalProgramming} /> */}
              <Mission mission={mission} />
              {/* <SherLive sheHerLive={sheHerLive} /> */}
              <Testimonials testimonials={testimonials} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
