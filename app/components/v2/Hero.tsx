"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@/app/icons/chevron";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageUrl from "@/utils/imageUrl";
import MouseIcon from "@/app/icons/mouse";
const shadowClass = "0 8px 16px 0 rgba(0,0,0,0.2)"




function Partners({ partners }: any) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage] = useState(3);

    const slideLeft = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const slideRight = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(
                prevIndex + 1,
                Math.ceil(partners.length / itemsPerPage) - 1
            )
        );
    };

    const getVisibleItems = () => {
        const startIndex = currentIndex * itemsPerPage;
        return partners.slice(
            startIndex,
            startIndex + itemsPerPage
        );
    };
    const getVisibleItemsMobile = () => {
        const startIndex = currentIndex * itemsPerPage;
        return partners.slice(
            startIndex,
            startIndex + 2
        );
    };

    return (
        <section className="relative">
            <div className="lg:absolute mb-8 justify-center items-center flex gap-4 lg:-bottom-14 w-full lg:w-8/12 z-10">
                <button onClick={slideLeft} className="h-12 w-12 bg-white rounded-full flex items-center justify-center border">
                    <ChevronLeftIcon />
                </button>
                <button onClick={slideRight} className="h-12 w-12 bg-white rounded-full flex items-center justify-center border">
                    <ChevronRightIcon />
                </button>
            </div>
            <div className="border-y border-gray-400 grid lg:grid-cols-3 mx-auto bg-white lg:px-4 border">
            <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="col-span-2 hidden lg:grid grid-cols-2 lg:grid-cols-3 gap-3 grid-col md:gap-10"
            >
                {
                    getVisibleItems().map((item:any) => (
                        <div className="border-r flex items-center justify-center sm:p-8" key={item.id}>
                           <div className="flex-1 text-center">
                                <div className="mb-5">
                                    <ImageUrl image={item.logo}/>
                                </div>
                                <p className="px-4 p-2  bg-[#EEEEEE] rounded-full">Community Partner</p>
                           </div>
                        </div>
                    ))
                }

            </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="col-span-2 lg:hidden border-b grid grid-cols-2 lg:grid-cols-3 gap-3 grid-col md:gap-10"
            >
                {
                    getVisibleItemsMobile().map((item:any) => (
                        <div className="border-r flex items-center justify-center p-6 py-8 sm:p-8" key={item.id}>
                           <div className="flex-1 text-center">
                                <div className="mb-5">
                                    <ImageUrl image={item.logo}/>
                                </div>
                                <p className="p-2 bg-[#EEEEEE] text-[10px] rounded-full">Community Partner</p>
                           </div>
                        </div>
                    ))
                }

            </motion.div>
            </AnimatePresence>
                <div className="lg:flex max-w-6xl mx-auto items-center gap-11">
                    <div className="flex-1 lg:border-l border-gray-400  min-h-[152px]">
                        <div className="px-1 sm:px-4 p-8">
                            <p className="text-xl sm:text-3xl">Join Us in Building an Inclusive Web3 Future</p>
                            <p className="my-3">Join us in creating an inclusive Web3 future for women and non-binary individuals. Let’s empower change together!</p>
                            <button className="border rounded-full py-3 font-medium my-3 px-6">Partner With Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
        <div className="flex h-[320px] md:h-[500px] items-center justify-center relative">
            <video  id="hero-video" ref={videoRef} autoPlay loop muted src="/hero.mp4" className="w-full absolute rounded-[32px] h-full top-0 left-0 right-0 object-cover" />
            {/* <button onClick={play} style={{ boxShadow: shadowClass }} className="h-[96px] z-10 bg-white rounded-full w-[96px] flex items-center justify-center">
                {paused
                    ? <i className="bi bi-play-fill text-[64px]"></i>
                    : <i className="bi bi-pause-fill text-[64px]"></i>
                }
            </button> */}
        </div>
    )
}


export default function Hero({ partners }: any) {

    const [index,setIndex] = useState(1);

    useEffect(() => {
        const countInterval = setInterval(() => {
            setIndex(prev=>{
                if(prev > 3) return 1;
                return prev+1
            })
        },5000)

        return ()=>clearInterval(countInterval)
    },[])

    const scrollToSection = () => {
        const section = window.document.querySelector("#ecosystem-header") as HTMLDivElement
        if(section){
            section.scrollIntoView({behavior:"smooth",block:"start"})
        }
    }


    return (
        <section className="bg-gradient-to-tr from-[rgb(255,237,207,0.6)] from-50% to-[rgb(252,198,233)]">
            <div style=
            {{
                backgroundImage: `linear-gradient(to right,rgb(255,255,255,0.5),rgb(252,255,255,0.5)), url("/images/grid-line.png")`
            }}
                className="pt-[50px]"
            >
                <div className="px-4">
                <div className="rounded-[32px] max-w-7xl mx-auto bg-white pt-8 mb-8" style={{ boxShadow: shadowClass }}>
                    <div className="max-w-[700px] px-4 mb-7 lg:mb-14 mx-auto text-center">
                        <div className="text-3xl font-clesmont lg:text-6xl font-bold uppercase">
                            <p>Entering An</p>
                            <p className="max-h-8 lg:max-h-16 overflow-hidden translate-container">
                                <span
                                style={index > 1 ?{transform: "translateY(-200%)"}:undefined}
                                className="bg-gradient-to-r inline-block  from-[#F6CEEC] bg-clip-text text-transparent to-[#D939CD]">Accessible</span> <br />
                                <span
                                style={index > 2 ?{transform: "translateY(-200%)"}:index > 1 ?{transform: "translateY(-100%)"}:undefined}
                                className="bg-gradient-to-r inline-block  from-[#CE9FFC] bg-clip-text text-transparent to-[#7367F0]">Collaborative</span> <br />
                                 <span
                                style={index > 3 ?{transform: "translateY(-300%)"}:index > 2 ?{transform: "translateY(-200%)"}:undefined}
                                className="bg-gradient-to-r inline-block  from-[#ABDCFF] bg-clip-text text-transparent to-[#0396FF]">Diverse</span> <br />
                                <span
                                 style={index > 3 ?{transform: "translateY(-300%)"}:undefined}
                                className="bg-gradient-to-b inline-block  from-[#F0FF00] bg-clip-text text-transparent to-[#58CFFB]">Invicible</span> <br />
                            </p>
                            <p>web3 era</p>
                        </div>
                        <p className="max-w-[500px] my-2 text-base lg:text-xl tracking-normal mx-auto text-center">Explore Our Ecosystem</p>
                        <button onClick={scrollToSection}><MouseIcon/></button>
                    </div>
                    <VideoPlayer />
                </div>
                </div>
                <p className="font-black uppercase text-2xl md:text-5xl text-center font-clesmont mt-20">Our Partners</p>
                <Partners partners={partners} />
            </div>
        </section>
    )
}