import type { Metadata } from "next";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomLayout from "@/components/provider/CustomLayout";
import image from "./logo.webp";
import { WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import groq from "groq";
import { client } from "@/utils/client";
import urlFor from "@/utils/urlFor";
import LayoutWrapper from "@/components/LayoutWrapper";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Script from "next/script"; // ✅ Fixed Import
import createWeb3Wallet from "@walletconnect/web3wallet"; // ✅ Fixed Import
import { SignClient } from "@walletconnect/sign-client";

// Set Project ID
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) throw new Error("NEXT_PUBLIC_PROJECT_ID is missing");

// Define metadata
export const metadata = {
  name: "Si3",
  description: "Web3 Platform",
  url: "https://www.si3.space",
  icons: ["https://www.si3.space/logo.webp"],
};

// Wagmi Configuration
const wagmiConfig = {
  autoConnect: true,
  connectors: [],
};

// Initialize WalletConnect
async function initializeWalletConnect() {
  const signClient = await SignClient.init({
    projectId,
    metadata: {
      name: "Si3 Wallet",
      description: "Web3 Platform",
      url: "https://www.si3.space",
      icons: ["https://www.si3.space/logo.webp"],
    },
  });

  const web3Wallet = await new createWeb3Wallet({
    core: signClient.core,
    metadata: {
      name: "Si3 Wallet",
      description: "Web3 Platform",
      url: "https://www.si3.space",
      icons: ["https://www.si3.space/logo.webp"],
    },
  });

  return { signClient, web3Wallet };
}

// Fetch SEO Data
export async function getSeoData() {
  const query = groq`*[_type == "utils"][0]`;
  const data = await client.fetch(query);
  return data;
}

// Generate Metadata
async function sharedMetaData(params: any) {
  const settings = await getSeoData();
  const seoLogoUrl = settings?.seoLogo
    ? urlFor(settings?.seoLogo).url()
    : "/icons/logo.webp";

  return {
    metadataBase: new URL("https://www.si3.space/"),
    title: {
      default: settings?.seoTitle || "Si3",
      template: "%s",
    },
    icons: {
      icon: [{ rel: "icon", url: "/icons/favicon-16x16.png", sizes: "16x16" }],
    },
    description: settings?.overview || "Creating Pathways For Diverse Voices Of the New Economy",
    keywords: ["si3", "web3"],
    authors: [{ name: "Si3 Team" }],
    openGraph: {
      type: "website",
      url: "https://www.si3.space",
      title: settings?.seoTitle || "Si3",
      description: settings?.overview || "Web3 Platform",
      images: [{ url: seoLogoUrl }, { url: image.src }],
    },
    twitter: {
      card: "summary_large_image",
      title: settings?.seoTitle || "Si3",
      description: settings?.overview || "Web3 Platform",
      images: ["https://www.si3.space/logo.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generate Metadata for Next.js
export async function generateMetadata({ params }: any) {
  return await sharedMetaData(params);
}

// Root Layout Component
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const utils = await getSeoData();

  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.markfi.xyz/scripts/analytics/0.11.21/cookie3.analytics.min.js"
          integrity="sha384-wtYmYhbRlAqGwxc5Vb9GZVyp/Op3blmJICmXjRiJu2/TlPze5dHsmg2gglbH8viT"
          crossOrigin="anonymous"
          async
          strategy="lazyOnload"
          site-id="434ad72e-5f88-4f99-b163-6107f173b5fa"
        />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100..700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <script id="hs-script-loader" async defer src="//js.hs-scripts.com/45396312.js"></script>
          <CustomLayout>
            <LayoutWrapper>{children}</LayoutWrapper>
          </CustomLayout>
      </body>
    </html>
  );
}
