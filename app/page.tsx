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
  const partnerTabData = await ContentProvider.getPartnerTabContent()


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
    partnerTestimonials,
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
      <div className="max-w-[804px] mt-[110px] px-4 md:mt-[170px] font-medium mx-auto min-h-[100px] text-center bg-no-repeat bg-[url('/section-bgsmall.svg')] md:bg-[url('/section-bg.svg')]"
      style={{
        backgroundPosition:"center top 15px"
      }}
      >
        <p className="text-[10px] sm:text-base tracking-[15%] text-[#000001]">{sheHerLive.subtitle}</p>
        <h3 className="text-2xl sm:text-5xl font-black md:text-[68px] md:my-[18px] leading-[68px] text-[#4428F2]">{sheHerLive.title}</h3>
        <p className="text-xs md:text-xl font-mono md:leading-[30px] text-[#757575]">{sheHerLive.description}</p>
      </div>
      <Tabs
        brand={brand}
        partnerTestimonials={partnerTestimonials}
        partnerTabData={partnerTabData}
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
        pricing={pricing}
      />

      {/* <Granting granting={granting} register={register} /> */}
      {/* <Educational educationalProgramming={educationalProgramming} /> */}
      {/* <SherCoActive sherCoActive={sherCoActive} /> */}
      {/* <Members memberSpotlight={memberSpotlight} /> */}
      {/* <Ecosystem ecosystemSpotlight={ecosystemSpotlight} /> */}
      {/* <Mission mission={mission} /> */}
      {/* <Testimonials testimonials={testimonials} /> */}
      {/* <Onboard onboard={onboard} /> */}
      {/* <Pricing pricing={pricing} /> */}
    </main>
  );
}
