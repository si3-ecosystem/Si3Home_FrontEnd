import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Granting from "@/components/Granting";
import Mission from "@/components/Mission";
import Onboard from "@/components/Onboard";
import Pricing from "@/components/Pricing";
import SherCoActive from "@/components/SherCoActive";
import SherLive from "@/components/SherLive";
import { client } from "@/utils/client";
import groq from "groq";

async function getBanner() {
  const query = groq`*[_type == 'hero']`;
  const data = await client.fetch(query);

  return data;
}

async function getSherLive() {
  const query = groq`*[_type == 'about']`;
  const data = await client.fetch(query);

  return data;
}
async function getGranting() {
  const query = groq`*[_type == 'grantingAccess'] {..., "builders":builders[]->{...}}`;
  const data = await client.fetch(query);

  return data;
}
async function getSherCoActive() {
  const query = groq`*[_type == 'sihercoactive']`;
  const data = await client.fetch(query);

  return data;
}
async function getEducationalProgramming() {
  const query = groq`*[_type == 'educationalProgramming'] {...,"Events":Events[]->{...}}`;
  const data = await client.fetch(query);

  return data;
}
async function getMemberSpotlight() {
  const query = groq`*[_type == 'memberSpotlight'] {...,"teammembers":teammembers[]->{...}}`;
  const data = await client.fetch(query);

  return data;
}
async function getEcosystemSpotlight() {
  const query = groq`*[_type == 'ecosystemSpotlight'] {...,"teamMember":teamMember->{...}}`;
  const data = await client.fetch(query);

  return data;
}

async function getBrand() {
  const query = groq`*[_type == 'web3brand']`;
  const data = await client.fetch(query);

  return data;
}
async function getMission() {
  const query = groq`*[_type == 'ourMission']`;
  const data = await client.fetch(query);

  return data;
}
async function getOnboard() {
  const query = groq`*[_type == 'onboard']`;
  const data = await client.fetch(query);

  return data;
}
async function getPricing() {
  const query = groq`*[_type == 'pricing']`;
  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const [
    hero,
    sheHerLive,
    granting,
    sherCoActive,
    educationalProgramming,
    memberSpotlight,
    ecosystemSpotlight,
    brand,
    mission,
    onboard,
    pricing,
  ] = await Promise.all([
    getBanner(),
    getSherLive(),
    getGranting(),
    getSherCoActive(),
    getEducationalProgramming(),
    getMemberSpotlight(),
    getEcosystemSpotlight(),
    getBrand(),
    getMission(),
    getOnboard(),
    getPricing(),
  ]);

  return (
    <main className="scroll-smooth">
      <Banner />
      <SherLive />
      <Granting />
      <SherCoActive />
      <Brand />
      <Mission />
      <Onboard />
      <Pricing />
    </main>
  );
}
