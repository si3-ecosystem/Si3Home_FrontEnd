import dynamic from "next/dynamic";
import groq from "groq";
import { client } from "@/utils/client";

const FooterComponent = dynamic(() => import("./shared/FooterComponent"), { ssr: true });

async function getFooter() {
  const query = groq`*[_type == 'utils'][0]`;
  return await client.fetch(query);
}

export default async function Footer() {
  const footer = await getFooter();
  return <FooterComponent footer={footer} />;
}
