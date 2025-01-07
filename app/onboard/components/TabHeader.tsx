"use client";

import { TabValues } from "@/lib/types/interfaces";
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title:string,
    isActive?:boolean,
}

function Button(props:ButtonProps){
    if(props.isActive){
        return <button {...props} className="min-h-14 text-xs sm:text-base font-mono font-medium rounded-lg flex-1 bg-[#1C1B22] text-white ">{props.title}</button>
    }
    return (
        <button className="min-h-14 flex-1 font-mono text-xs sm:text-base" {...props}>{props.title}</button>
    )
}



interface HeaderProps{
    activeTab:TabValues,
    setActiveTab:(value:TabValues)=>void,
}

interface TabObject{
    title:string,
    value:TabValues,
}

const tabList:TabObject[] = [
    {title:"I am Exploring Web3",value:"explorers"},
    {title:"I am Leading Web3",value:"leaders"},
    {title:"I am Building Web3",value:"creators"},
]


export default function TabHeader(props:HeaderProps){
    const {activeTab,setActiveTab} = props
    return (
        <div className="px-4">
            <header className="max-w-[776px] mx-auto rounded-xl flex border p-1 ">
                {tabList.map((tab)=>{
                    return (
                        <Button
                            key={tab.title}
                            title={tab.title}
                            isActive={activeTab == tab.value}
                            onClick={(e)=>setActiveTab(tab.value)}
                        />
                    )
                })}
            </header>
        </div>
    )
}