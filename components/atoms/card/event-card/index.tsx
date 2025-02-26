import { useState } from "react";
import Image from "next/image";
import urlFor from "@/utils/urlFor";
import moment from "moment";

interface EventCardProps {
  badge: string;
  canAttend: boolean;
  date: string;
  hostedBy: string;
  title: string;
  image: string;
  partners: any[];
  time: string;
  description?: string;
}

export function EventCard({
  title,
  image,
  badge,
  canAttend,
  date,
  hostedBy,
  time,
  description,
  partners,
}: EventCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative bg-white rounded-xl px-3 pt-2 pb-4  shadow-sm hover:shadow-md transition-shadow border-2 border-black border-opacity-30">
      {/* Event Image */}
      <div className="relative h-[208px]">
        <Image
          src={urlFor(image).url()}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
        <div className="bg-white p-1.5 rounded-md text-xs absolute top-0 left-0 m-3">
          {badge}
        </div>
      </div>
      {/* Event Content */}
      <div className="mt-7 flex flex-col justify-between gap-7  ">
        <div className="flex flex-col gap-2.5">
          <p className="text-2xl font-semibold uppercase">{title}</p>
          {description && (
            <p className="text-sm font-medium leading-5 mt-[17px]">
              {description}
            </p>
          )}
          <div className="flex items-center justify-between gap-4">
            {hostedBy && (
              <div className="flex flex-col">
                <p className="text-xs font-normal leading-4">Hosted by</p>
                <p className="text-sm font-medium leading-5">{hostedBy}</p>
              </div>
            )}

            {time && (
              <div className="flex items-center gap-2">
                <div className="flex text-sm flex-col text-white items-center justify-center p-1 px-2 bg-black rounded-xl leading-snug">
                  <p>{moment(date).format("DD")}</p>
                  <p className="text-xs">{moment(date).format("MMM")}</p>
                </div>
                <div className="text-[#1C1B22]">
                  <p className="text-[9px] leading-3 max-w-[90px]">{time}</p>
                </div>
              </div>
            )}
          </div>

          {partners?.length > 0 && (
            <div className="flex flex-col gap-1">
              <p>In Partnership with</p>
              <div className="flex items-center justify-start gap-3.5 w-full">
                {partners?.map((partner) => (
                  <Image
                    key={partner._id}
                    src={urlFor(partner.logo).url()}
                    alt={partner.name}
                    width={100}
                    height={100}
                    className="max-w-[100px] w-full max-h-[30px]"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Custom Dropdown */}
        {description ? (
          <div className="relative">
            <button className=" w-full group mt-1.5 relative bg-white text-black py-3 rounded-full border border-black text-sm lg:text-xl font-medium hover:bg-black hover:text-white transition-colors">
              <span className="relative z-10 flex items-center justify-center gap-2.5">
                Learn More
              </span>
            </button>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={() => {
                if (canAttend) {
                  setIsOpen(!isOpen);
                }
              }}
              className=" w-full group mt-1.5 relative bg-white text-black py-3 rounded-full border border-black text-sm lg:text-xl font-medium hover:bg-black hover:text-white transition-colors"
            >
              <span className="relative z-10 flex items-center justify-center gap-2.5">
                {!canAttend ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      className="group-hover:fill-none group-hover:stroke-white"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.13203 8.64835V6.76666C3.13203 5.12743 3.77207 3.55534 4.91136 2.39623C6.05064 1.23712 7.59584 0.585938 9.20703 0.585938C10.8182 0.585938 12.3634 1.23712 13.5027 2.39623C14.642 3.55534 15.282 5.12743 15.282 6.76666V8.64835C16.2855 8.72435 16.938 8.91664 17.4159 9.40285C18.207 10.2068 18.207 11.5025 18.207 14.092C18.207 16.6815 18.207 17.9771 17.4159 18.7811C16.6257 19.5859 15.3522 19.5859 12.807 19.5859H5.60703C3.06183 19.5859 1.78833 19.5859 0.998131 18.7811C0.207031 17.9771 0.207031 16.6815 0.207031 14.092C0.207031 11.5025 0.207031 10.2068 0.998131 9.40285C1.47513 8.91664 2.12853 8.72435 3.13203 8.64835ZM4.48203 6.76666C4.48203 5.4917 4.97984 4.26897 5.86595 3.36744C6.75206 2.46591 7.95388 1.95943 9.20703 1.95943C10.4602 1.95943 11.662 2.46591 12.5481 3.36744C13.4342 4.26897 13.932 5.4917 13.932 6.76666V8.60165C13.5876 8.5986 13.2126 8.59737 12.807 8.59799H5.60703C5.20083 8.59737 4.82583 8.5986 4.48203 8.60165V6.76666Z"
                        fill="black"
                      />
                    </svg>
                  </>
                ) : (
                  <></>
                )}{" "}
                Attend the Event
              </span>
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
        )}
      </div>
    </div>
  );
}
