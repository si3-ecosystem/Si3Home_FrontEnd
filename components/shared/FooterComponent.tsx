import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function FooterComponent({ footer }: any) {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div id="stayConnected" className="bg-blackish px-5  md:px-16 py-8">
        <div className="py-5 flex flex-col md:flex-row items-center gap-5 justify-between">
          <h1 className="text-white text-4xl lg:text-5xl shrink-0 hidden md:block">
            {"SI <3>"}
          </h1>

          {/* <iframe
            src="https://paragraph.xyz/@currentsi/embed?minimal=true"
            height="45"
            className="bg-white border border-white w-[320px] sm:w-[380px]"
            frameBorder="0"
            scrolling="no"
          ></iframe> */}
          <div className="flex items-center gap-6 shrink-0">
            <a href={footer.other} target="_blank">
              <Image
                src={"/icons/ha.svg"}
                alt="icon"
                width={30}
                height={30}
                className="w-7 h-7"
              />
            </a>
            <a href={footer.twitter} target="_blank">
              <Image
                src={"/icons/x.svg"}
                alt="icon"
                width={30}
                height={30}
                className="w-7 h-7"
              />
            </a>
            <a href={footer.linkedIn} target="_blank">
              <Image
                src={"/icons/linkedIn.svg"}
                alt="icon"
                width={30}
                height={30}
                className="w-7 h-7"
              />
            </a>
          </div>
        </div>

        <hr className="my-6 border-[#D9D9D9]" />

        <div className="text-white font-outfit flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
          <h5 className="text-sm md:text-base">
            Copyright © {currentYear} Si3, Inc. All rights reserved.
          </h5>
          <div className="flex items-center gap-4 md:gap-6">
            <p className="text-sm md:text-base">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
            <p className="text-sm md:text-base">
              <Link href="/member-policy">Member Policy</Link>
            </p>

            <p className="text-sm md:text-base">Media Kit</p>
          </div>
        </div>
      </div>
    </>
  );
}
