"use client";
import ImageUrl from "@/utils/imageUrl";
import urlFor from "@/utils/urlFor";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Brand({ brand }: any) {
  // Generate video URL manually
  const videoUrl = brand?.video?.asset?._ref
    ? `https://cdn.sanity.io/files/${
        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
      }/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${brand.video.asset._ref
        .replace("file-", "")
        .replace("-mp4", ".mp4")}`
    : null;
  console.log("videoUrl", videoUrl);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
  
    const handleScroll = () => {
      const { top, bottom } = videoElement.getBoundingClientRect();
      const windowCenter = window.innerHeight / 2;
      const videoCenter = (top + bottom) / 2;
    
      // Calculate visibility based on the video being in the center of the viewport
      const isVisible = Math.abs(videoCenter - windowCenter) < videoElement.clientHeight / 2;
    
      if (isVisible) {
        videoElement.play().catch((error) => {
          // Auto-play was prevented
          console.error("Auto-play was prevented: ", error);
        });
      } else {
        videoElement.pause();
      }
    };
    
  
    // Initial check when component mounts
    handleScroll();
  
    // Event listener for scroll or resize
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
  
    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="px-5 md:px-16 py-20 md:py-28 flex flex-col lg:flex-row justify-center gap-6 md:gap-12 max-w-screen-xl mx-auto"
    >
      <div className="">
        <div className="space-y-5 mb-6 md:mb-16">
          <h1 className="text-2xl md:text-4xl text-[#44442288]">
            Activate Your <span className="text-primary">Web3 Brand </span>
          </h1>

          <p className="font-mono text-[#999999] text-xl">
            {brand.description}
          </p>
        </div>

        {brand?.gallery?.length > 0 &&
          brand.gallery.map((item: any, index: number) => (
            <div key={index} className="mt-4 group">
              <div className="text-[#999999] border group-hover:scale-[1.02] transition-all cursor-pointer duration-300 border-[#999999] py-2.5 px-[18px] flex items-center justify-between rounded-lg">
                <h2 className="md:text-2xl">{item.galleryTitle}</h2>

                <div className="flex items-center gap-4">
                  {item?.images?.map((image: any, key: number) => (
                    <div key={key}>
                      {image?.asset && (
                        <Image
                          src={urlFor(image.asset).url()}
                          width={56}
                          height={56}
                          alt="up_icon"
                          decoding="async"
                          loading="lazy"
                          className="h-full w-full group-hover:scale-[1.03] transition-all duration-300"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="relative w-full lg:max-w-[372px] h-full rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0">
        {videoUrl ? (
          <div className="flex-shrink-0 w-full h-full">
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              loop
              playsInline
              className="w-full h-full max-h-[678px] xl:h-full object-cover object-center"
            />
          </div>
        ) : (
          <Image
            src={"/videoImage.png"}
            width={372}
            height={578}
            alt="videoImage"
            className="w-[372px] h-[578px] rounded-2xl"
          />
        )}
      </div>
    </motion.div>
  );
}
