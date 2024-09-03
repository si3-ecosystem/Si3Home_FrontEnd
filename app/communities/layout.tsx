import type { Metadata } from "next";
import "../../app/globals.css";
import Footer from "@/components/Footer";
import CustomLayout from "@/components/provider/CustomLayout";
import CommunityNavbar from "./CommunityNavbar";
import { getSeoData } from "../layout";

export const revalidate = 3600;

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
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="scroll-smooth">
        <CustomLayout>
          <CommunityNavbar utils={utils} />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </CustomLayout>
      </body>
    </html>
  );
}
