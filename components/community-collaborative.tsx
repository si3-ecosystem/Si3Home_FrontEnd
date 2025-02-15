"use client";
import Image from "next/image";
import Button from "./shared/Button";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageUrl from "@/utils/imageUrl";
import moment from "moment";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import urlFor from "@/utils/urlFor";
import { ChevronLeftIcon, ChevronRightIcon } from "@/app/icons/chevron";
import { LocateIcon, MapPin } from "lucide-react";
import Link from "next/link";

export default function CommunityCollaboration({ community }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const swipeRef = useRef<any>();
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.5, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  console.log("community", community);

  return (
    <motion.div ref={ref} className="py-14 px-4 lg:px-8 md:py-28 ">
      <div className="max-w-7xl mx-auto">
        <header className="">
          <h1 className="text-2xl font-clesmont md:text-[40px] font-1000 md:leading-10 mt-6 ">
            DISCOVER OUR COMMUNITY COLLABORATIVE
          </h1>
          <p className="font-mono my-4 md:my-6 w-full text-sm lg:text-lg lg:leading-7">
            Explore our growing collaborative of women & non-binary led Web3
            communities.
          </p>
          <div className=" w-full flex items-center justify-end gap-2 lg:gap-6 mt-4 md:mt-0  mb-5">
            <button
              className="h-12 w-12 rounded-full border flex items-center justify-center border-gray-400"
              onClick={() => {
                swipeRef.current.slidePrev();
              }}
            >
              <ChevronLeftIcon />
            </button>

            <button
              className="h-12 w-12 rounded-full border flex items-center justify-center border-gray-400"
              onClick={() => {
                swipeRef.current.slideNext();
              }}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </header>

        <div className="w-full lg:px-0 lg:ml-auto md:flex overflow-hidden   ">
          <Swiper
            onSwiper={(swiper) => {
              swipeRef.current = swiper;
            }}
            modules={[Pagination, Autoplay]}
            // autoplay={true}
            // scrollbar={true}
            spaceBetween={20}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {community?.length > 0 &&
              community.map((item: any, key: number) => (
                <SwiperSlide
                  key={key}
                  className=" border p-3 sm:p-6 rounded-[30px] border-gray-400 group flex flex-col justify-between h-full "
                >
                  <div className=" overflow-hidden w-full h-fit flex items-start gap-4">
                    <div className="w-[75px]  h-[75px] flex items-center  justify-center">
                      <ImageUrl
                        image={item.communityLogo}
                        className={
                          "w-full h-full object-cover origin-center  rounded-lg "
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-lg lg:text-2xl truncate">
                        {item.communityName}
                      </p>
                      <span className="text-sm lg:text-base bg-[#EEEEEE] px-5 rounded-full w-fit">
                        Public
                      </span>
                      <div className="flex items-center gap-1 text-[#404040] max-lg:text-sm">
                        <MapPin className="max-sm:w-4" />{" "}
                        {item.communityLocation}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mt-6 h-full w-full flex flex-col justify-between ">
                    <div className="flex flex-col gap-3">
                      <p className="text-[#454545] text-base leading-[140%] min-h-[174px] max-h-[174px] overflow-hidden ">
                        {item?.communityDescription}
                      </p>

                      <div className="flex flex-col justify-between h-full">
                        <div className="w-full flex flex-col gap-4 min-h-[100px]">
                          {item?.xHandle && (
                            <div className="flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                className="w-5 h-5"
                              >
                                <g clip-path="url(#clip0_1_180917)">
                                  <path
                                    d="M10.2266 0.09375C4.70391 0.09375 0.226562 4.57109 0.226562 10.0938C0.226562 15.6164 4.70391 20.0938 10.2266 20.0938C15.7492 20.0938 20.2266 15.6164 20.2266 10.0938C20.2266 4.57109 15.7492 0.09375 10.2266 0.09375Z"
                                    fill="black"
                                  />
                                  <path
                                    d="M11.3202 9.18711L15.6011 4.21094H14.5867L10.8696 8.53169L7.90075 4.21094H4.47656L8.966 10.7447L4.47656 15.9629H5.49105L9.4164 11.4001L12.5517 15.9629H15.9759L11.32 9.18711H11.3202ZM5.85658 4.97464H7.41477L14.5871 15.234H13.0289L5.85658 4.97464Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_180917">
                                    <rect
                                      width="20"
                                      height="20"
                                      fill="white"
                                      transform="translate(0.226562 0.09375)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <Link href={item.xHandle} target="_blank">
                                {item.xHandle}
                              </Link>
                            </div>
                          )}

                          {item?.communityWebsite && (
                            <div className="flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                className="w-5 h-5"
                              >
                                <g clip-path="url(#clip0_1_180923)">
                                  <path
                                    d="M10.2266 0.09375C6.00215 0.09375 0.226562 3.28666 0.226562 10.0938C0.226562 16.7276 5.78168 20.0938 10.2266 20.0938C17.8525 20.0938 20.2266 13.4126 20.2266 10.0938C20.2266 5.19611 16.4785 0.09375 10.2266 0.09375ZM7.90767 1.03469C6.86436 1.92446 5.99822 3.3969 5.43916 5.22367C4.71475 4.79454 4.0494 4.26304 3.45885 3.64493C4.67932 2.3654 6.22263 1.46777 7.90767 1.03469ZM3.02971 4.12525C3.69113 4.81422 4.4431 5.40084 5.262 5.8654C4.95491 7.05832 4.77381 8.38115 4.75018 9.77092H0.880106C0.950972 7.69611 1.70688 5.7158 3.02971 4.12525ZM3.02971 16.0623C1.70294 14.4717 0.950972 12.4914 0.880106 10.4166H4.75018C4.77381 11.8103 4.95491 13.1292 5.262 14.3221C4.44703 14.7906 3.69507 15.3733 3.02971 16.0623ZM3.45885 16.5465C4.0494 15.9284 4.71475 15.3969 5.43916 14.9678C5.99822 16.7906 6.86436 18.267 7.90767 19.1567C6.22263 18.7197 4.67932 17.8221 3.45885 16.5465ZM9.90373 19.4245C8.22656 19.2119 6.78168 17.3378 6.00215 14.6528C7.20688 14.0426 8.53759 13.7 9.90373 13.6489V19.4245ZM9.90373 13.0071C8.47853 13.0544 7.0927 13.4048 5.8368 14.0189C5.57302 12.9166 5.41554 11.7 5.39192 10.4166H9.90373V13.0071ZM9.90373 9.77092H5.39192C5.41554 8.48745 5.57302 7.27092 5.8368 6.16855C7.09664 6.78273 8.48247 7.13312 9.90373 7.18036V9.77092ZM9.90373 6.53863C8.53365 6.49139 7.20688 6.14493 6.00215 5.53469C6.78168 2.84572 8.22656 0.97564 9.90373 0.763041V6.53863ZM17.4234 4.12525C18.7462 5.7158 19.5022 7.69611 19.573 9.77092H15.7069C15.6833 8.37721 15.5022 7.05832 15.1951 5.8654C16.01 5.3969 16.762 4.81422 17.4234 4.12525ZM16.9943 3.64099C16.4037 4.2591 15.7384 4.7906 15.014 5.21973C14.4549 3.3969 13.5888 1.92446 12.5455 1.03076C14.2305 1.46777 15.7738 2.3654 16.9943 3.64099ZM10.5494 0.763041C12.2266 0.97564 13.6714 2.84966 14.451 5.53469C13.2462 6.14493 11.9195 6.48745 10.5494 6.53863V0.763041ZM10.5494 7.18036C11.9746 7.13312 13.3604 6.78273 14.6163 6.16855C14.8801 7.27092 15.0376 8.48745 15.0612 9.77092H10.5494V7.18036ZM10.5494 10.4166H15.0612C15.0376 11.7 14.8801 12.9166 14.6163 14.0189C13.3604 13.4008 11.9746 13.0504 10.5494 13.0071V10.4166ZM10.5494 19.4245V13.6489C11.9195 13.6961 13.2462 14.0426 14.451 14.6528C13.6714 17.3418 12.2266 19.2119 10.5494 19.4245ZM12.5455 19.1528C13.5888 18.263 14.4549 16.7906 15.014 14.9638C15.7384 15.393 16.4037 15.9245 16.9943 16.5426C15.7738 17.8221 14.2305 18.7197 12.5455 19.1528ZM17.4234 16.0623C16.762 15.3733 16.01 14.7906 15.1951 14.3221C15.5022 13.1292 15.6833 11.8063 15.7069 10.4166H19.573C19.5022 12.4914 18.7462 14.4717 17.4234 16.0623Z"
                                    fill="black"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_180923">
                                    <rect
                                      width="20"
                                      height="20"
                                      fill="white"
                                      transform="translate(0.226562 0.09375)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <Link
                                href={item.communityWebsite}
                                target="_blank"
                              >
                                {item.communityWebsite}
                              </Link>
                            </div>
                          )}

                          {item?.warpcastHandle && (
                            <div className="flex items-center gap-2">
                              <Image
                                src={"/warpcastHandle.svg"}
                                alt="wrapcast"
                                width={60}
                                height={60}
                                className="w-5 h-5"
                              />
                              <Link href={item.warpcastHandle} target="_blank">
                                {item.warpcastHandle}
                              </Link>
                            </div>
                          )}
                        </div>
                        <Link
                          href={item?.discover || "#"}
                          className="w-full mt-16 py-3.5 px-6 hover:bg-[#e9e3ff] rounded-full border border-black hover:border-[#B668E4] "
                        >
                          Discover
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
}
