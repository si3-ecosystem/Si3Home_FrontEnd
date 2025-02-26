// @ts-nocheck

"use client";

import { Button } from "@/components/atoms/button/Button";
import { PostCard } from "@/components/atoms/card/post-card";
import { VideoCard } from "@/components/atoms/card/video-card";
import { ExplorerBanner } from "@/components/explorer/ExplorerBanner";
import { MembershipBanner } from "@/components/organism/banner/membership";
import { DropdownButton } from "@/components/organism/dropdown-button";
import { categories, web3SubCategories } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContentProvider from "@/utils/ContentProvider";
import Loading from "@/app/loading";
import { EventCard } from "@/components/atoms/card/event-card";

export function Banner() {
  return (
    <div>
      <ExplorerBanner />
    </div>
  );
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  views?: number;
  timestamp?: string;
  category?: string[];
  subcategory?: string;
  [key: string]: any;
}

export interface PostItem {
  id: string;
  title: string;
  thumbnail?: string;
  [key: string]: any;
}

export function ExplorerPageTemplate() {
  const [activeCategory, setActiveCategory] = useState("All Videos");
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<{
    videos: VideoItem[];
    posts: PostItem[];
  }>({
    videos: [],
    posts: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let videos: VideoItem[] = [];
        let posts: PostItem[] = [];

        // Fetch data based on the active category
        if (activeCategory === "All Videos") {
          // Fetch all videos using the new method
          videos = await ContentProvider.getAllVideos();
        } else if (activeCategory === "All Posts") {
          // Fetch all posts using the new method
          posts = await ContentProvider.getAllPosts();
        } else if (activeCategory === "Web3 Education") {
          // Fetch Web3 Education videos filtered by subcategory
          videos = await ContentProvider.getWeb3EducationContent(
            activeSubCategory || undefined
          );
        } else if (activeCategory === "Grant Funding") {
          // Fetch Grant Funding related content
          videos = await ContentProvider.getGrantFundingContent();
        } else if (activeCategory === "SI Her Growth Network") {
          const sheHerCoActiveData = (videos =
            await ContentProvider.getSheHerGrowthNetworkContent());
        }

        setContent({ videos, posts });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeCategory, activeSubCategory]);

  // Calculate pagination
  const totalItems =
    activeCategory === "All Posts"
      ? content.posts.length
      : content.videos.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current items
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (activeCategory === "All Posts") {
      return content.posts.slice(startIndex, endIndex);
    } else {
      return content.videos.slice(startIndex, endIndex);
    }
  };

  const currentItems = getCurrentItems();

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when changing page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log("currentItems", currentItems);

  return (
    <div className="">
      <div className="min-h-screen flex flex-col gap-16 relative overflow-hidden ">
        <ExplorerBanner />
        <div className="max-w-[1440px] mx-auto px-5 lg:px-16 pb-16 flex flex-col items-center justify-center">
          <div className="flex flex-wrap gap-2 mb-8 items-center justify-center z-30">
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
                      setCurrentPage(1); // Reset to first page on category change
                    }}
                  />
                );
              }
              return (
                <Button
                  key={category}
                  className="!rounded-full hover:text-white hover:!bg-black transition-all duration-300 ease-in-out"
                  active={activeCategory === category}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveSubCategory(null);
                    setCurrentPage(1); // Reset to first page on category change
                  }}
                >
                  {category}
                </Button>
              );
            })}
          </div>

          {loading ? (
            <div className="py-20">
              <Loading />
            </div>
          ) : (
            <>
              {/* Content Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 z-10">
                {activeCategory === "All Posts"
                  ? currentItems?.map((post: PostItem, index: number) => (
                      <EventCard key={index} {...post} />
                    ))
                  : currentItems.map((data: VideoItem, index: number) => (
                      <VideoCard key={index} data={data} />
                    ))}
              </div>

              {/* Show message if no content */}
              {currentItems.length === 0 && !loading && (
                <div className="py-20 text-center">
                  <p className="text-xl text-gray-500">
                    No content found for this category.
                  </p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="my-20 flex justify-center gap-6 lg:gap-10">
                  <button
                    className={`py-2 px-4 rounded flex items-center justify-center border border-[#E5007A] text-[#E5007A] ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() =>
                      currentPage > 1 && handlePageChange(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-3 lg:gap-5">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      // Show at most 5 page numbers
                      let pageNum;
                      if (totalPages <= 5) {
                        // If 5 or fewer pages, show all
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        // If current page is 1, 2, or 3, show pages 1-5
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        // If current page is among the last 3, show the last 5 pages
                        pageNum = totalPages - 4 + i;
                      } else {
                        // Otherwise show current page and 2 pages on each side
                        pageNum = currentPage - 2 + i;
                      }

                      return (
                        <button
                          key={pageNum}
                          className={`py-2 px-4 rounded-md flex items-center justify-center text-base
                            ${
                              pageNum === currentPage
                                ? "bg-black text-white"
                                : "border border-[#FAB7D0] hover:bg-gray-50 text-[#A5A8BD]"
                            }`}
                          onClick={() => handlePageChange(pageNum)}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    className={`py-2 px-4 rounded flex items-center justify-center border border-[#E5007A] text-[#E5007A] ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() =>
                      currentPage < totalPages &&
                      handlePageChange(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        <MembershipBanner />
      </div>
    </div>
  );
}
