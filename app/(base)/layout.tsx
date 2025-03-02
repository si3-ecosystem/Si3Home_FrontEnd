import "bootstrap-icons/font/bootstrap-icons.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 3600;

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
