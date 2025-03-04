import { Url } from "next/dist/shared/lib/router/router";

export type TabValues = "explorers" | "leaders" | "creators";
export interface Card {
  _type: "cards";
  communityLogo: {
    asset: {
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
  };
  communityName: string;
  communityType: string;
  communityDescription: string;
  communityLocation: string;
  xHandle: string;
  warpcastHandle: string;
  communityWebsite: string;
  published: boolean;
  eventDate: string;
}

export interface ExperienceCard {
  _type: "experiencesCards";
  communityLogo: {
    asset: {
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
  };
  communityName: string;
  experienceType: string;
  communityDescription: string;
  experienceLocation: string;
  xHandle: string;
  warpcastHandle: string;
  communityWebsite: string;
  published: boolean;
  eventDate: string;
}

export interface PolicyItem {
  title: string;
  description: string;
}

export interface CommunityButton {
  cta: {
    link: string;
    text: string;
  };
}

export interface NewMemberData {
  memberType: TabValues;
  firstname: string;
  lastname: string;
  pronouns: string;
  email: string;
  pronouns_social_proof: string;
  exploring_interests: string;
  core_values: string[];
  self_description: string;
  source_of_information: string;
  joining_intentions: string;
}

export interface DiversityTrackerFormData {
  self_identity: string;
  age_range: string;
  ethnicity: string;
  disabality: string;
  sexual_orientation: string;
  equity_scale: number;
  improvement_suggesstions: string;
  grant_provider: string;
  grant_round: string;
  suggestions: string;
  active_grants_participated: boolean;
}
