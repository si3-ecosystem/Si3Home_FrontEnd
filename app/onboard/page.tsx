"use client";
import ContentProvider from "@/utils/ContentProvider"
import ChoosePathWaySection from "./components/ChoosePathWay"
import OnboardHero from "./components/OnboardHero"
import FormTab from "./components/FormTab"
import { TabValues } from "@/lib/types/interfaces"
import { useState } from "react"
import { PartnerFooterInfo } from "@/components/JoinTabFooter";

export default function Page(){

    const [activeTab,setActiveTab] = useState<TabValues>("explorers")

    const heroData = {
        title:"Start your Journey Here with SI<3>"
    }

    const programs = [
        {banner:"/explorers.png",id:1,title:"SI Her Explorers"},
        {banner:"/fixx.png",id:2,title:"SI Her Fixx Program"},
        {banner:"/activator.png",id:3,title:"SI Her Co-Active"},
    ]

    return (
        <main >
            <OnboardHero heroData={heroData}/>
            <section className="bg-[url('/images/get-started.png')] bg-cover">
                <div className="max-w-[1096px] mb-[100px] mx-auto bg-white">
                    <ChoosePathWaySection {...{activeTab,setActiveTab}} programs={programs}/>
                    <FormTab activeTab={activeTab}/>
                </div>
            </section>
            <PartnerFooterInfo
                footerData={{
                    title:"INTERESTED IN PARTNERING WITH US?",
                    description:"We are open to exploring collaborations with impactful organizations aligned with the values on our website.",
                    btnTitle:"Inquire Here"
                }}/>
        </main>
    )
}