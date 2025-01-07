import ContentProvider from "@/utils/ContentProvider"
import ChoosePathWaySection from "./components/ChoosePathWay"
import OnboardHero from "./components/OnboardHero"
import FormTab from "./components/FormTab"

export default function Page(){

    const heroData = {
        title:"Start your Journey Here with SI<3>"
    }

    const programs = [
        {banner:"/explorers.png",id:1,title:"SI Her Explorers"},
        {banner:"/fixx.png",id:2,title:"SI Her Fixx Program"},
        {banner:"/activator.png",id:3,title:"SI Her Co-Active"},
    ]

    return (
        <main className="pb-[72px]">
            <OnboardHero heroData={heroData}/>
            <ChoosePathWaySection programs={programs}/>
            <FormTab/>
        </main>
    )
}