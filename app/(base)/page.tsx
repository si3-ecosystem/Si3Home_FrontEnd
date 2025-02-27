import Tabs from "@/components/Tabs";
import ContentProvider from "@/utils/ContentProvider";
import { Suspense } from "react";
import Hero from "./components/v2/Hero";

export const revalidate = 3600;

export default async function Home() {
  const content = await ContentProvider.getContent();
  const partnerTabData = await ContentProvider.getPartnerTabContent();

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
    community,
    pricing,
    testimonials,
    register,
    sherExplorer,
    sheherBuildingweb3,
    partners,
    partnerTestimonials,
    joinBuildersTab,
    joinExplorersTab,
    joinLeadersTab,
  } = content;

  return (
    <main className="overflow-x-hidden">
      <Hero partners={partners} />

      <div id="ecosystem-header"></div>
      <div className="max-w-[804px] mt-16 px-4 md:mt-[170px] font-medium mx-auto lg:min-h-[100px] text-center bg-no-repeat">
        <p className="text-[10px] sm:text-base tracking-[15%] text-[#000001]">
          {sheHerLive.subtitle}
        </p>
        <h3 className="text-2xl sm:text-4xl font-black font-clesmont md:text-[56px] md:my-[18px] leading-[68px] text-black">
          {sheHerLive.title}
        </h3>
        <p className="text-xs max-w-[610px] mx-auto md:text-xl md:leading-[30px] text-[#757575]">
          {sheHerLive.description}
        </p>
      </div>
      <Suspense fallback={null}>
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
          sheherBuildingweb3={sheherBuildingweb3}
          community={community}
          memberSpotlight={memberSpotlight}
          sheHerLive={sheHerLive}
          sherexplorer={sherExplorer}
          granting={granting}
          register={register}
          pricing={pricing}
          joinBuildersTab={joinBuildersTab}
          joinExplorersTab={joinExplorersTab}
          joinLeadersTab={joinLeadersTab}
        />
      </Suspense>
    </main>
  );
}
