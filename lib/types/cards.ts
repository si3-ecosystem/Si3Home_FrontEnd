import groq from 'groq';
import { client2 } from '@/utils/client';
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
      warpcastHandle,
      communityWebsite,
      published
    }
  `;

  const data = await client2.fetch(query);

  return data as Card[];
}
