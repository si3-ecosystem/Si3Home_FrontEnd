import groq from "groq";
import { client } from "@/utils/client";

export async function getSeoData() {
  const query = groq`*[_type == 'utils'][0]`;
  return await client.fetch(query);
}
