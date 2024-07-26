import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
  useCdn: false,
});

// Client for the second Sanity project
export const client2 = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID_2,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_2,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION_2 || '2023-05-03',
  token: process.env.SANITY_API_TOKEN_2, // Token for authenticated operations
  useCdn: false,
});