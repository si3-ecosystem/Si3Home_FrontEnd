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
        <section className="mt-[100px] mb-[71px] max-w-[1096px] mx-auto px-4">
            <header className="text-center font-medium font-mono">
                <p className="text-2xl sm:text-4xl text-center font-clesmont">CHOOSE YOUR PATHWAY</p>
            </header>
            <TabHeader {...{activeTab,setActiveTab}}/>
            <div className="mt-12 grid lg:grid-cols-3 gap-6">
                {programs.map((program:any)=>{
                    return (
                        <div  style={{
                            perspective: "150px",
                        }} className="h-[312px] skew-x-1 relative" key={program._id}>
                            <Image fill className="w-full" alt={program.title} src={program.banner} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}