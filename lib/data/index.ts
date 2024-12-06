export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
  timestamp: string;
  category: string[];
  subcategory?: string;
}

export const categories = [
  "Web3 Education",
  "Grant Funding",
  "SI Her Growth Network",
  "All Videos",
  "All Posts",
] as const;

// In lib/data.ts
export const web3SubCategories = [
  "Smart Contract",
  "DeFi",
  "Digital Ownership",
  "DAO",
  "Metaverse Development",
];
export const mutableWeb3SubCategories = [...web3SubCategories] as string[];

export const videos: Video[] = [
  {
    id: "1",
    title: "HOW TO BUILD A SUCCESSFUL TEAM WITH ELENA",
    thumbnail: "/images/placeholdervideo.png",
    views: 1234,
    timestamp: "2 hours ago",
    category: ["Web3 Education"],
    subcategory: "Smart Contract",
  },
  {
    id: "2",
    title: "HOW TO BUILD A SUCCESSFUL TEAM WITH ELENA",
    thumbnail: "/images/placeholdervideo.png",

    views: 2345,
    timestamp: "3 hours ago",
    category: ["Grant Funding"],
  },
  {
    id: "3",
    title: "HOW TO BUILD A SUCCESSFUL TEAM WITH ELENA",
    thumbnail: "/images/placeholdervideo.png",

    views: 3456,
    timestamp: "4 hours ago",
    category: ["SI Her Growth Network"],
  },
  // Add more dummy data...
].concat(
  Array(9)
    .fill(null)
    .map((_, i) => ({
      id: `${i + 4}`,
      title: "HOW TO BUILD A SUCCESSFUL TEAM WITH ELENA",
      thumbnail: "/images/placeholdervideo.png",

      views: Math.floor(Math.random() * 5000),
      timestamp: `${Math.floor(Math.random() * 24)} hours ago`,
      category: ["All Videos"],
    }))
);
