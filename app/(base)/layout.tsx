import "bootstrap-icons/font/bootstrap-icons.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSeoData } from "@/utils/seo";

export const revalidate = 3600;

async function sharedMetaData() {
  const settings = await getSeoData();
  return {
    metadataBase: new URL("https://www.si3.space/"),
    title: { default: settings?.seoTitle || "si3", template: "%s" },
    icons: {
      icon: [
        { rel: "icon", url: "/icons/favicon-16x16.png", sizes: "16x16" },
        { rel: "icon", url: "/icons/favicon-16x16.png", sizes: "16x16" },
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
      images: [{ url: "/icons/logo.webp" }],
    },
    twitter: {
      card: "summary_large_image",
      title: settings?.seoTitle || "si3",
      description:
        settings?.overview ||
        "Creating Pathways For Diverse Voices Of the New Economy",
      images: ["https://www.si3.space/icons/logo.webp"],
    },
    robots: { index: true, follow: true },
  };
}

export async function generateMetadata() {
  return await sharedMetaData();
}

export default async function BaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
