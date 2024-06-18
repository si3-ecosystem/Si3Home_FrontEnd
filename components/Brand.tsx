"use client";
import ImageUrl from "@/utils/imageUrl";
import urlFor from "@/utils/urlFor";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Brand({ brand }: any) {
  return (
    <motion.div
      whileInView={{
        y: [100, 0],
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="px-5 md:px-16 py-20 md:py-28 flex flex-col md:flex-row justify-center gap-6 md:gap-12 max-w-screen-xl mx-auto"
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
      <Image
        src={"/videoImage.png"}
        width={372}
        height={578}
        alt="videoImage"
        className="w-[372px] h-[578px] rounded-2xl"
      />
    </motion.div>
  );
}
