'use client'; // This makes this component a Client Component

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import urlFor from "@/utils/urlFor";
import { setCookie, getCookie } from "cookies-next";

interface FooterProps {
  footer: {
    logo: {
      asset: {
        url: () => string;
      };
      alt: string;
    };
    twitter: string;
    linkedIn: string;
    mediakit: string;
  };
}

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = getCookie("localConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookie = () => {
    setShowConsent(false);
    setCookie("localConsent", "true", { maxAge: 30 * 24 * 60 * 60 });
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div
        className="bg-white rounded-lg p-6 shadow-lg"
        style={{
          position: "relative",
          width: "552px",
          height: "197px",
          left: "19.5px",
          top: "281px",
          marginBottom: "4%",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "16px",
        }}
      >
        <div className="flex items-start">
          <div>
            <svg
              width="41"
              height="41"
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
          </div>
          <div className="ml-4 text-sm text-gray-700">
            <p>
              By clicking "Accept" or continuing to browse our website, you
              agree to our{" "}
              <a
                href="/terms-of-service"
                className="text-blue-600 hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>
              , and specifically to the storing of cookies on your device to
              enhance site navigation, analyze site usage, and assist in our
              marketing efforts. View our{" "}
              <a
                href="/cookie-policy"
                className="text-blue-600 hover:underline"
              >
                Cookie Policy
              </a>{" "}
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

export default function FooterComponent({ footer }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div id="stayConnected" className="bg-blackish px-5 md:px-16 py-8">
        <div className="py-5 flex flex-col md:flex-row items-center gap-5 justify-between">
          <Link href="/" className="text-white text-5xl font-bold uppercase">
            <img
              src={urlFor(footer.logo.asset).url()}
              alt={footer.logo.alt}
              className="w-24 h-12"
            />
          </Link>
          <div className="flex items-center gap-6 shrink-0">
            <a href={footer.twitter} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/icons/x.svg"}
                alt="icon"
                width={30}
                height={30}
                className="w-7 h-7"
              />
            </a>
            <a href={footer.linkedIn} target="_blank" rel="noopener noreferrer">
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
              href={footer.mediakit}
              target="_blank"
              rel="noopener noreferrer"
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
      <ethermail-subscribe
        widget="677f0f8f690e56d4d9800180"
        theme="light"
        input="auto"
        wallet-connect-project-id="66d5a2d55c125fff0bf241a58c1f24f8"
        rpc='{"http": "[YOUR_RPC_URL]"}'
      ></ethermail-subscribe>
      <CookieConsent />
    </>
  );
}
