"use client";

import { Button } from "@/components/atoms/button/Button";
import { PostCard } from "@/components/atoms/card/post-card";
import { VideoCard } from "@/components/atoms/card/video-card";
import { MembershipBanner } from "@/components/organism/banner/membership";
import { DropdownButton } from "@/components/organism/dropdown-button";
import { categories, videos, web3SubCategories } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Banner() {
  return (
    <div className="relative min-h-[400px] lg:min-h-[525px] bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 pt-24 lg:pt-32">
      <div className="py-12 md:py-20 px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wider">
            SI HER EXPLORERS
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white max-w-2xl mx-auto leading-relaxed">
            EXPLORE OUR WEB3 EDUCATION AND SI HER GROWTH NETWORK FOR WOMEN &
            NON-BINARY EARLY WEB3 EXPLORERS
          </p>
        </div>
      </div>
    </div>
  );
}

export function ExplorerPageTemplate() {
  const [activeCategory, setActiveCategory] = useState("All Videos");
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );

  const filteredVideos = videos.filter((video) => {
    if (activeCategory === "Web3 Education" && activeSubCategory) {
      return video.subcategory === activeSubCategory;
    }
    return video.category.includes(activeCategory);
  });
  return (
    <div className="">
      <div className="min-h-screen flex flex-col gap-16 relative overflow-hidden ">
        <Banner />
        <div className="max-w-[1440px]  mx-auto px-5 lg:px-16 pb-16 flex flex-col items-center justify-center">
          <Image
            src="/icons/gradientbg.svg"
            alt="bg"
            fill
            objectPosition="top right"
            className="mt-80 z-10"
          />
          <div className="flex flex-wrap gap-2 mb-8 items-center justify-center z-20">
            {categories.map((category) => {
              if (category === "Web3 Education") {
                return (
                  <DropdownButton
                    key={category}
                    label={category}
                    options={web3SubCategories}
                    active={activeCategory === category}
                    selectedOption={
                      activeCategory === category ? activeSubCategory : null
                    }
                    onSelect={(subcategory) => {
                      setActiveCategory(category);
                      setActiveSubCategory(subcategory);
                    }}
                  />
                );
              }
              return (
                <Button
                  key={category}
                  active={activeCategory === category}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveSubCategory(null);
                  }}
                >
                  {category}
                </Button>
              );
            })}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 z-30">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          <div className="mt-[50px]">
            <PostCard />
          </div>
          {/* Pagination */}
          <div className="my-20 flex justify-center gap-6 lg:gap-10">
            <button className="py-2 px-4 rounded flex items-center justify-center border border-[#E5007A] text-[#E5007A]">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 lg:gap-5">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`py-2 px-4 rounded-md flex items-center justify-center text-base
          ${
            page === 1
              ? "bg-black text-white"
              : "border border-[#FAB7D0]  hover:bg-gray-50 text-[#A5A8BD]"
          }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="py-2 px-4 rounded flex items-center justify-center border border-[#E5007A] text-[#E5007A]">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <MembershipBanner />
        </div>
      </div>
    </div>
  );
}
