import { Image } from "antd";

export function FixxBanner({ data }: any) {
  return (
    <div className="max-h-[470px]  md:min-h-[389px] md:max-h-[389px] items-center pt-8 sm:py-10 px-4 relative overflow-hidden flex flex-col md:flex-row md:mb-[40px] justify-between sm:mb-[105px] gap-7 md:gap-x-10 bg-[url('/images/onboard-hero-bg.png')] bg-cover">
      <div className="flex-1 w-full max-w-[697px] lg:pl-12 ">
        <p className="text-4xl md:text-[40px] font-clesmont lg:text-[48px] uppercase font-clemonsans md:leading-[56px] tracking-normal mb-4">
          {data?.title}
        </p>
        <p className="text-base md:text-xl md:leading-[140%]">
          {data?.description}
        </p>
      </div>
      <div className="flex-1 h-full max-sm:max-w-[280.554px] md: md:max-w-[470xp] w-full max-md:-mb-2 flex items-end justify-end">
        <Image
          src="/images/she-her-fixx.png"
          alt="side image"
          preview={false}
          className="h-full object-contain"
        />
      </div>
    </div>
  );
}
