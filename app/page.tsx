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
import Testimonials from "@/components/Testimonials";

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
      <Educational />
      <SherCoActive />
      <Brand />
      <Members />
      <Ecosystem />
      <Mission />
      <Testimonials />
      <Onboard />
      <Pricing />
    </main>
  );
}
