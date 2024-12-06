import Image from "next/image";
import { Button } from "../../button/Button";

interface PostCardProps {
  title: string;
  image: string;
  description: string;
  type?: "educational" | "post";
}

export function PostCard({ title, image, description, type }: PostCardProps) {
  return (
    <div className="group relative bg-white rounded-xl px-3 pt-2 pb-4  shadow-sm hover:shadow-md transition-shadow border-2 border-[#FAB7D0]">
      {/* Event Image */}
      <div className="relative h-[208px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
        {type === "post" && (
          <div className="bg-white p-1.5 rounded-md text-xs absolute top-0 left-0 m-3">
            Funding
          </div>
        )}
      </div>
      {/* Event Content */}
      <div className="mt-7">
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <h3 className="font-semibold text-2xl uppercase">
                Grants. Funding. Womxn
              </h3>
              <p className="text-sm font-medium leading-5">karakrysthal .</p>
            </div>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        {/* Custom Dropdown */}
        <div className="relative mt-4">
          <button className=" w-full mt-1.5 relative bg-white text-black py-3 rounded text-sm lg:text-xl font-medium hover:bg-gray-100 transition-colors">
            <span className="absolute inset-0 rounded bg-gradient-to-r from-[#3C1FEF] via-[#C51FEF] to-[#EF9C1F]"></span>
            <span className="absolute inset-[1px] bg-white rounded"></span>

            {type === "educational" ? (
              <span className="relative z-10"> Watch Now</span>
            ) : (
              <span className="relative z-10"> Learn More</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
