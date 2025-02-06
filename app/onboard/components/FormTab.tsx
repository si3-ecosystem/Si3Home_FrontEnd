"use client";
import { TabValues } from "@/lib/types/interfaces";
import OnboardForm from "./OnBoardForm";

interface Props{
    activeTab:TabValues
}


export default function FormTab(props: Props){
    return (
        <section>
            <OnboardForm memberType={props.activeTab}/>
            <></>
        </section>
    )
}