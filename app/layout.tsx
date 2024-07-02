import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomLayout from "@/components/provider/CustomLayout";

import groq from "groq";
import { client } from "@/utils/client";
import urlFor from "@/utils/urlFor";

export const revalidate = 10;

export async function getSeoData() {
  const query = groq`*[_type == 'utils'][0]`;
  const data = await client.fetch(query);

  return data;
}

async function sharedMetaData(params: any) {
  const settings = await getSeoData();

  return {
    // enable this for resolving opengraph image
    metadataBase: new URL("https://si3home-frontend.vercel.app"),
    title: {
      default: settings?.seoTitle || "si3",
      template: "%s",
    },
    icons: [urlFor(settings?.seoLogo?.asset).url(), "/icons/logo.webp"],
    description:
      settings?.overview ||
      "Creating Pathways For Diverse Voices Of the New Economy",
    keywords: ["si3", "si/her", "web3"],
    authors: [{ name: "Asraful" }],
    canonical: "https://si3home-frontend.vercel.app",
    openGraph: {
      images: [
        {
          url: urlFor(settings?.seoLogo).url() || "/icons/logo.webp",
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      title: settings?.seoTitle || "si3",
      card: "Creating Pathways For Diverse Voices Of the New Economy",
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
