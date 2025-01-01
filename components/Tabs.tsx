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
import JoinForm from "./JoinForm";
import Pricing from "./Pricing";
import SingleTestimonial from "./SingleTestimonial";
import ImageUrl from "@/utils/imageUrl";
import Link from "next/link";
import Image from "next/image";
import JoinTabFooter from "./JoinTabFooter";

type TabsProps = {
  educationalProgramming: any;
  ecosystemSpotlight: any;
  mission: any;
  testimonials: any;
  partnerTestimonials: any[];
  brand:any;
  sherCoActive: any;
  onboard: any;
  memberSpotlight: any;
  sheHerLive: any;
  granting: any;
  pricing:any,
  sherexplorer: any;
  register: any;
  partnerTabData:{
    header:any,
    footer:any[],
    programs:any[]
  },
  joinBuildersTab:any,
  joinExplorersTab:any,
  joinLeadersTab:any
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
  pricing,
  sherexplorer,
  partnerTabData,
  register,
  partnerTestimonials,
  joinBuildersTab,
  joinExplorersTab,
  joinLeadersTab
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
      className="flex items-center justify-center flex-col md:px-0 py-16 md:!py-4 bg-no-repeat"
    >
      <div className="w-full mx-auto p-4 mt-4 sm:mt-10">
        {/* Tab Buttons */}
        <div className="flex w-full max-w-[750px] mx-auto justify-start rounded-[12px] border border-gray-300 bg-white p-1">
          <button
            onClick={() => setActiveTab("explorers")}
            className={`flex-1 text-center h-14 px-6 text-xs md:text-base rounded-[12px] transition ${
              activeTab === "explorers"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {"I'm Exploring Web3"}
          </button>
          <button
            onClick={() => setActiveTab("leaders")}
            className={`flex-1 text-center h-14 px-6 py-2 text-xs md:text-base rounded-[12px] transition ${
              activeTab === "leaders"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {"I'm Leading Web3"}
          </button>
          <button
            onClick={() => setActiveTab("brands")}
            className={`flex-1 text-center h-14 px-6 text-xs md:text-base py-2 rounded-[12px] transition ${
              activeTab === "brands"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {"I'm Building Web3"}
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "explorers" && (
            <div className="p-4  mx-auto text-center">
              <SherCoActive sherCoActive={sherexplorer} />
              {/* <Educational educationalProgramming={educationalProgramming} /> */}
              <Ecosystem ecosystemSpotlight={ecosystemSpotlight} />
              <Mission mission={mission} />
              {/* <Pricing pricing={pricing}/> */}
              {/* <JoinForm/> */}
              {/* <Testimonials testimonials={testimonials} /> */}
              <JoinTabFooter footerData={joinExplorersTab}/>
            </div>
          )}
          {activeTab === "leaders" && (
            <div className="p-4 text-center">
              <SherCoActive sherCoActive={sherCoActive} />
              <Brand brand={brand} />
              <Educational educationalProgramming={educationalProgramming} />
              {/* <SingleTestimonial testimonial={testimonials[0]}/> */}
              <p className="text-[#4428F2] font-medium text-[40px] leading-[68px]">TESTIMONIALS</p>

              <Testimonials testimonials={testimonials}/>

              {/* <Members memberSpotlight={memberSpotlight} /> */}
              {/* <Mission mission={mission} /> */}
              
              {/* <MembershipBanner /> */}
              <JoinTabFooter footerData={joinLeadersTab}/>
            </div>
          )}
          {activeTab === "brands" && (
            <div className="p-4 text-center mx-auto">
              {/* <Granting granting={granting} register={register} />
              <Educational educationalProgramming={educationalProgramming} /> */}
              {/* <SingleTestimonial testimonial={testimonials[1]}/> */}
              <div className="max-w-[1196px] mt-[170px] mx-auto">
                <p className="text-3xl md:leading-[64px] md:text-[56px] max-w-[672px] mx-auto font-mono">{partnerTabData.header.title}</p>
                <p className="max-w-[802px] text-lg text-[#7E8492] font-mono mx-auto my-4">{partnerTabData.header.subtitle}</p>
              </div>
              {partnerTabData.programs.map((program,index)=>{
                const isReversed = index % 2 !== 0;
                
                return ( 
                  <div key={program.id} className={`flex flex-col max-w-[1196px] mx-auto items-center my-20 min-h-[500px] gap-10 lg:gap-[88px] ${isReversed?"lg:flex-row-reverse":"lg:flex-row"} justify-between`}>
                    <div className="font-mono text-left flex-1">
                      <span className="inline-block text-xs sm:text-base bg-[#FAB7D0] text-black py-2 px-3">{program.event}</span>
                      <p className="text-2xl sm:leading-[52px] my-2 sm:text-[40px]">{program.title}</p>
                      <p className="text-sm sm:text-base text-[#7E8492]">{program.description}</p>
                    </div>
                    <div className="flex-1 min-h-[300px] sm:min-h-[479px] bg-[#F6F6F6] rounded-3xl p-8">
                      <ImageUrl image={program.banner}/>
                    </div>
                  </div>
                )
              })}
               <Mission mission={mission} />
              <br />
              {/* <SherLive sheHerLive={sheHerLive} /> */}
              <p className="text-[#4428F2] font-medium text-[40px] leading-[68px] mb-6">TESTIMONIALS</p>
              {partnerTestimonials && partnerTestimonials.length > 0 && <Testimonials testimonials={partnerTestimonials} />}
              <JoinTabFooter footerData={joinBuildersTab}/>
            </div>
          )}

          
        </div>
      </div>
    </div>
  );
}
