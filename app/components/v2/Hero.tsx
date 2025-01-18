"use client";

import PlayIcon from "@/app/icons/play";
import { Image } from "antd";
import { useRef, useState } from "react";

const shadowClass = "0 8px 16px 0 rgba(0,0,0,0.2)"

function Partners(){
    return (
        <div className="mt-6 max-w-6xl mx-auto bg-white py-4 px-4 pl-8 border rounded-lg">
            <div className="flex items-center gap-11">
                <div className="text-2xl font-medium text-black">
                    <p>Community Partners</p>
                    <p className="mt-10">Business Partners</p>
                </div>
                <div className="flex-1 bg-[#F5F5F5] min-h-[152px] rounded-lg"></div>
            </div>
        </div>
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


export default function Hero() {
    return (
        <section className="bg-gradient-to-tr from-[rgb(255,237,207,0.4)] from-50% to-[rgb(252,198,233)]">
           <div style={{
             backgroundImage:`linear-gradient(rgb(255,237,207,0.8),rgb(252,198,233,0.9),to right), url("/images/grid-line.png")`
           }}
           className="px-10 py-[50px]"
           >
            <div className="rounded-[32px] max-w-7xl mx-auto bg-white pt-8 mb-8" style={{ boxShadow: shadowClass }}>
                    <div className="max-w-[700px] px-4 mb-14 mx-auto text-center">
                        <h1 className="text-6xl font-bold uppercase">
                            Entering An <br /> 
                            <span className="bg-gradient-to-r from-[#4663FA] bg-clip-text text-transparent to-[#3FE8CA]">Accessible</span> <br />
                            web3 era
                        </h1>
                        <p className="max-w-[500px] my-2 text-xl tracking-normal mx-auto text-center">Explore Our Decentralizing Ecosystem Creating Pathways For Diverse Voices Of the New Economy</p>
                        <button className="bg-black my-4 px-6 py-[13px] rounded-full font-medium text-white">Get Started</button>
                    </div>
                    <VideoPlayer />
                </div>
                <Partners/>
           </div>
        </section>
    )
}