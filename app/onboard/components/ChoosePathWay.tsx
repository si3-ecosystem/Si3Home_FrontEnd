"use client";

import Image from "next/image";
import TabHeader from "./TabHeader";
import { TabValues } from "@/lib/types/interfaces";


interface Props{
    programs:any[]
    activeTab:TabValues,
    setActiveTab:(value:TabValues)=>void,
}

export default function ChoosePathWaySection(props:Props){
    const {programs,activeTab,setActiveTab} = props
    return (
        <section className="mt-[40px] md:mt-[100px] mb-[71px] max-w-[1096px] mx-auto px-4">
            <header className="text-center font-medium font-mono">
                <p className="text-2xl sm:text-4xl text-center font-clesmont mb-10">CHOOSE YOUR PATHWAY</p>
            </header>
            <TabHeader {...{activeTab,setActiveTab}}/>
            <div className="mt-6 md:mt-12 px-4 grid grid-cols-3">
                {programs.map((program:any)=>{
                    return (
                        <div  style={{
                            transform: activeTab === program.title?"scale(1.1)":"scale(1)",
                            zIndex:activeTab === program.title?2:1,
                            transition: "all ease 0.4s",
                        }} className="h-[100px] lg:h-[312px] relative" key={program._id}>
                            <Image fill className="w-full" alt={program.title} src={program.banner} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}