import CancelIcon from "@/app/icons/cancel";
import MegaphoneIcon from "@/app/icons/megaphone";
import Link from "next/link";
import { useState } from "react";

export default function FlashInfoHeader(){
    const [open,setOpen] = useState(true);
    const closeInfo = ()=>setOpen(false)
    if(open){
        return (
            <header className="min-h-12 px-4 sm:px-8 text-xs sm:text-sm bg-black text-white gap-x-2 sticky top-0 flex items-center justify-between">
               <div className="flex-1 flex items-center gap-x-2 justify-center">
                    <MegaphoneIcon/>
                    <p className="sm:text-center">{"SI<3>"} Launches Diversity Tracker For Web3 🎉</p>
                    <Link href={"/diversity-tracker"}><button className="md:inline-block rounded-3xl px-3 py-2 text-[#CA92EE]">Learn More</button></Link>
               </div>
               <button onClick={closeInfo} className="border h-9 flex w-9 rounded-full items-center justify-center"><CancelIcon/></button>
            </header>
        )
    }
    
}