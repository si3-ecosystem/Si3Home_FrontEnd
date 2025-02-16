"use client";
import CancelIcon from "@/app/icons/cancel";
import CloseCircleIcon from "@/app/icons/close-circle-icon";
import MegaphoneIcon from "@/app/icons/megaphone";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

export default function FlashInfoHeader() {
  const [open, setOpen] = useState(true);
  const closeInfo = () => setOpen(false);
  if (open) {
    return (
      <header className="group">
        <div className="min-h-12 group-hover:bg-[#9f44d3] px-4 sm:px-8 text-xs sm:text-sm bg-black text-white gap-x-2 sticky top-0 flex items-center justify-between">
          <div className="flex-1 flex items-center gap-x-2 justify-center">
            {/* <MegaphoneIcon/> */}
            <p className="sm:text-center group-hover:text-white">
              {"SI<3>"}Launches Diversity Tracker For Web3 🎉
            </p>
            <button className="hidden md:inline-block rounded-3xl px-3 py-2 text-[#CA92EE] group-hover:text-white">
              Learn More
            </button>
          </div>
          <button onClick={closeInfo} className="block group-hover:hidden">
            <CloseCircleIcon />
          </button>
          <button onClick={closeInfo} className="hidden group-hover:block ">
            <XMarkIcon className="text-white w-7 h-7" />
          </button>
        </div>
      </header>
    );
  }
}
