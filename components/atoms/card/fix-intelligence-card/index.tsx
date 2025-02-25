import Image from "next/image";
import urlFor from "@/utils/urlFor";

interface Post {
  title: string;
  image: string;
  description: string;
  badge: string;
}

export function FixIntelligenceCard({
  title,
  image,
  description,
  badge,
}: Post) {
  return (
    <div className="group relative bg-white rounded-xl px-3 pt-2 pb-4 shadow-sm hover:shadow-md transition-shadow border-2 border-black border-opacity-30">
      {/* Post Image */}
      <div className="relative h-[208px]">
        <Image
          src={urlFor(image).url() || "/default-image.jpg"}
          alt={title || "No title available"}
          fill
          className="object-cover rounded-xl"
        />
        <div className="bg-white p-1.5 rounded-md text-xs absolute top-0 left-0 m-3">
          {badge}
        </div>
      </div>
      {/* Post Content */}
      <div className="mt-7">
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-7">
              <h3 className="font-semibold text-2xl uppercase">
                {title || "Untitled Post"}
              </h3>
              <p className="text-sm font-medium leading-5">
                {description || "No description available"}
              </p>
            </div>
            <button className=" w-full mt-1.5 relative bg-white text-black py-3 rounded-full border border-black text-sm lg:text-xl font-medium hover:bg-black hover:text-white transition-colors">
              <span className="relative z-10 flex items-center justify-center gap-2.5">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
