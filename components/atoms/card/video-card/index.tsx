import urlFor from "@/utils/urlFor";
import Image from "next/image";
import { Button } from "../../button/Button";

interface VideoCardProps {
  data: any;
}

export function VideoCard({ data }: VideoCardProps) {
  return (
    <div className="group relative bg-white rounded-xl px-3 pt-2 pb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow border-2 border-black border-opacity-30">
      <div className="aspect-video relative mb-5">
        <Image
          src={urlFor(data?.image).url()}
          alt={data.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold uppercase">{data?.title}</p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <p className="text-xs font-normal leading-4">Hosted by</p>
              <p className="text-sm font-medium leading-5">{data?.host}</p>
            </div>
          </div>
          {data?.partners?.length > 0 && (
            <div className="flex flex-col gap-1">
              <p>In Partnership with</p>
              <div className="flex items-center justify-start gap-3.5 w-full">
                {data?.partners?.map((partner: any, index: number) => (
                  <Image
                    key={index}
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
        <div>
          <button className="border-black border bg-white text-black hover:bg-black hover:text-white w-full rounded-full py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
