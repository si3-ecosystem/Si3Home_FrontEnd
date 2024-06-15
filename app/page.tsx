import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Granting from "@/components/Granting";
import Mission from "@/components/Mission";
import Onboard from "@/components/Onboard";
import Pricing from "@/components/Pricing";
import SherCoActive from "@/components/SherCoActive";
import SherLive from "@/components/SherLive";

export default function Home() {
  return (
    <main className="">
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
