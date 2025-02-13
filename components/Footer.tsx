import FooterComponent from "./shared/FooterComponent";
import groq from "groq";
import { client } from "@/utils/client";

async function getFooter() {
  const query = groq`*[_type == 'utils'][0]`;
  const data = await client.fetch(query);

  return data;
}
export default async function Footer() {
  const footer = await getFooter();
  return <FooterComponent footer={footer} />;
}
