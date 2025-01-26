'use client';

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

    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookie = () => {

    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg w-[552px] h-[197px]">
        <div className="flex items-start">
          <svg
            width="81"
            height="81"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.8535 0.372314C19.7723 1.43172 19.0238 2.78359 18.6997 4.26217C18.3755 5.74076 18.4899 7.28179 19.0287 8.69634C19.5675 10.1109 20.5074 11.3375 21.7331 12.2257C22.9588 13.1139 24.4171 13.6251 25.9291 13.6968C26.6459 15.2143 27.8344 16.4592 29.3172 17.2455C30.8 18.0317 32.4974 18.3171 34.1557 18.059C34.1004 18.4573 34.0729 18.859 34.0735 19.2612C34.0735 23.1168 36.4802 26.319 39.6357 26.9323C38.4315 30.4006 36.2959 33.4704 33.4629 35.8055C30.6298 38.1406 27.2087 39.6509 23.5743 40.1708C19.94 40.6907 16.2326 40.2001 12.8585 38.753C9.48445 37.3058 6.5738 34.9578 4.44553 31.9662C2.31727 28.9747 1.0535 25.455 0.792715 21.793C0.531929 18.1309 1.28419 14.4677 2.96706 11.2047C4.64993 7.94179 7.19848 5.20503 10.3334 3.29432C13.4684 1.38361 17.0688 0.372682 20.7402 0.372314H20.8535Z"
              fill="black"
            />
            <circle cx="20.7402" cy="31.4834" r="2.2223" fill="black" />
            <circle cx="10.7402" cy="25.9279" r="1.1111" fill="black" />
            <circle cx="26.2957" cy="23.7056" r="1.1111" fill="black" />
            <circle cx="12.9624" cy="14.8168" r="3.3334" fill="black" />
            <circle cx="31.8513" cy="9.2612" r="2.2223" fill="black" />
            <circle cx="39.6291" cy="10.3723" r="1.1111" fill="black" />
            <circle cx="26.2957" cy="3.70565" r="1.1111" fill="black" />
          </svg>
          <div className="ml-4 text-sm text-gray-700">
            <p>
              By clicking &apos;Accept&apos; or continuing to browse our website, you
              agree to our{' '}
              <Link href="/terms-of-service">
                <span className="text-blue-600 hover:underline">
                  Terms of Service
                </span>
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy">
                <span className="text-blue-600 hover:underline">
                  Privacy Policy
                </span>
              </Link>
              , and to the storing of cookies on your device to enhance site
              navigation, analyze site usage, and assist in our marketing
              efforts. View our{" "}
              <Link href="/cookie-policy">
                <span className="text-blue-600 hover:underline">
                  Cookie Policy
                </span>
              </Link>{" "}
              for more information.
            </p>

          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={acceptCookie}
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

const FooterComponent: React.FC<FooterProps> = ({ footer }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div id="stayConnected" className="bg-white -mt-4">
        <div className="max-w-7xl border-gray-400 mx-auto lg:flex">
          <div className="flex-[2] sm:pr-4 min-h-[250px] border-b px-4 lg:px-0 lg:border-r border-gray-400 lg:py-12 flex items-center justify-center">
            <div className="flex-1">
              <div className="max-w-[500px]">
                <Link href="/" className="text-5xl font-bold uppercase">
                  <Image
                    src={urlFor(footer?.logo?.asset).url()}
                    alt={footer?.logo?.alt}
                    width={96}
                    height={48}
                  />
                </Link>
                <p className="my-2 mb-3">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
                <form
                  action=""
                  className="border rounded-full flex gap-x-4 items-center pl-8 p-2 border-black w-11/12 lg:min-h-[57px] lg:max-w-[375x]"
                >
                  <input
                    type="text"
                    className="flex-1 text-xs sm:text-base text-[#1E1E1E] placeholder:text-[#1E1E1E]"
                    placeholder="Subscribe to our newsletter"
                  />
                  <button className="text-white bg-black rounded-full py-2 px-3 sm:px-6">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 border-r pt-16 p-4 border-gray-400 flex lg:justify-center">
            <div>
              <p className="font-black text-2xl font-clesmont">SI Things</p>
              <div className="my-2 flex flex-col gap-2">
                <Link href="/privacy-policy">
                  <button className="block">Privacy Policy</button>
                </Link>
                <Link href="/member-policy">
                  <button className="block">Member Policy</button>
                </Link>
                <Link href="/media-kit">
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
                    <XIcon />
                    <span>Twitter X</span>
                  </button>
                </Link>
                <Link href={footer.linkedIn} target="_blank">
                  <button className="flex items-center gap-2">
                    <LinkedinIcon />
                    <span>LinkedIn</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t p-4 py-8 border-gray-400">
          <p className="text-sm max-w-7xl mx-auto text-center md:text-base">
            {"Copyright © "} {currentYear} {" Si<3>, Inc. All rights reserved."}
          </p>
        </div>
      </div>
      <CookieConsent />
    </>
  );
};

export default FooterComponent;
