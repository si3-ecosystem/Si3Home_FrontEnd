"use client";

import { useEffect, useState } from "react";
import { EventCard } from "@/components/atoms/card/event-card";
import { FixxBanner } from "@/components/organism/banner/fixx-banner";
import ContentProvider from "@/utils/ContentProvider";
import { FixIntelligenceCard } from "@/components/atoms/card/fix-intelligence-card";
import { ReplayCard } from "@/components/atoms/card/replay-card";
import { cn } from "@/lib/utils";

const categories = [
  "Upcoming Events",
  "Educational Replays",
  "Krypto Kollab (Coming Soon)",
  "Blog Posts",
];

interface CoActiveData {
  upcoming_events: any[];
  latest_posts: any[];
  educational_replays: any[];
  title?: string;
  description?: string;
}

export function Banner() {
  return (
    <div className="relative min-h-[400px] lg:min-h-[525px] bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 pt-24 lg:pt-32">
      <div className="py-12 md:py-20 px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wider">
            Si Her Co-Active.
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

export function CoActiveTemplate() {
  const [coActiveData, setCoActiveData] = useState<CoActiveData>({
    title: "",
    description: "",
    upcoming_events: [],
    latest_posts: [],
    educational_replays: [],
  });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      const data = await ContentProvider.getSheHerCoActive();
      setCoActiveData(data);
      return data;
    }

    getData();
  }, []);

  const upcoming_events = coActiveData?.upcoming_events || [];
  const latest_posts = coActiveData?.latest_posts || [];
  const educational_replays = coActiveData?.educational_replays || [];

  return (
    <div>
      <div className="min-h-screen bg-white flex flex-col gap-8 lg:gap-14">
        <FixxBanner data={coActiveData} />
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
              activeCategory === "Upcoming Events") && (
              <section
                className={cn(
                  "max-w-[1251.136px] mx-auto w-full px-4 py-8",
                  activeCategory === "Upcoming Events" && "py-10 lg:py-[80px]"
                )}
              >
                <div className="flex flex-col lg:flex-row justify-between max-lg:gap-4 lg:items-center mb-6 py-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#6B46C1] font-medium text-[32px] lg:text-[40px] lg:leading-[68px] uppercase font-clesmont">
                      UPCOMING EVENTS
                    </h2>
                    <p className="text-lg leading-8">
                      Presentations and workshops from leading organizations
                    </p>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-full border border-black hover:bg-[#3c1fef] text-base font-medium transition-colors ${" bg-black text-white"}`}
                  >
                    Explore All Events
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                  {upcoming_events
                    ?.slice(0, 3)
                    .map((session: any, index: number) => (
                      <EventCard key={index} {...session} />
                    ))}
                </div>
              </section>
            )}

            {(activeCategory === null || activeCategory === "Blog Posts") && (
              <section className=" bg-[url('/sheherfixxbg.svg')] bg-no-repeat bg-center bg-cover w-full h-full  py-10 lg:py-[80px]">
                <div className="flex flex-col lg:flex-row justify-between max-lg:gap-4 lg:items-center mb-6  max-w-[1251.136px] mx-auto w-full px-4  py-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#6B46C1] font-medium text-[32px] lg:text-[40px] lg:leading-[68px] uppercase font-clesmont">
                      Latest Posts
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10  max-w-[1251.136px] mx-auto w-full py-8 px-4">
                  {latest_posts
                    ?.slice(0, 3)
                    .map((event: any, index: number) => (
                      <FixIntelligenceCard key={index} {...event} />
                    ))}
                </div>
              </section>
            )}

            {(activeCategory === null ||
              activeCategory === "Educational Replays") && (
              <section
                className={cn(
                  "max-w-[1251.136px] mx-auto w-full px-4 pb-8 -mt-12 lg:pb-20",
                  activeCategory === "Educational Replays" &&
                    "py-10 lg:py-[80px]"
                )}
              >
                <div className="flex flex-col lg:flex-row justify-between max-lg:gap-4 lg:items-center mb-6 py-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#6B46C1] font-medium text-[32px] lg:text-[40px] lg:leading-[68px] uppercase font-clesmont">
                      Educational Replays
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                  {educational_replays
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
