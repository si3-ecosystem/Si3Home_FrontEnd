import { Image } from "antd";

export default function HeroDiversityTracker(){
    return (
        <section className="min-h-[300px] p-8 flex items-center bg-gradient-to-r relative from-[#B3F1FF] to-[#DFD8FA]">
            <div className="max-w-7xl flex flex-col gap-y-3 md:flex-row items-center justify-between mx-auto flex-1">
                <div className="flex-1 max-w-3xl">
                    <p className="text-3xl sm:text-[40px] text-center md:text-left sm:leading-10 font-black font-clesmont">ECOSYSTEMS FLOURISH WITH DIVERSITY</p>
                </div>
                <div>
                    <Image src="/images/deai-tracker-banner-img.png" alt="Image" preview={false}/>
                </div>
            </div>
        </section>
    )
}