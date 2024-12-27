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
import ContentProvider from "@/utils/ContentProvider";

export const revalidate = 3600;



export default async function Home() {
  const content = await ContentProvider.getContent()
  const {
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
    sherExplorer,
    partners,
 } = content;



  return (
    <main className="scroll-smooth overflow-x-hidden">
      <Banner hero={hero} partners={partners}/>
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
        brand={brand}
        educationalProgramming={educationalProgramming}
        sherCoActive={sherCoActive}
        mission={mission}
        ecosystemSpotlight={ecosystemSpotlight}
        testimonials={testimonials}
        onboard={onboard}
        memberSpotlight={memberSpotlight}
        sheHerLive={sheHerLive}
        sherexplorer={sherExplorer}
        granting={granting}
        register={register}
      />

      {/* <Granting granting={granting} register={register} /> */}
      {/* <Educational educationalProgramming={educationalProgramming} /> */}
      {/* <SherCoActive sherCoActive={sherCoActive} /> */}
      {/* <Members memberSpotlight={memberSpotlight} /> */}
      {/* <Ecosystem ecosystemSpotlight={ecosystemSpotlight} /> */}
      {/* <Mission mission={mission} /> */}
      {/* <Testimonials testimonials={testimonials} /> */}
      {/* <Onboard onboard={onboard} /> */}
      <Pricing pricing={pricing} />
    </main>
  );
}
