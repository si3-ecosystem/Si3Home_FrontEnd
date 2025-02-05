import DiversityTrackerForm from "./components/DiversityTrackerForm";
import HeroDiversityTracker from "./components/Hero";

export default function Page(){
    return (
        <main className="">
            <HeroDiversityTracker/>
            <div className="">
                <header className="text-center pt-10 p-4 max-w-7xl mx-auto">
                    <div className="inline-block border border-[#B668E4] p-8 rounded-[20px]">
                        <p className="text-[#3C1EEE] text-sm font-medium">CREATORS. BUILDERS. COMMUNITIES.</p>
                        <p className="text-3xl sm:text-[40px] sm:leading-10 font-black font-clesmont">A DIVERSITY TRACKER</p>
                    </div>
                </header>
                <div className="bg-[url('/images/deai-form-bg.png')] bg-cover px-4">
                    <DiversityTrackerForm/>
                </div>
            </div>
        </main>
    )
}