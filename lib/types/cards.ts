import groq from 'groq';
import client from '@/client';
import { Card } from './interfaces';

export async function getCards(): Promise<Card[]> {
  const query = groq`
    *[_type == "cards"] {
      _id,
      communityLogo {
        asset->{url, metadata {dimensions}}
      },
      communityName,
      communityLocation,
      communityType,
      communityDescription,
      xHandle,
      warpastHandle,
      communityWebsite,
      published
    }
  `;

  const data = await client.fetch(query);

  return data as Card[];
}
