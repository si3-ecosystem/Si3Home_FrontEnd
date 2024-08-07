import { Url } from 'next/dist/shared/lib/router/router';


export interface  Card {
  _type: 'cards';
  communityLogo: {
      asset: {
        _type:'reference',
        _ref:string
      };
  };
  communityName: string;
  communityType: string;
  communityDescription: string;
  communityLocation: string;
  xHandle: string;
  warpastHandle:string;
  communityWebsite: string;
  published:boolean;
}

export interface PolicyItem {
  title: string;
  description: string;
}

