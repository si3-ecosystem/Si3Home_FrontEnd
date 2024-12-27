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
  pricing:any,
  sherexplorer: any;
  register: any;
  partnerTabData:{
    header:any,
    programs:any[]
  }
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
            <div className="p-4  mx-auto text-center">
              <SherCoActive sherCoActive={sherexplorer} />
              <Educational educationalProgramming={educationalProgramming} />
              {/* <Ecosystem ecosystemSpotlight={ecosystemSpotlight} /> */}
              <Mission mission={mission} />
              {/* <Pricing pricing={pricing}/> */}
              <JoinForm/>
              {/* <Testimonials testimonials={testimonials} /> */}
            </div>
          )}
          {activeTab === "leaders" && (
            <div className="p-4 text-center">
              {/* <SherCoActive sherCoActive={sherCoActive} /> */}
              <Brand brand={brand} />
              <Educational educationalProgramming={educationalProgramming} />
              <SingleTestimonial testimonial={testimonials[0]}/>
              <JoinForm/>

              {/* <Members memberSpotlight={memberSpotlight} /> */}
              {/* <Mission mission={mission} /> */}
              
              {/* <MembershipBanner /> */}
            </div>
          )}
          {activeTab === "brands" && (
            <div className="p-4 text-center mx-auto">
              {/* <Granting granting={granting} register={register} />
              <Educational educationalProgramming={educationalProgramming} /> */}
              <Mission mission={mission} />
              <br />
              {/* <SherLive sheHerLive={sheHerLive} /> */}
              {/* <Testimonials testimonials={testimonials} /> */}
              <SingleTestimonial testimonial={testimonials[1]}/>
              <div className="my-20 max-w-[1196px] mx-auto">
                <p className="text-[56px] max-w-[672px] mx-auto font-mono">{partnerTabData.header.title}</p>
                <p className="max-w-[802px] text-lg text-[#7E8492] mx-auto my-4">{partnerTabData.header.subtitle}</p>
              </div>
              {partnerTabData.programs.map((program,index)=>{
                const isReversed = index % 2 !== 0;
                
                return ( 
                  <div key={program.id} className={`flex max-w-[1196px] mx-auto items-center my-20 min-h-[500px] gap-[88px] ${isReversed && "flex-row-reverse"} justify-between`}>
                    <div className="font-mono text-left flex-1">
                      <span className="inline-block bg-[#FAB7D0] text-black py-2 px-3 text-base">{program.event}</span>
                      <p className="text-[40px]">{program.title}</p>
                      <p className="text-base text-[#7E8492]">{program.description}</p>
                    </div>
                    <div className="flex-1 min-h-[479px] bg-[#F6F6F6] rounded-3xl p-8">
                      <ImageUrl image={program.banner}/>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          <div className="text-center my-10">
            <Link href={"/join"}>
              <button className="my-10 text-lg text-white px-6 py-4 rounded-lg bg-[#1C1B22] font-mono">Join Si Her Co-Activator</button>
            </Link>
          </div>

          <div className="h-[410px] py-20 pr-[103px] relative overflow-hidden flex mb-[105px] bg-gradient-to-r from-[#FAB7D0] to-[#87B5F4] rounded-2xl">
             <div className="max-w-[440px] -left-20 absolute -top-16">
              <Image
                  src="/images/partner-footer-image.png"
                  alt="Background image mobile"
                  width={500}
                  height={500}
                  priority
                  className="w-full translate-x-36 scale-[1.2] sm:scale-[1.05] lg:scale-[1.2] translate-y-20 sm:translate-y-0 lg:translate-y-20 object-cover"
                />
             </div>
             <div className="ml-auto max-w-[500px]">
                <p className="text-[40px] uppercase font-mono leading-[56px] tracking-normal">Start your <b className="font-mono">creative</b> <b className="font-mono">journey</b> with si her</p>
                <Link href={"/join"}>
                  <button className="text-white bg-[#222222] py-[14px] rounded-md text-lg font-mono mt-20 px-[30px]">{"Let’s"} join us today!</button>
                </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
