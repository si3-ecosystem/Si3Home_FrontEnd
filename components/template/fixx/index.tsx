"use client";

import { useEffect, useState } from "react";
import { EventCard } from "@/components/atoms/card/event-card";
import { PostCard } from "@/components/atoms/card/post-card";
import { CoActiveMembershipBanner } from "@/components/organism/banner/co-active-membership";
import { FixxBanner } from "@/components/organism/banner/fixx-banner";
import ContentProvider from "@/utils/ContentProvider";
import { FixIntelligenceCard } from "@/components/atoms/card/fix-intelligence-card";
import { ReplayCard } from "@/components/atoms/card/replay-card";
import { cn } from "@/lib/utils";

const categories = [
  "Upcoming Sessions",
  "FiXX Intelligence",
  "Krypto Kollab (Coming Soon)",
  "Program REPLAYS",
];

const educationalReplays = [
  {
    title: "How to Build A Successful Team with elena",
    image: "/images/latestpost1.png",
    description:
      "Learn how to find and apply for grants that align with your mission and values.",
  },
  {
    title: "How to Build A Successful Team with elena",
    image: "/images/latestpost1.png",
    description:
      "Discover the keys to unlocking grant opportunities and securing funding.",
  },
  {
    title: "How to Build A Successful Team with elena",
    image: "/images/latestpost1.png",
    description:
      "Master the art of grant writing and increase your chances of success.",
  },
];

interface SheHerFixx {
  upcoming_sessions?: any[];
  fixx_intelligence?: any[];
  program_replays?: any[];
}

export function Banner() {
  return (
    <div className="relative min-h-[400px] lg:min-h-[525px] bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 pt-24 lg:pt-32">
      <div className="py-12 md:py-20 px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wider">
            Si Her CoLLABORATIVE
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Co-activating growth and funding opportunities for women and
            non-binary web3 leaders through personal brand development, public
            speaking, partnerships, and DeFi.
          </p>
        </div>
      </div>
    </div>
  );
}

export function FixxTemplate() {
  const [sheHerFixx, setSheHerFixx] = useState<SheHerFixx>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      const sheHerFixx = await ContentProvider.getSherHerFixx();
      setSheHerFixx(sheHerFixx);
      return sheHerFixx;
    }

    getData();
  }, []);

  const sessions = sheHerFixx?.upcoming_sessions || [];
  const fixx_intelligence = sheHerFixx?.fixx_intelligence || [];
  const program_replays = sheHerFixx?.program_replays || [];

  return (
    <div>
      <div className="min-h-screen bg-white flex flex-col gap-8 lg:gap-14">
        <FixxBanner data={sheHerFixx} />
        <section className="">
          {/* Category Selector */}
          <div className="flex  gap-4  items-center lg:justify-center overflow-x-auto  lg:max-w-[1440px] lg:mx-auto w-full px-4 py-8">
            <button
              className={`px-4 py-2 rounded-full border border-black  text-base font-medium transition-colors ${
                activeCategory === null
                  ? "bg-black text-white"
                  : " text-gray-700 bg-[#eee] hover:bg-black hover:text-white"
              }`}
              onClick={() => setActiveCategory(null)}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full border flex-shrink-0 whitespace-nowrap border-black text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-black text-white "
                    : " text-gray-700 bg-[#eee] hover:bg-black hover:text-white"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className=" flex flex-col gap-24 lg:gap-36">
            {/* Content Rendering */}
            {(activeCategory === null ||
              activeCategory === "Upcoming Sessions") && (
              <section
                className={cn(
                  "max-w-[1251.136px] mx-auto w-full px-4 py-8",
                  activeCategory === "Upcoming Sessions" && "py-10 lg:py-[80px]"
                )}
              >
                <div className="flex flex-col lg:flex-row justify-between max-lg:gap-4 lg:items-center mb-6 py-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#6B46C1] font-medium text-[32px] lg:text-[40px] lg:leading-[68px] uppercase font-clesmont">
                      UPCOMING Sessions
                    </h2>
                    <p className="text-lg leading-8">
                      Presentations and workshops from leading organizations
                    </p>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-full border border-black hover:bg-[#3c1fef] text-base font-medium transition-colors ${" bg-black text-white"}`}
                  >
                    Explore All Sessions
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                  {sessions
                    ?.slice(0, 3)
                    .map((session: any, index: number) => (
                      <EventCard key={index} {...session} />
                    ))}
                </div>
              </section>
            )}

            {(activeCategory === null ||
              activeCategory === "FiXX Intelligence") && (
              <section className=" bg-[url('/sheherfixxbg.svg')] bg-no-repeat bg-center bg-cover w-full h-full py-10 lg:py-[80px]">
                <div className="flex flex-col lg:flex-row justify-between max-lg:gap-4 lg:items-center mb-6  max-w-[1251.136px] mx-auto w-full px-4 py-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#6B46C1] font-medium text-[32px] lg:text-[40px] lg:leading-[68px] uppercase font-clesmont">
                      FiXX Intelligence
                    </h2>
                    <p className="text-lg leading-8">
                      Presentations and workshops from leading organizations
                    </p>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-full border border-black hover:bg-[#3c1fef] text-base font-medium transition-colors ${" bg-black text-white"}`}
                  >
                    Explore All Replays
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10  max-w-[1251.136px] mx-auto w-full px-4 py-8">
                  {fixx_intelligence
                    ?.slice(0, 3)
                    .map((event: any, index: number) => (
                      <FixIntelligenceCard key={index} {...event} />
                    ))}
                </div>
              </section>
            )}

            {(activeCategory === null ||
              activeCategory === "Program REPLAYS") && (
              <section
                className={cn(
                  "max-w-[1251.136px] mx-auto w-full px-4 pb-8 -mt-12 lg:pb-20",
                  activeCategory === "Program REPLAYS" && "py-10 lg:py-[80px]"
                )}
              >
                <div className="flex flex-col lg:flex-row justify-between max-lg:gap-4 lg:items-center mb-6 py-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#6B46C1] font-medium text-[32px] lg:text-[40px] lg:leading-[68px] uppercase font-clesmont">
                      Program REPLAYS
                    </h2>
                    <p className="text-lg leading-8">
                      Presentations and workshops from leading organizations
                    </p>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-full border border-black hover:bg-[#3c1fef] text-base font-medium transition-colors ${" bg-black text-white"}`}
                  >
                    Explore All Posts
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                  {program_replays
                    ?.slice(0, 3)
                    .map((post: any, index: number) => (
                      <ReplayCard key={index} {...post} />
                    ))}
                </div>
              </section>
            )}
          </div>

          {activeCategory === "Krypto Kollab (Coming Soon)" && (
            <section className="mb-12 text-center max-w-[1440px] mx-auto w-full px-4 py-8">
              <h2 className="text-[#6B46C1] text-xl font-medium mb-4">
                Krypto Kollab is Coming Soon!
              </h2>
              <p className="text-gray-700">
                Stay tuned for updates on our latest collaboration efforts in
                the Web3 space.
              </p>
            </section>
          )}
          {/* <CoActiveMembershipBanner /> */}
        </section>
      </div>
    </div>
  );
}
