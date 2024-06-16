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

export default function Home() {
  return (
    <main className="">
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
