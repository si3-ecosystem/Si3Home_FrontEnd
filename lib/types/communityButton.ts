import groq from 'groq';
import { client2 } from '@/utils/client';
import { CommunityButton } from './interfaces';

export async function getCommunityButton(): Promise<CommunityButton | null> {
  const query = groq`
    *[_type == "communityButton"][0]
  `;
  const data = await client2.fetch(query);
  console.log(data);
  
  return data as CommunityButton | null;
}
