"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@/app/icons/chevron";
import { useRef, useState } from "react";

const shadowClass = "0 8px 16px 0 rgba(0,0,0,0.2)"

function Partners(){
    return (
        <>
        <div className="justify-center lg:hidden mb-8 items-center flex gap-4 -bottom-6 z-10">
                    <button className="h-12 w-12 bg-white rounded-full flex items-center justify-center border">
                        <ChevronLeftIcon/>
                    </button>
                    <button className="h-12 w-12 bg-white rounded-full flex items-center justify-center border">
                        <ChevronRightIcon/>
                    </button>
        </div>
        <div className="border-y relative border-gray-400 mx-auto bg-white px-4 border">
            <div className="lg:flex max-w-6xl mx-auto items-center gap-11">
                <div className="text-2xl border-r flex-[3] font-medium text-black">
                   <div className="absolute hidden lg:flex gap-4 -bottom-6 z-10">
                    <button className="h-12 w-12 bg-white rounded-full flex items-center justify-center border">
                        <ChevronLeftIcon/>
                    </button>
                    <button className="h-12 w-12 bg-white rounded-full flex items-center justify-center border">
                        <ChevronRightIcon/>
                    </button>
                   </div>
                </div>
                <div className="flex-1 lg:border-l border-gray-400  min-h-[152px]">
                    <div className="px-1 sm:px-4 p-8">
                        <p className="text-xl sm:text-3xl">Join Us in Building an Inclusive Web3 Future</p>
                        <p className="my-3">Join us in creating an inclusive Web3 future for women and non-binary individuals. Let’s empower change together!</p>
                        <button className="border rounded-full py-3 font-medium my-3 px-6">Partner With Us</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

function VideoPlayer() {
    const [paused, setPaused] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const play = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setPaused(false);
                return;
            }
            setPaused(true);
            videoRef.current.pause();
        }
    }

    return (
        <div className="flex h-[500px] items-center justify-center relative">
            <video ref={videoRef} muted src="/hero.mp4" className="w-full absolute rounded-[32px] h-full top-0 left-0 right-0 object-cover" />
            <button onClick={play} style={{ boxShadow: shadowClass }} className="h-[96px] z-10 bg-white rounded-full w-[96px] flex items-center justify-center">
                {paused
                    ? <i className="bi bi-play-fill text-[64px]"></i>
                    : <i className="bi bi-pause-fill text-[64px]"></i>
                }
            </button>
        </div>
    )
}


export default function Hero({partners}:any) {

    console.log({partners})

    return (
        <section className="bg-gradient-to-tr from-[rgb(255,237,207,0.6)] from-50% to-[rgb(252,198,233)]">
           <div style={{
             backgroundImage:`linear-gradient(to right,rgb(255,255,255,0.5),rgb(252,255,255,0.5)), url("/images/grid-line.png")`
           }}
           className="px-4 lg:px-10 pt-[50px] pb-4"
           >
            <div className="rounded-[32px] max-w-7xl mx-auto bg-white pt-8 mb-8" style={{ boxShadow: shadowClass }}>
                    <div className="max-w-[700px] px-4 mb-14 mx-auto text-center">
                        <h1 className="text-3xl lg:text-6xl font-bold uppercase">
                            Entering An <br /> 
                            <span className="bg-gradient-to-r from-[#4663FA] bg-clip-text text-transparent to-[#3FE8CA]">Accessible</span> <br />
                            web3 era
                        </h1>
                        <p className="max-w-[500px] my-2 text-base lg:text-xl tracking-normal mx-auto text-center">Explore Our Decentralizing Ecosystem Creating Pathways For Diverse Voices Of the New Economy</p>
                        <button className="bg-black my-4 px-6 py-[13px] rounded-full font-medium text-white">Get Started</button>
                    </div>
                    <VideoPlayer />
                </div>
                <p className="font-black uppercase text-2xl md:text-5xl text-center mt-20">Our Partners</p>
           </div>
           <Partners/>
        </section>
    )
}