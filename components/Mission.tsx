"use client";
import { Image } from "antd";

const images = [
  "/images/accessiblity.png",
  "/images/collaborative-growth.png",
  "/images/financial-inclusion.png",
  "/images/diverse-recognition.png",
]


export default function Mission({ mission,showValues = true }: any) {
  return (
    <div
      // whileInView={{
      //   y: [100, 0],
      //   opacity: [0, 1],
      // }}
      // transition={{
      //   duration: 0.5,
      //   ease: "easeInOut",
      // }}
      id="ourMission"
      className=""
    >
      <div className="border-y border-gray-400 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2">

          <div className="lg:border-r border-gray-400 px-4 py-14 md:py-[130px]">
              <div className="max-w-[556px] mx-auto lg:mx-0">
                <h1 className="text-2xl md:text-5xl uppercase font-black font-clesmont">{mission.title}</h1>
                <p className="font-mono text-sm md:text-lg font-medium py-3 md:pt-4">{mission.description}</p>
              </div>
            </div>

          <div className="flex border-t lg:border-t-0 py-10 lg:py-0 items-center justify-center lg:justify-end">
              <div className="relative">
                <Image src="/images/mission.png" alt="missions" preview={false}/>
                <div className="text-white absolute left-10 bottom-10">
                  <p className="font-black font-mono text-2xl">KARA HORWARD</p>
                  <p> {"SI<3>"} ECOSYSTEM GROWTH</p>
                </div>
              </div>
          </div>
        </div>
      </div>

    {showValues && (
        <div className="border-b border-gray-400">
        <header className="text-3xl py-12 text-center border-b border-gray-400 font-medium leading-8 uppercase ">
          {"SI<3> 's Values:"}
        </header>
        <div className="">
          <ul className="grid max-w-7xl font-mono lg:pl-5 lin grid-cols-2 lg:grid-cols-4">
            {mission?.values?.lists?.map((item: any, key: number) => (
              <li
                key={key}
                className={`text-base ${(key + 1) % 4 !== 0 && "lg:border-r"} ${(key + 1) % 2 !== 0 && "border-r"} md:text-xl flex px-10 lg:border-b-0 items-center border-b justify-center  border-gray-400 leading-10 font-mono`}
              >
                <div className="py-7 pb-10 text-center flex items-center flex-1 justify-center flex-col">
                  <Image src={images[key]} className="mx-auto mb-8" alt={item} preview={false}/>
                  <p className="text-xs sm:text-base">{item}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
    </div>
  );
}
