/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env:{
    NEXT_PUBLIC_SANITY_PROJECT_ID:"h4ttr3aq",
    NEXT_PUBLIC_SANITY_DATASET:"production",
    NEXT_PUBLIC_SANITY_API_VERSION:"2023-05-03",
    NEXT_PUBLIC_SANITY_PROJECT_ID_2:"h4ttr3aq",
    NEXT_PUBLIC_SANITY_DATASET_2:"production",
    NEXT_PUBLIC_SANITY_API_TOKEN:"skGojtvtGu5GRPeLuBo5XUVM347KQTcpPHsTtR0q1pagvLlEbg0AUWMCYFCc3iwIbX1gCg7ymyzdXcs0eaMgGbHb3DVdviIF17XrqE6fHEo4kDtQow0GtRQMGrL1YuPcDFbYgGawYwdsmOr8iWoA6LPjJcZCkYSSujnreREgTGriclMtuvm8"

  }
};

export default nextConfig;
