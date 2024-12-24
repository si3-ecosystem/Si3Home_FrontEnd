import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Ecosystem from "@/components/Ecosystem";
import Educational from "@/components/Educational";
import Granting from "@/components/Granting";
import Members from "@/components/Members";
import Mission from "@/components/Mission";
import Onboard from "@/components/Onboard";
import Pricing from "@/components/Pricing";
import SherCoActive from "@/components/SherCoActive";
import SherLive from "@/components/SherLive";
import Tabs from "@/components/Tabs";
import Testimonials from "@/components/Testimonials";
import { client } from "@/utils/client";
import groq from "groq";

export const revalidate = 3600;

async function getBanner() {
  const query = groq`*[_type == 'hero'][0]`;
  const data = await client.fetch(query);

  return data || {};
}
async function getRegister() {
  const query = groq`*[_type == 'register'][0]`;
  const data = await client.fetch(query);

  return data || {};
}

async function getSherLive() {
  const query = groq`*[_type == 'about'][0]`;
  const data = await client.fetch(query);
  return data || {};
}
async function getGranting() {
  const query = groq`*[_type == 'grantingAccess'][0] {..., "builders":builders[]->{...}}`;
  const data = await client.fetch(query);

  return data || {};
}
async function getSherCoActive() {
  const query = groq`*[_type == 'sihercoactive'][0]`;
  const data = await client.fetch(query);

  return data || {};
}
async function getEducationalProgramming() {
  const query = groq`*[_type == 'educationalProgramming'][0] {...,"Events":Events[]->{...,"presenters":presenters[]->{...}}}`;
  const data = await client.fetch(query);

  return data || {};
}
async function getMemberSpotlight() {
  const query = groq`*[_type == 'memberSpotlight'][0] {...,"teammembers":teammembers[]->{...}}`;
  const data = await client.fetch(query);

  return data || {};
}
async function getEcosystemSpotlight() {
  const query = groq`*[_type == 'ecosystemSpotlight'][0] {...,"spotlightList":spotlightList[]->{...,"teamMember":teamMember->{...}}}`;
  const data = await client.fetch(query);

  return data || {};
}

async function getBrand() {
  const query = groq`*[_type == 'web3brand'][0]`;
  const data = await client.fetch(query);

  return data || {};
}
async function getMission() {
  const query = groq`*[_type == 'ourMission'][0]`;
  const data = await client.fetch(query);

  return data || {};
}
async function getOnboard() {
  const query = groq`*[_type == 'onboard'][0]`;
  const data = await client.fetch(query);

  return data || {};
}
async function getPricing() {
  const query = groq`*[_type == 'pricing']`;
  const data = await client.fetch(query);

  return data;
}
async function getTestimonials() {
  const query = groq`*[_type == 'testimonials']`;
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
    testimonials,
    register,
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
    getTestimonials(),
    getRegister(),
  ]);

  return (
    <main className="scroll-smooth overflow-x-hidden">
      <Banner hero={hero} />
      {/* <SherLive
        sheHerLive={sheHerLive}
        educationalProgramming={educationalProgramming}
        sherCoActive={sherCoActive}
        mission={mission}
        ecosystemSpotlight={ecosystemSpotlight}
      /> */}
      <div className="max-w-[704px] mt-[100px] font-medium mx-auto min-h-[180px] text-center">
        <p className="text-[13px] tracking-[15%] text-[#000001]">CREATORS. BUILDERS. COMMUNITY LEADERS.</p>
        <h3 className="text-[64px] my-[18px] leading-[68px] text-[#4428F2] font-ibm">{`SI<3> ECOSYSTEM`}</h3>
        <p className="text-xl font-normal leading-[30px] tracking-tight">WOMEN & NON-BINARY WEB3 LEADERS (show SI HER CO-ACTIVE, EDUCATIONAL PROGRAMMING and CO-ACTIVATOR SPOTLIGHT)</p>
      </div>
      <Tabs
        educationalProgramming={educationalProgramming}
        sherCoActive={sherCoActive}
        mission={mission}
        ecosystemSpotlight={ecosystemSpotlight}
        testimonials={testimonials}
        onboard={onboard}
        memberSpotlight={memberSpotlight}
        sheHerLive={sheHerLive}
        granting={granting}
        register={register}
      />

      {/* <Granting granting={granting} register={register} /> */}
      {/* <Educational educationalProgramming={educationalProgramming} /> */}
      {/* <SherCoActive sherCoActive={sherCoActive} /> */}
      <Brand brand={brand} />
      {/* <Members memberSpotlight={memberSpotlight} /> */}
      {/* <Ecosystem ecosystemSpotlight={ecosystemSpotlight} /> */}
      {/* <Mission mission={mission} /> */}
      {/* <Testimonials testimonials={testimonials} /> */}
      {/* <Onboard onboard={onboard} /> */}
      <Pricing pricing={pricing} />
    </main>
  );
}
