import Image from "next/image";
import React from "react";
import Link from "next/link";
import urlFor from "@/utils/urlFor";
import LinkedinIcon from "@/app/icons/linkedin";
import XIcon from "@/app/icons/x";

export default function FooterComponent({ footer }: any) {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div id="stayConnected" className="bg-white -mt-4">
        <div className="max-w-7xl border-gray-400 mx-auto lg:flex">
          <div className="flex-[2] sm:pr-4 min-h-[250px] border-b px-4 lg:px-0 lg:border-r border-gray-400 lg:py-12 flex items-center justify-center">
            <div className="flex-1">
              <div className="max-w-[500px]">
                <Link href="/" className="text-5xl font-bold uppercase">
                  <img
                    src={urlFor(footer?.logo?.asset).url()}
                    alt={footer?.logo?.alt}
                    className="w-24 h-12 "
                  />
                </Link>
                <p className="my-2 mb-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu</p>
                <form action="" className="border rounded-full flex gap-x-4 items-center pl-8 p-2 border-black w-11/12 lg:min-h-[57px] lg:max-w-[375x]">
                  <div className="flex-1">
                    <input type="text" className="w-full text-xs sm:text-base text-[#1E1E1E] placeholder:text-[#1E1E1E]" placeholder="Subscribe to our newsletter" />
                  </div>
                  <button className="text-white bg-black rounded-full py-2 px-3 sm:px-6">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 border-r pt-16 p-4 border-gray-400 flex lg:justify-center">
            <div>
              <p className="font-black text-2xl"> SI Things</p>
              <div className="my-2 flex flex-col gap-2">
                <Link href={"/privacy-policy"}>
                  <button className="block">Privacy Policy</button>
                </Link>
                <Link href={"/member-policy"}>
                  <button className="block">Member Policy</button>
                </Link>
                <Link href={"/member-policy"}>
                  <button className="block">Media Kit</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 border-r p-4 pt-16 border-gray-400 flex lg:justify-center">
            <div>
              <p className="font-black text-2xl">Follow Us</p>
              <div className="my-2 flex flex-col gap-2">
                <Link href={footer.twitter} target="_blank">
                  <button className="flex items-center gap-2">
                    <XIcon/>
                    <span>Twitter X</span>
                  </button>
                </Link>
                <Link href={footer.linkedIn} target="_blank">
                 <button className="flex items-center gap-2">
                  <LinkedinIcon/>
                  <span>LinkedIn</span>
                 </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t p-4 py-8 border-gray-400">
          <p className="text-sm max-w-7xl mx-auto text-center md:text-base">
             {"Copyright © 2025 Si<3>, Inc. All rights reserved."}
          </p>
        </div>
      </div>
    </>
  );
}
