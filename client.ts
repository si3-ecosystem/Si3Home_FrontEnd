

// client.js
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-11-16',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false,
  perspective: 'previewDrafts'
});

const builder = imageUrlBuilder(client);

export function urlFor(source:any) {
  return builder.image(source);
}

export default client;

