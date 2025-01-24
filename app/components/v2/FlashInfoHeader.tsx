import MegaphoneIcon from "@/app/icons/megaphone";

export default function FlashInfoHeader(){
    return (
        <header className="min-h-12 px-4 text-xs sm:text-sm bg-black text-white gap-x-2 sticky top-0 flex items-center justify-center">
            <MegaphoneIcon/>
            <p className="text-center">{`SI<3>`} Receives Funding From Public Nouns to Create Diversity Tracker for Web3 Grants 🎉</p>
        </header>
    )
}