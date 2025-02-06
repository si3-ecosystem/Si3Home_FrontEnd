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
import ChatGPTIcon from "@/app/icons/chatgpt";
import { useSearchParams } from "next/navigation";

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

interface TabButtonProps{
  handleClick:()=>void;
  label:string,
  isActive?:boolean,
}

function TabButton(props:TabButtonProps){
  if(props.isActive){
    return (
      <div className="flex-1 cursor-pointer border-2 rounded-full min-h-16 flex items-center justify-center p-2 border-[#B668E4]">
        <button className="w-full bg-black min-h-14 rounded-full text-white">{props.label}</button>
      </div>
    )
  }
  return (
    <div
    onClick={props.handleClick}
    className={`flex-1 text-center border-2 border-[#B668E4] flex flex-col sm:flex-row items-center gap-x-2 py-2 min-h-14 rounded-lg lg:rounded-full px-6 text-[10px] md:text-base transition`}
  >
    {/* <ChatGPTIcon/> */}
    <button className="w-full">{props.label}</button>
  </div>
  )
}

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


  const params = useSearchParams()

  useEffect(()=>{
    const tab = params.get("tab")
    if(tab) {
      setActiveTab(tab);
    }
  },[params])


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
    <>
    <div id="tab-content"></div>
    <div
      ref={ref}
      id="siherlive"
      className="flex items-center justify-center flex-col md:px-0 py-4 lg:py-16 md:!py-4 bg-no-repeat"
    >
      <div className="w-full mx-auto mt-4 sm:mt-10">
        {/* Tab Buttons */}
        <div className="p-4">
        <div className="flex w-full gap-4 max-w-[750px]   mx-auto justify-start rounded-lg md:rounded-full p-2">
          <TabButton
            isActive={activeTab === "explorers"}
            label="I am Exploring Web3"
            handleClick={()=>setActiveTab("explorers")}
          />
          <TabButton
            isActive={activeTab === "leaders"}
            label="I am Leading Web3"
            handleClick={()=>setActiveTab("leaders")}
          />
          <TabButton
            isActive={activeTab === "brands"}
            label="I am Building Web3"
            handleClick={()=>setActiveTab("brands")}
          />
        </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6" id="accountTabContent">
          {activeTab === "explorers" && (
            <div className="mx-auto">
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
            <div className="">
              <SherCoActive sherCoActive={sherCoActive} isLeaderTab />
              <Brand brand={brand} />
              <Educational educationalProgramming={educationalProgramming} />
              {/* <SingleTestimonial testimonial={testimonials[0]}/> */}
              {/* <p className="text-[#4428F2] md:font-medium text-2xl md:text-[40px] leading-[68px] mb-6">TESTIMONIALS</p> */}


              <Testimonials testimonials={testimonials}/>

              {/* <Members memberSpotlight={memberSpotlight} /> */}
              {/* <Mission mission={mission} /> */}
              
              {/* <MembershipBanner /> */}
              <JoinTabFooter footerData={joinLeadersTab}/>
            </div>
          )}
          {activeTab === "brands" && (
            <div className="text-center mx-auto">
              {/* <Granting granting={granting} register={register} />
              <Educational educationalProgramming={educationalProgramming} /> */}
              {/* <SingleTestimonial testimonial={testimonials[1]}/> */}
             <section className="bg-gradient-to-r px-4 py-12 lg:py-[170px] from-[rgb(255,237,207,0.4)] from-50% to-[rgb(252,198,233)]">
             <div className="max-w-[1196px] mx-auto">
                <p className="text-3xl md:leading-[56px] uppercase md:text-[44px] max-w-[672px] mx-auto font-clesmont font-black">{partnerTabData.header.title}</p>
                <p className="max-w-[802px] text-lg font-mono mx-auto my-4">{partnerTabData.header.subtitle}</p>
              </div>
              {partnerTabData.programs.map((program,index)=>{
                
                return ( 
                  <div key={program.id} className={`flex  max-w-[1196px] mx-auto p-4 lg:p-8 rounded-lg lg:rounded-[30px] my-4 lg:my-10 bg-white min-h-[500px] gap-10 lg:gap-[88px] flex-col border border-gray-400 lg:flex-row justify-between`}>
                    <div className="font-mono text-left flex-[2] max-w-[528px]">
                      <span className="inline-block text-xs sm:text-base bg-[#FAB7D0] rounded-full text-black py-1 px-3">{program.event}</span>
                      <p className="text-2xl uppercase my-6 sm:text-4xl font-black font-clesmont">{program.title}</p>
                      <p className="text-sm sm:text-base">{program.description}</p>
                    </div>
                    <div className="flex-1 relative justify-end text-right">
                      <ImageUrl image={program.banner} className={"max-h-[400px] ml-auto"}/>
                    </div>
                  </div>
                )
              })}
             </section>
               <Mission mission={mission} showValues={false} />
              <br />
              {/* <SherLive sheHerLive={sheHerLive} /> */}
              <JoinTabFooter footerData={joinBuildersTab}/>
            </div>
          )}

          
        </div>
      </div>
    </div>
    </>
  );
}
