import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomLayout from "@/components/provider/CustomLayout";
import image from "./logo.webp";

import groq from "groq";
import { client } from "@/utils/client";
import urlFor from "@/utils/urlFor";

import '@fortawesome/fontawesome-free/css/all.min.css';

export const revalidate = 3600;

export async function getSeoData() {
  const query = groq`*[_type == 'utils'][0]`;
  const data = await client.fetch(query);

  return data;
}

async function sharedMetaData(params: any) {
  const settings = await getSeoData();
  const seoLogoUrl = settings?.seoLogo
    ? urlFor(settings?.seoLogo).url()
    : "/icons/logo.webp";
  return {
    // enable this for resolving opengraph image
    metadataBase: new URL("https://www.si3.space/"),
    title: {
      default: settings?.seoTitle || "si3",
      template: "%s",
    },

    icons: {
      icon: [
        { rel: "icon", url: "/icons/favicon-16x16.png", sizes: "16x16" },
        {
          rel: "icon",
          url: "/icons/favicon-16x16.png",
          sizes: "16x16",
        },
        {
          rel: "apple-touch-icon",
          url: "/icons/favicon-16x16.png",
          sizes: "16x16",
        },
        {
          rel: "mask-icon",
          url: "/icons/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
        { rel: "icon", url: "/icons/favicon-16x16.png", sizes: "16x16" },
      ],
    },
    description:
      settings?.overview ||
      "Creating Pathways For Diverse Voices Of the New Economy",
    keywords: ["si3", "si/her", "web3"],
    authors: [{ name: "Asraful" }],
    canonical: "https://www.si3.space",
    openGraph: {
      type: "website",
      url: "https://www.si3.space",
      title: settings?.seoTitle || "si3",
      description:
        settings?.overview ||
        "Creating Pathways For Diverse Voices Of the New Economy",
      images: [
        {
          url: "/icons/logo.webp",
        },
        {
          url: image.src,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: settings?.seoTitle || "si3",
      description:
        settings?.overview ||
        "Creating Pathways For Diverse Voices Of the New Economy",
      images: ["https://www.si3.space/icons/logo.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateMetadata({ params }: any) {
  return await sharedMetaData(params);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const utils = await getSeoData();
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400&display=swap"
          rel="stylesheet"
        />
          <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" rel="stylesheet"></link>
         <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
         <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="scroll-smooth">
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/45396312.js"
        ></script>
        <CustomLayout>
          <Navbar utils={utils} />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </CustomLayout>
      </body>
    </html>
  );
}
