import Image from "next/image";

interface VideoCardProps {
  video: any;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group relative bg-white rounded-xl px-3 pt-2 pb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow border-2 border-[#FAB7D0]">
      <div className="aspect-video relative">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className=" line-clamp-2 text-2xl font-semibold uppercase text-[#404040]">
          {video.title}
        </h3>
        <div className="flex flex-col">
          <span className="text-lg font-medium leading-7 text-black">
            Elena Sinelnikova
          </span>
          <span className="text-[#333] text-sm leading-5">
            Co-Founder & DC, Metis
          </span>
        </div>
        <div className="flex items-center justify-end gap-3.5 w-full">
          <Image
            src={"/images/uniswaf.png"}
            alt="uniswap"
            width={100}
            height={100}
            className="w-[81px] h-auto"
          />
          <Image
            src={"/images/coinbase.png"}
            alt="uniswap"
            width={100}
            height={100}
            className="w-[76px] h-auto"
          />
        </div>
        <button className=" w-full mt-1.5 relative bg-white text-black py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
          <span className="absolute inset-0 rounded bg-gradient-to-r from-[#3C1FEF] via-[#C51FEF] to-[#EF9C1F]"></span>
          <span className="absolute inset-[1px] bg-white rounded"></span>
          <span className="relative z-10">Watch Now</span>
        </button>
      </div>
    </div>
  );
}
