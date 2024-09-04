import groq from 'groq';
import { client2 } from '@/utils/client';
import { ExperienceCard } from './interfaces';

export async function getEperiencesCards(): Promise<ExperienceCard[]> {
  const query = groq`
    *[_type == "experiencesCards"] {
      _id,
      communityLogo {
        asset->{url, metadata {dimensions}}
      },
      communityName,
      experienceLocation,
      experienceType,
      communityDescription,
      xHandle,
      warpcastHandle,
      communityWebsite,
      published,
      eventDate
    }
  `;

  const data = await client2.fetch(query);

  return data as ExperienceCard[];
}
