import Image from "next/image"
import Link from "next/link";

const BOLD_TEXTS = ["LEADERSHIP","IN","WEB3","JOURNEY","HERE"];

interface Props{
    heroData:{
        [key: string]: any
    }
}

export default function OnboardHero(props:Props){
    const {heroData} = props;
    return (
        <div className="min-h-[210px] md:min-h-[410px] items-center sm:py-10 px-4 sm:px-8 relative overflow-hidden flex mb-[40px] sm:mb-[105px] bg-gradient-to-r from-[#B3F6FF] to-[#FAEFD8]">
             <div className="max-w-[200px] sm:max-w-[440px] -right-10 lg:right-0 absolute bottom-0 lg:bottom-28">
              <Image
                  src="/images/partner-footer-image.png"
                  alt="Background image mobile"
                  width={500}
                  height={500}
                  priority
                  className="w-full sm:scale-[1.05] lg:scale-[1.2] lg:translate-y-20 object-cover"
                />
             </div>
             <div className="mx-auto md:mx-0 md:ml-auto flex-1 md:text-left">
                <p className="text-xl md:text-[40px] font-clesmont lg:text-[56px] uppercase font-mono md:leading-[56px] tracking-normal">
                  {(heroData.title as string).split(" ").map((word)=>{
                    if(BOLD_TEXTS.includes(word.toUpperCase())){
                      return <b key={Math.random() * 100000}>{word + " "}</b>
                    }
                    return <span key={Math.random() * 100000}>{word + " "}</span>
                  })}
                </p>
             </div>
             <div className="flex-1"></div>
          </div>
    )
}