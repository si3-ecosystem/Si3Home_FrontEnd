import FooterComponent from "./shared/FooterComponent";
import groq from "groq";
import { client } from "@/utils/client";
import { Suspense } from "react";

async function getFooter() {
  const query = groq`*[_type == 'utils'][0]`;
  const data = await client.fetch(query);

  return data;
}

export default function Footer() {
  return (
    <Suspense fallback={<div>Loading Footer...</div>}>
      <FooterContent />
    </Suspense>
  );
}

async function FooterContent() {
  const footer = await getFooter();
  return <FooterComponent footer={footer} />;
}
