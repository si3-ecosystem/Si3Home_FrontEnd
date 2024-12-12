import { useEffect, useState } from "react";
import sanityClient from "@/lib/sanityClient";

export function ExplorerBanner() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "explorerBanner"][0]{
          title,
          subtitle,
          gradientColors,
          minHeight,
          paddingTop
        }`
      )
      .then((data) => {
        console.log(data); // Debug: Check data in console
        setBannerData(data);
      })
      .catch(console.error);
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  const { title, subtitle, gradientColors, minHeight, paddingTop } = bannerData;

  return (
    <div className="relative min-h-[400px] lg:min-h-[525px] bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 pt-24 lg:pt-32">
      <div className="py-12 md:py-20 px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wider">
            {title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
