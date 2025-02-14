"use client";
import ChoosePathWaySection from "./components/ChoosePathWay";
import OnboardHero from "./components/OnboardHero";
import FormTab from "./components/FormTab";
import { TabValues } from "@/lib/types/interfaces";
import { useState } from "react";
import { PartnerFooterInfo } from "@/components/JoinTabFooter";

interface Props {
  onboardingPathways: any[];
}
export default function ClientPage(props: Props) {
  const [activeTab, setActiveTab] = useState<TabValues>("explorers");

  const heroData = {
    title: "Start your Journey Here with SI<3>",
  };

  return (
    <main>
      <OnboardHero heroData={heroData} />
      <section className="bg-[url('/images/get-started.png')] bg-cover">
        <div className="max-w-[1096px] mb-[100px] mx-auto bg-white">
          <ChoosePathWaySection
            {...{ activeTab, setActiveTab }}
            programs={props.onboardingPathways}
          />
          <FormTab activeTab={activeTab} />
        </div>
      </section>
      <PartnerFooterInfo
        footerData={{
          title: "INTERESTED IN PARTNERING WITH US?",
          description:
            "We are open to exploring collaborations with impactful organizations aligned with the values on our website.",
          btnTitle: "Inquire Here",
        }}
      />
    </main>
  );
}
