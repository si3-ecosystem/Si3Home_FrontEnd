import { Image } from "antd";

export function ExplorerBanner() {
  return (
    <div className="max-h-[470px]  md:min-h-[389px] md:max-h-[389px] items-center pt-8 sm:py-10 px-4 relative overflow-hidden flex flex-col md:flex-row md:mb-[40px] justify-between sm:mb-[105px] gap-7 md:gap-x-10 bg-[url('/images/explorersbg.png')] bg-cover">
      <div className="flex-1 w-full max-w-[697px] lg:pl-12 ">
        <p className="text-4xl md:text-[40px] font-clesmont lg:text-[48px] uppercase font-clemonsans md:leading-[56px] tracking-normal mb-4">
          Si Her Explorers
        </p>
        <p className="text-base md:text-xl md:leading-[140%]">
          Explore our Web3 Education & Si Her Growth network for women and
          non-binary early web3 exploreres
        </p>
      </div>
      <div className="flex-1 h-full max-sm:max-w-[280.554px] md: md:max-w-[470xp] w-full max-md:-mb-2 flex items-end justify-end">
        <Image
          src="/images/explorer.png"
          alt="side image"
          preview={false}
          className="h-full object-contain"
        />
      </div>
    </div>
  );
}
