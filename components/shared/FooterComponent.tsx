'use client'; // Client Component

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import urlFor from "@/utils/urlFor";
import { setCookie, getCookie } from "cookies-next"; // Cookies management

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
    const consentGiven = getCookie("localConsent");
    if (!consentGiven) setShowConsent(true); // Show popup if consent not given
  }, []);

  const acceptCookie = () => {
    setShowConsent(false);
    setCookie("localConsent", "true", { maxAge: 30 * 24 * 60 * 60 });
  };

  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg w-[552px] h-[197px]">
        <div className="flex items-start">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG content */}
          </svg>
          <div className="ml-4 text-sm text-gray-700">
            <p>
              By clicking "Accept" or continuing to browse our website, you
              agree to our{" "}
              <Link href="/terms-of-service">
                <a className="text-blue-600 hover:underline">Terms of Service</a>
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy">
                <a className="text-blue-600 hover:underline">Privacy Policy</a>
              </Link>
              . View our{" "}
              <Link href="/cookie-policy">
                <a className="text-blue-600 hover:underline">Cookie Policy</a>
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
      <div id="stayConnected" className="bg-black px-5 md:px-16 py-8">
        <div className="py-5 flex flex-col md:flex-row items-center gap-5 justify-between">
          {footer?.logo?.asset && (
            <Link href="/" passHref>
              <Image
                src={urlFor(footer.logo.asset).url()}
                alt={footer.logo.alt}
                width={96}
                height={48}
                className="w-24 h-12"
              />
            </Link>
          )}
          <div className="flex items-center gap-6">
            <a href={footer.twitter} target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/x.svg"
                alt="Twitter icon"
                width={30}
                height={30}
              />
            </a>
            <a href={footer.linkedIn} target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/linkedIn.svg"
                alt="LinkedIn icon"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-400" />

        <div className="flex flex-col md:flex-row items-center justify-between text-white">
          <div className="flex gap-4">
            <Link href="/privacy-policy">
              <a className="text-sm md:text-base">Privacy Policy</a>
            </Link>
            <Link href="/member-policy">
              <a className="text-sm md:text-base">Member Policy</a>
            </Link>
            {footer?.mediakit && (
              <a
                href={footer.mediakit}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base"
              >
                Media Kit
              </a>
            )}
          </div>
          <p className="text-sm md:text-base">
            Copyright {currentYear} {"SI<3>"}.
          </p>
        </div>
      </div>

      <CookieConsent />
    </>
  );
};

export default FooterComponent;
