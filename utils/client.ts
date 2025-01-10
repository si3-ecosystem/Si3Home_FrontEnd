import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token:process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
  useCdn: false,
});

// Client for the second Sanity project
export const client2 = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID_2,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_2,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION_2 || '2023-05-03',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // Token for authenticated operations
  useCdn: false,
});
