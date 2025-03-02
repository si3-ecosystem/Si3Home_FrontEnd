import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import image from "./logo.webp";
import urlFor from "@/utils/urlFor";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Script from "next/script";
import { getSeoData } from "@/utils/seo";
import { Toaster, toast } from "react-hot-toast";

export const revalidate = 3600;

async function sharedMetaData() {
  const settings = await getSeoData();

  const seoLogoUrl = settings?.seoLogo
    ? urlFor(settings?.seoLogo).width(1200).height(630).fit("crop").url()
    : "/icons/logo.webp";

  return {
    // enable this for resolving opengraph image
    metadataBase: new URL("https://www.si3.space/"),
    title: {
      default: settings?.seoTitle || "si3",
      template: "%s",
    },
    description:
      settings?.overview ||
      "Co-activating growth and financial inclusion opportunities for women and non-binary web3 leaders through personal brand development, public speaking, partnerships, and DeFi.",
    icons: {
      icon: [
        {
          rel: "icon",
          url: settings?.favicon || "/icons/fav.png",
          sizes: "16x16",
        },
        {
          rel: "icon",
          url: settings?.favicon || "/icons/fav.png",
          sizes: "16x16",
        },
        {
          rel: "apple-touch-icon",
          url: settings?.favicon || "/icons/fav.png",
          sizes: "16x16",
        },
        {
          rel: "mask-icon",
          url: settings?.favicon || "/icons/fav.png",
          color: "#5bbad5",
        },
        {
          rel: "icon",
          url: settings?.favicon || "/icons/fav.png",
          sizes: "16x16",
        },
      ],
    },

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
          url: seoLogoUrl,
          width: 1200,
          height: 170,
          alt: settings?.seoTitle || "si3 Banner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: settings?.seoTitle || "si3",
      description:
        settings?.overview ||
        "Creating Pathways For Diverse Voices Of the New Economy",
      images: [
        {
          url: seoLogoUrl,
          width: 1200,
          height: 170,
          alt: settings?.seoTitle || "si3 Banner",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateMetadata() {
  const metadata = await sharedMetaData();
  return metadata;
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/45396312.js"
        ></script>
        {children}
        <Toaster position="top-center" reverseOrder={false} gutter={8} />
      </body>
    </html>
  );
}
