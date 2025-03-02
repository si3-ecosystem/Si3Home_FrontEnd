// import Image from "next/image"
import Link from "next/link";
import { Image } from "antd";
const BOLD_TEXTS = ["SI<3>"];

interface Props {
  heroData: {
    [key: string]: any;
  };
}

export default function OnboardHero(props: Props) {
  const { heroData } = props;
  return (
    <div className="min-h-[210px] md:min-h-[410px] items-center sm:py-10 px-4 sm:px-8 relative overflow-hidden flex mb-[40px] sm:mb-[105px] gap-x-10 bg-[url('/images/onboard-hero-bg.png')] bg-cover">
      <div className="flex-1 max-w-[629px]">
        <p className="text-xl md:text-[40px] font-clesmont lg:text-[48px] uppercase font-mono md:leading-[56px] tracking-normal">
          {(heroData.title as string).split(" ").map((word) => {
            if (BOLD_TEXTS.includes(word.toUpperCase())) {
              return (
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#4663FA] to-[#3FE8CA]"
                  key={Math.random() * 100000}
                >
                  {word + " "}
                </span>
              );
            }
            return <span key={Math.random() * 100000}>{word + " "}</span>;
          })}
        </p>
        <p></p>
      </div>
      <div className="flex-1">
        <Image
          src="/images/onboard-hero-img.png"
          alt="side image"
          preview={false}
        />
      </div>
    </div>
  );
}
