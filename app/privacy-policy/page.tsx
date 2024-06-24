import React from 'react';

const Policy = () => {
  return (
    <div className="w-full relative bg-white md:py-[4rem] overflow-hidden text-center text-gray-200 font-[Fira Mono]">
      <div className="bg-[#F5F7FA] mt-5 md:mx-[4rem] px-[2rem] flex flex-col items-center md:text-[4rem] text-[2rem] text-[#383838]">
        <div className="relative leading-[4.25rem] uppercase font-bold pt-[7rem] pb-[2rem] ">
          Si Her Co-Active Member Policy
        </div>
        <div className="flex flex-col items-start text-left text-[1.5rem]">
          {policySections.map((section, index) => (
            <div key={index} className="self-stretch">
              <div className="leading-[4.25rem] uppercase font-medium">
                <ol className="font-inherit text-inherit pl-[1.325rem] text-[#373737]">
                  <li>{section.title}</li>
                </ol>
              </div>
              <div className="font-mono text-[1rem] leading-[2rem] font-fira-mono text-[#373737] pb- ">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const policySections = [
  {
    title: '1. Terms and conditions',
    content: `Si3 (the “Provider”) agrees to provide our members with access to our Si Her Talent Co-Active (the "Co-Active"). By registering for the Co-Active, our members (the “Member”) both the "Provider" & the "Member" agree to abide by the following terms and conditions.`,
  },
  {
    title: '2. Si Her Talent Co-Active',
    content: `The Provider agrees to provide access to all of the Co-Active features as described in the 'Si Her Talent Co-Active Overview' section below, active upon approval of the membership application and receiving a scholarship or making a payment.`,
  },
  {
    title: '3. Limited License',
    content: `By purchasing a membership to the Co-Active, the Member is granted a single-use, non-exclusive, non-transferable, revocable license to access, view and use the Si Her content. All ownership rights in the intellectual property related to the Platform remain with the Provider and the Member may not use or reproduce any of the content in any manner, without the express written consent of the Provider.`,
  },
  {
    title: '4. Collective Registration',
    content: `The Member agrees to put forth effort in building their professional web3 brand with Si Her by participating in the membership platform offerings, including developing the personal content for one's siher.eth website.`,
  },
  {
    title: '5. Fees',
    content: `The fee for the Membership Collective and Platform access is a one-time purchase of $300 USD.`,
  },
  {
    title: '6. Member Onboarding and Wallet Data collection',
    content: `We onboard our members with an application form with DeForm. The data we collect upon payment is name, email address, pronouns, values, and crypto wallet address. We request this data so that we can identify members in our co-active are women or non-binary and are value aligned. We collect wallet addresses and store these in a secure password-protected CRM to ensure we can cross-reference wallet ID's with payments made and member applications signed.`,
  },
  {
    title: '7. Gender Inclusion',
    content: `At this time, we are accepting members that self-identify with pronouns outside of He/Him. This is our gender inclusion policy and we therefore ask for this information upon signup.`,
  },
  {
    title: '8. Refund Policy',
    content: `The Provider wants you to be satisfied with your experience in our Co-Active, so we offer a money-back guarantee. To claim a refund under this guarantee, please send an e-mail to finance@si3.space within 60 days of your purchase. The refund will be processed within 10 business days by the Provider via the original payment method. This should be done in good faith in that the Member participated in the course content.`,
  },
];

export default Policy;
