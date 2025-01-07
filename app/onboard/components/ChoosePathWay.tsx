"use client";

import Image from "next/image";


interface Props{
    programs:any[]
}

export default function ChoosePathWaySection(props:Props){
    const {programs} = props
    return (
        <section className="mt-[100px] mb-[71px] max-w-[1096px] mx-auto px-4">
            <header className="text-center font-medium font-mono">
                <p className="text-2xl sm:text-5xl text-center">CHOOSE YOUR PATHWAY</p>
                <p className="md:mt-4 text-lg sm:text-2xl">APPLY HERE</p>
            </header>
            <div className="mt-12 grid lg:grid-cols-3 gap-6">
                {programs.map((program:any)=>{
                    return (
                        <div className="h-[312px] relative" key={program._id}>
                            <Image fill className="w-full" alt={program.title} src={program.banner} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}