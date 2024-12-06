import { useState } from "react";
import Image from "next/image";

interface EventCardProps {
  title: string;
  image: string;
}

export function EventCard({ title, image }: EventCardProps) {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="bg-white p-1.5 rounded-md text-xs absolute top-0 left-0 m-3">
          Experience Leaders{" "}
        </div>
      </div>
      {/* Event Content */}
      <div className="mt-7">
        <div className="flex flex-col gap-2.5">
          <p className="text-2xl font-semibold uppercase">{title}</p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <p className="text-xs font-normal leading-4">Hosted by</p>
              <p className="text-sm font-medium leading-5">
                karakrysthal X Elena
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-sm flex-col text-white items-center justify-center p-1 px-2 bg-black rounded-xl leading-snug">
                <p>19</p>
                <p className="text-xs">SEP</p>
              </div>
              <div className="text-[#1C1B22]">
                <p className="text-[9px] leading-3 ">Thursday, 19th Sep</p>
                <p className="text-[8px] leading-3">20:00-21:00 GMT +5</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p>In Partnership with</p>
            <div className="flex items-center justify-start gap-3.5 w-full">
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
          </div>
        </div>
        {/* Custom Dropdown */}
        <div className="relative mt-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" w-full mt-1.5 relative bg-white text-black py-3 rounded text-sm lg:text-xl font-medium hover:bg-gray-100 transition-colors"
          >
            <span className="absolute inset-0 rounded bg-gradient-to-r from-[#3C1FEF] via-[#C51FEF] to-[#EF9C1F]"></span>
            <span className="absolute inset-[1px] bg-white rounded"></span>
            <span className="relative z-10"> Attend the Event</span>
          </button>
          {isOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg z-10">
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Add to Calendar
              </button>
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Share Event
              </button>
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </button>
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                View Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
