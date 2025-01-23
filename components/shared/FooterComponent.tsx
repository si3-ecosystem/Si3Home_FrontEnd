'use client'; // This makes this component a Client Component

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import urlFor from "@/utils/urlFor";
import { setCookie, getCookie } from "cookies-next"; // Importing cookie functions

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
    const consentGiven = getCookie("localConsent");
    if (!consentGiven) {
      setShowConsent(true); // Show the popup if no consent is given
    }
  }, []);

  const acceptCookie = () => {
    // Accept cookies and set the cookie consent flag in cookies
    setShowConsent(false); // Hide the popup
    setCookie("localConsent", "true", { maxAge: 30 * 24 * 60 * 60 }); // Set cookie consent to true for 30 days
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
      <div id="stayConnected" className="bg-blackish px-5 md:px-16 py-8">
        <div className="py-5 flex flex-col md:flex-row items-center gap-5 justify-between">
          <Link href="/" className="text-white text-5xl font-bold uppercase">
            <img
              src={urlFor(footer?.logo?.asset).url()}
              alt={footer?.logo?.alt}
              className="w-24 h-12"
            />
          </Link>

          <div className="flex items-center gap-6 shrink-0">
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
          <div className="flex items-center gap-4 md:gap-6">
            <p className="text-sm md:text-base">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
            <p className="text-sm md:text-base">
              <Link href="/member-policy">Member Policy</Link>
            </p>
            <a
              href={footer?.mediakit}
              target="_blank"
              className="text-sm md:text-base"
            >
              Media Kit
            </a>
          </div>
          <h5 className="text-sm md:text-base">
            Copyright {currentYear} {"SI<3>"}.
          </h5>
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
