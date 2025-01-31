import MegaphoneIcon from "@/app/icons/megaphone";

export default function FlashInfoHeader(){
    return (
        <header className="min-h-12 px-4 text-xs sm:text-sm bg-black text-white gap-x-2 sticky top-0 flex items-center justify-center">
            <MegaphoneIcon/>
            <p className="sm:text-center">{"SI<3>"} Launches Diversity Tracker For Web3 🎉</p>
            <button className="bg-white hidden md:inline-block rounded-3xl px-3 py-2 text-black">Learn More</button>
        </header>
    )
}