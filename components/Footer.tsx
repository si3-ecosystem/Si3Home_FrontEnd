import FooterComponent from "./shared/FooterComponent";
import groq from "groq";
import { client } from "@/utils/client";
import { Suspense } from "react";

async function getFooter() {
  const query = groq`*[_type == 'utils'][0]`;
  return await client.fetch(query);
}

export default async function Footer() {
  const footer = await getFooter();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FooterComponent/>
    </Suspense>
  );
}
