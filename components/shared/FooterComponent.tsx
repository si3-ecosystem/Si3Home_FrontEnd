'use client'; // This makes this component a Client Component

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import urlFor from "@/utils/urlFor";
import LinkedinIcon from "@/app/icons/linkedin";
import XIcon from "@/app/icons/x";

interface FooterProps {
  footer: {
    logo: {
      asset: any;
      alt: string;
    };
    twitter: string;
    linkedIn: string;
    mediakit: string;
  };
}

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if the cookie consent has already been given
    // const consentGiven = getCookie("localConsent");
    // if (!consentGiven) {
    //   setShowConsent(true); // Show the popup if no consent is given
    // }
  }, []);

  const acceptCookie = () => {
    // Accept cookies and set the cookie consent flag in cookies
    setShowConsent(false); // Hide the popup
    // setCookie("localConsent", "true", { maxAge: 30 * 24 * 60 * 60 }); // Set cookie consent to true for 30 days
  };

  if (!showConsent) {
    return null; // Don't render the consent popup if consent is given
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100 rounded-lg m-4">
        <span className="text-dark text-base mr-16">
          This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.
        </span>
        <button
          className="py-2 px-8 rounded-lg border-2 border-[#4428F2] text-black hover:bg-[#4428F2] hover:text-white"
          onClick={acceptCookie}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default function FooterComponent({ footer }: FooterProps) {
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
              <p className="font-black text-2xl font-clesmont"> SI Things</p>
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
              <p className="font-black text-2xl font-clesmont">Follow Us</p>
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

      {/* Ethermail Subscription Widget */}
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `
            (function ({ ...args }) {
              var p = document.createElement('script');
              p.src = 'https://cdn-email.ethermail.io/sdk/v2/ethermail.js';
              document.body.appendChild(p);
              p.setAttribute('a', args.afid);
              p.setAttribute('b', args.communityAlias);
              p.setAttribute('c', args.features);
            })({
              afid: '67353ab1f14dc512c8f225ef',
              communityAlias: 'si3',
              features: ['subscribe']
            });
          `,
        }}
      ></script>
      <ethermail-subscribe
        widget="677f0f8f690e56d4d9800180"
        theme="light"
        input="auto"
        wallet-connect-project-id="66d5a2d55c125fff0bf241a58c1f24f8"
        rpc='{"http": "[YOUR_RPC_URL]"}'
      ></ethermail-subscribe>

      {/* Cookie Consent Popup */}
      <CookieConsent />
    </>
  );
}
