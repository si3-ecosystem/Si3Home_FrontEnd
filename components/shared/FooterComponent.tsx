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

  // Check if the consent is already stored in localStorage
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookie = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const declineCookie = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-6 w-[90%] max-w-[600px] z-50">
      <div className="text-sm text-gray-700">
        <p>
          By clicking <span className="font-bold">'Accept'</span> or continuing to browse our website, you agree to our{' '}
          <Link href="/terms-of-service">
            <span className="text-blue-600 hover:underline">Terms of Service</span>
          </Link>{' '}
          and{' '}
          <Link href="/privacy-policy">
            <span className="text-blue-600 hover:underline">Privacy Policy</span>
          </Link>
          , and to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our{' '}
          <Link href="/cookie-policy">
            <span className="text-blue-600 hover:underline">Cookie Policy</span>
          </Link>{' '}
          for more information.
        </p>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={acceptCookie}
          className="bg-black text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          Accept
        </button>
        <button
          onClick={declineCookie}
          className="bg-white text-black py-2 px-6 rounded-full border border-black relative overflow-hidden transition-all duration-300 group hover:border-transparent"
        >
          <span className="relative z-10 group-hover:text-white">Decline</span>
          <span className="absolute inset-0 bg-blue-700 transition-all duration-300 group-hover:translate-x-0 group-hover:text-white transform translate-x-[-100%] z-0"></span>
        </button>
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
