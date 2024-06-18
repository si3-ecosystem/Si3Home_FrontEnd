import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomLayout from "@/components/provider/CustomLayout";

export const metadata: Metadata = {
  title: "si3",
  description: "Creating Pathways For Diverse Voices Of the New Economy",
  metadataBase: new URL("https://si3home-frontend.vercel.app"),
  icons: ["favicon.ico", "/favicon.ico"],
  openGraph: {
    title: "si3",
    type: "website",
    locale: "en",
    url: "https://si3home-frontend.vercel.app",
    siteName: "si3",
    description: "Creating Pathways For Diverse Voices Of the New Economy",
    images: [
      {
        url: "https://si3home-frontend.vercel.app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "SI3 Home Page",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="scroll-smooth">
        <CustomLayout>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </CustomLayout>
      </body>
    </html>
  );
}
