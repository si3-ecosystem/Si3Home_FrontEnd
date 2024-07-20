import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "h4ttr3aq"; // "pv8y60vp" "38kwpfln"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
