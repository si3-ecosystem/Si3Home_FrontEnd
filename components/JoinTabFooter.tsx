import Image from "next/image";
import Link from "next/link";

const BOLD_TEXTS = ["LEADERSHIP", "IN", "WEB3"];

interface Props {
  footerData: {
    [key: string]: any;
  };
  video?: string;
  hideCTA?: boolean;
}

export default function JoinTabFooter(props: Props) {
  const { footerData, video, hideCTA = false } = props;
  return (
    <div className="bg-[url('/images/join.png')] px-4 py-16 bg-cover">
      <div className="max-w-6xl mx-auto flex items-center justify-center min-h-[300px] px-4  rounded-2xl overflow-hidden sm:min-h-[600px] relative">
        <video
          src={video || "/si3footervideo.mp4"}
          className="h-full w-full absolute top-0 object-cover object-[center_-180px] max-md:object-[center_-5px] rounded-2xl z-[33]"
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute top-0 left-0 w-full h-full z-[35] bg-[rgba(0,0,0,0.2)]"></div>
        <div className="text-white text-center max-w-[724px]  z-[40]">
          <p className="text-xl text-center mt-10 sm:mt-0 font-clesmont lg:mx-0 md:text-[40px] font-black uppercase  md:leading-[56px] tracking-normal">
            {footerData.title &&
              (footerData.title as string).split(" ").map((word) => {
                if (BOLD_TEXTS.includes(word.toUpperCase())) {
                  return <b key={Math.random() * 100000}>{word + " "}</b>;
                }
                return <span key={Math.random() * 100000}>{word + " "}</span>;
              })}
          </p>

          {!props.hideCTA && (
            <Link href={"/onboard"}>
              <button className="text-white bg-black py-[14px] capitalize rounded-full text-sm sm:text-lg mt-6 md:mt-10 px-[30px]">
                {footerData.btnTitle}
              </button>
            </Link>
          )}
          <p className="mt-2">{footerData.caption}</p>
        </div>
      </div>
    </div>
  );
}
export function PartnerFooterInfo(props: Props) {
  const { footerData, video } = props;

  return (
    <section className="bg-[url('/images/partners.png')] px-4 py-16 bg-cover ">
      <div className="max-w-6xl mx-auto flex items-center justify-center min-h-[300px] px-4 sm:min-h-[476px] relative  rounded-2xl overflow-hidden">
        <Image
          src="/images/partner-subtract.png"
          alt="Background image mobile"
          fill
          className="w-full absolute top-0 left-0 z-[30] h-full"
        />
        <video
          // style={{clipPath:"polygon(100%)"}}
          src={video || "/si3footervideo.mp4"}
          className="h-full w-full absolute top-0 object-cover rounded-2xl z-[33]"
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute top-0 left-0 w-full h-full z-[35] bg-[rgba(0,0,0,0.2)]"></div>

        <div className="text-white text-center max-w-[724px] z-[40]">
          <p className="text-xl text-center font-clesmont lg:mx-0 md:text-[40px] font-black uppercase md:leading-[56px] tracking-normal">
            {(footerData.title as string).split(" ").map((word) => {
              if (BOLD_TEXTS.includes(word.toUpperCase())) {
                return <b key={Math.random() * 100000}>{word + " "}</b>;
              }
              return <span key={Math.random() * 100000}>{word + " "}</span>;
            })}
          </p>
          <p className="sm:text-xl">{footerData.description}</p>
          <Link href={"/onboard"}>
            <button className="text-white bg-black py-[14px] capitalize rounded-full text-sm sm:text-lg mt-6 md:mt-10 px-[30px]">
              {footerData.btnTitle}
            </button>
          </Link>
          <p className="mt-2">{footerData.caption}</p>
        </div>
      </div>
    </section>
  );
}
