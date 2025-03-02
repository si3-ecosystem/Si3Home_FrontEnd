import Image from "next/image";
import urlFor from "@/utils/urlFor";

interface Post {
  title: string;
  image: string;
  description: string;
  badge: string;
  position: string;
  host: string;
  partners: any[];
}

export function ReplayCard({
  title,
  position,
  image,
  description,
  host,
  partners,
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
      </div>
      {/* Post Content */}
      <div className="mt-7">
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-7">
              <h3 className="font-semibold text-2xl uppercase">
                {title || "Untitled Post"}
              </h3>
              <div className="flex flex-col gap-1.5">
                <p className="text-sm font-medium leading-5">
                  {host || "No Host available"}
                </p>
                <p className="text-sm font-medium leading-5">
                  {position || "No position available"}
                </p>
              </div>
            </div>
            <button className=" w-full mt-1.5 relative bg-white text-black py-3 hover:bg-black hover:text-white rounded-full border border-black text-sm lg:text-xl font-medium transition-colors">
              <span className="relative z-10 flex items-center justify-center gap-2.5">
                Watch Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
