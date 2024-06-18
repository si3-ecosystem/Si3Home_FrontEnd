"use client";
import { motion } from "framer-motion";

export default function Mission({ mission }: any) {
  return (
    <motion.div
      whileInView={{
        y: [100, 0],
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      id="ourMission"
      className="bg-[url('/mission.png')] md:bg-[url('/mission-2.png')] bg-no-repeat px-5 md:px-16  bg-cover bg-center md:h-[832px] flex items-center"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-44">
        <div className="text-white w-full md:w-3/4 py-7 md:py-0">
          <h1 className="text-2xl md:text-4xl uppercase">{mission.title}</h1>
          <p className="font-mono md:text-xl py-3 md:pt-4">
            {mission.description}
          </p>
        </div>

        <div className="bg-blackish px-8 py-12 w-full md:w-1/4 text-white flex flex-col gap-6 max-sm:mb-8">
          <h3 className="text-2xl font-medium leading-8 uppercase ">
            {"Si3's Values:"}
          </h3>
          <ul className="list-disc font-mono pl-5 flex flex-col gap-3">
            {mission?.values?.lists?.map((item: any, key: number) => (
              <li
                key={key}
                className="text-base md:text-xl leading-10 font-mono"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
