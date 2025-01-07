import Image from "next/image"
import Link from "next/link";

const BOLD_TEXTS = ["LEADERSHIP","IN","WEB3"];

interface Props{
    footerData:{
        [key: string]: any
    }
}

export default function JoinTabFooter(props:Props){
    const {footerData} = props;
    return (
        <div className="md:min-h-[410px] mt-10 md:mt-24 py-10 mx-4 sm:py-20 px-4 md:pr-[163px] relative overflow-hidden flex mb-[40px] sm:mb-[105px] bg-gradient-to-r from-[#FAB7D0] to-[#87B5F4] rounded-2xl">
             <div className="max-w-[440px] -left-20 absolute hidden lg:block -top-16">
              <Image
                  src="/images/partner-footer-image.png"
                  alt="Background image mobile"
                  width={500}
                  height={500}
                  priority
                  className="w-full translate-x-36 scale-[1.2] sm:scale-[1.05] lg:scale-[1.2] translate-y-20 sm:translate-y-0 lg:translate-y-20 object-cover"
                />
             </div>
             <div className="mx-auto md:mx-0 md:ml-auto max-w-[500px] text-center md:text-left">
                <p className="text-xl md:text-[40px] uppercase font-mono md:leading-[56px] tracking-normal">
                  {(footerData.title as string).split(" ").map((word)=>{
                    if(BOLD_TEXTS.includes(word.toUpperCase())){
                      return <b key={Math.random() * 100000}>{word + " "}</b>
                    }
                    return <span key={Math.random() * 100000}>{word + " "}</span>
                  })}
                </p>
                <Link href={"/onboard"}>
                  <button className="text-white bg-[#222222] py-[14px] rounded-md text-sm sm:text-lg font-mono mt-6 md:mt-10 px-[30px]">{footerData.btnTitle}</button>
                </Link>
                <p className="mt-2">{footerData.caption}</p>
             </div>
          </div>
    )
}