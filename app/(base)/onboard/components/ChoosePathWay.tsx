"use client";

import Image from "next/image";
import TabHeader from "./TabHeader";
import { TabValues } from "@/lib/types/interfaces";
import ImageUrl from "@/utils/imageUrl";


interface Props{
    programs:any[]
    activeTab:TabValues,
    setActiveTab:(value:TabValues)=>void,
}

// ------------- SORT OBJECT FOR DATA FROM SANITY
const order:{
    [key:string]:number
} = {
    explorers:1,
    leaders:2,
    creators:3,
}

interface PathwayObject{
    pathway:string,
    [key:string]:any
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
                {programs
                .sort((a:PathwayObject,b:PathwayObject)=>order[a.pathway] - order[b.pathway])
                .map((program:any)=>{
                    return (
                        <div  style={{
                            transform: activeTab === program.pathway?"scale(1.1)":"scale(1)",
                            zIndex:activeTab === program.pathway?2:1,
                            transition: "all ease 0.4s",
                        }} className="h-[100px] lg:h-[312px] relative" key={program._id}>
                            <ImageUrl fill className="w-full" alt={program.pathway} image={program.banner} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}