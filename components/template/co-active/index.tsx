"use client";

import { useState } from "react";
import { EventCard } from "@/components/atoms/card/event-card";
import { PostCard } from "@/components/atoms/card/post-card";
import { CoActiveMembershipBanner } from "@/components/organism/banner/co-active-membership";

const categories = [
  "Upcoming Events",
  "Educational Replays",
  "Krypto Kollab (Coming Soon)",
  "Blog Post",
];

const upcomingEvents = [
  {
    title: "INTRODUCING OCTAVIA'S BRAINCHILD",
    image: "/images/upcoming1.png",
  },
  {
    title: "HOW TO BUILD A SUCCESSFUL TEAM WITH SI<3>",
    image: "/images/upcoming1.png",
  },
  {
    title: "HOW TO BUILD A SUCCESSFUL TEAM WITH SI<3>",
    image: "/images/upcoming1.png",
  },
];

const latestPosts = [
  {
    title: "GRANTS: FINDING WORTH",
    image: "/images/latestpost1.png",
    description:
      "Learn how to find and apply for grants that align with your mission and values.",
  },
  {
    title: "GRANTS: GRANTING ACCESS",
    image: "/images/latestpost1.png",
    description:
      "Discover the keys to unlocking grant opportunities and securing funding.",
  },
  {
    title: "GRANTS: FINDING WORTH",
    image: "/images/latestpost1.png",
    description:
      "Master the art of grant writing and increase your chances of success.",
  },
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

export function CoActiveTemplate() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col gap-8 lg:gap-14">
        <Banner />
        <section className="max-w-[1440px] mx-auto w-full px-4 py-8">
          {/* Category Selector */}
          <div className="flex flex-wrap gap-4 mb-12 items-center justify-center w-full">
            <button
              className={`px-4 py-2 rounded-lg border border-black  text-base font-medium transition-colors ${
                activeCategory === null
                  ? "bg-black text-white"
                  : " text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveCategory(null)}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg border border-black text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : " text-gray-700 hover:bg-gray-300"
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
              <section className="mb-12">
                <div className="flex flex-col lg:flex-row justify-between max-lg:gap-4 lg:items-center mb-6">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#6B46C1] font-medium text-[32px] lg:text-[40px] lg:leading-[68px] uppercase">
                      UPCOMING EVENTS
                    </h2>
                    <p className="text-lg leading-8">
                      Presentations and workshops from leading organizations
                    </p>
                  </div>
                  <button className="text-xl leading-6 hover:font-medium flex items-center gap-3">
                    Explore All Events{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M19 1C19 0.447716 18.5523 8.51881e-07 18 8.51881e-07H9C8.44771 8.51881e-07 8 0.447716 8 1C8 1.55229 8.44771 2 9 2H17V10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10V1ZM1.70711 18.7071L18.7071 1.70711L17.2929 0.292894L0.292893 17.2929L1.70711 18.7071Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.title} {...event} />
                  ))}
                </div>
              </section>
            )}

            {(activeCategory === null || activeCategory === "Blog Post") && (
              <section className="mb-12">
                <div className="flex flex-col lg:flex-row justify-between max-lg:gap-4 lg:items-center mb-6">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#6B46C1] font-medium text-[32px] lg:text-[40px] lg:leading-[68px] uppercase">
                      Latest Posts
                    </h2>
                    <p className="text-lg leading-8">
                      Presentations and workshops from leading organizations
                    </p>
                  </div>
                  <button className="text-xl leading-6 hover:font-medium flex items-center gap-3">
                    Explore All Posts{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M19 1C19 0.447716 18.5523 8.51881e-07 18 8.51881e-07H9C8.44771 8.51881e-07 8 0.447716 8 1C8 1.55229 8.44771 2 9 2H17V10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10V1ZM1.70711 18.7071L18.7071 1.70711L17.2929 0.292894L0.292893 17.2929L1.70711 18.7071Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                  {latestPosts.map((post) => (
                    <PostCard key={post.title} {...post}/>
                  ))}
                </div>
              </section>
            )}
            {(activeCategory === null ||
              activeCategory === "Educational Replays") && (
              <section className="mb-12">
                <div className="flex flex-col lg:flex-row justify-between max-lg:gap-4 lg:items-center mb-6">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#6B46C1] font-medium text-[32px] lg:text-[40px] lg:leading-[68px] uppercase">
                      EDUCATIONAL REPLAYS
                    </h2>
                    <p className="text-lg leading-8">
                      Presentations and workshops from leading organizations
                    </p>
                  </div>
                  <button className="text-xl leading-6 hover:font-medium flex items-center gap-3">
                    Explore All Replays
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M19 1C19 0.447716 18.5523 8.51881e-07 18 8.51881e-07H9C8.44771 8.51881e-07 8 0.447716 8 1C8 1.55229 8.44771 2 9 2H17V10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10V1ZM1.70711 18.7071L18.7071 1.70711L17.2929 0.292894L0.292893 17.2929L1.70711 18.7071Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                  {educationalReplays.map((event) => (
                    <PostCard
                      key={event.title}
                      {...event}
                      // type={"educational"}
                      // description="Watch the replay of this educational session."
                    />
                  ))}
                </div>
              </section>
            )}
          </div>

          {activeCategory === "Krypto Kollab (Coming Soon)" && (
            <section className="mb-12 text-center">
              <h2 className="text-[#6B46C1] text-xl font-medium mb-4">
                Krypto Kollab is Coming Soon!
              </h2>
              <p className="text-gray-700">
                Stay tuned for updates on our latest collaboration efforts in
                the Web3 space.
              </p>
            </section>
          )}
          <CoActiveMembershipBanner />
        </section>
      </div>
    </div>
  );
}
