"use client";

import { useState } from "react";
import TabHeader from "./TabHeader";
import { TabValues } from "@/lib/types/interfaces";
import OnboardForm from "./OnBoardForm";

export default function FormTab(){
    const [activeTab,setActiveTab] = useState<TabValues>("explorers")
    return (
        <section>
            <TabHeader {...{activeTab,setActiveTab}}/>
            <div>
                <OnboardForm/>
            </div>
        </section>
    )
}