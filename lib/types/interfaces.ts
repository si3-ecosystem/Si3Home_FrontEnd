import { Url } from 'next/dist/shared/lib/router/router';


export interface Card {
  _type: 'cards';
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
  warpastHandle: string;
  communityWebsite: string;
  published: boolean;
}


export interface PolicyItem {
  title: string;
  description: string;
}

