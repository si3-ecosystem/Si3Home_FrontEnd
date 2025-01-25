"use client";

import { TabValues } from "@/lib/types/interfaces";
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title:string,
    isActive?:boolean,
}

function Button(props:ButtonProps){
    if(props.isActive){
        return <button {...props} className="min-h-14 rounded-full text-xs sm:text-sm font-mono font-medium flex-1 bg-white ">{props.title}</button>
    }
    return (
        <button className="min-h-14 flex-1 rounded-full font-mono text-xs text-white sm:text-sm" {...props}>{props.title}</button>
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
            <header className="max-w-[590px] bg-black mx-auto rounded-full flex border p-3 ">
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