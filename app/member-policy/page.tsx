import React from 'react';

const policySections = [
  {
    title: "1.Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time, including
      to reflect changes to our practices or for other operational,
      legal, or regulatory reasons. We will post the revised Privacy
      Policy on the Site, update the "Last updated" date and take
      any other steps required by applicable law.`,
  },
  {
    title: "2.How We Collect and Use Personal Information",
    content: `To provide the Services, we collect personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us. We aim to be transparent regarding our tech & marketing stack and the associated information and purpose of our data collection activities. We will never share or sell your data to any third parties.`,
  },
  {
    title: "3.What Personal Information We Collect",
    content: `The types of personal information we obtain about you depends
      on how you interact with our Site and use our Services. When
      we use the term "personal information", we are referring to
      information that identifies, relates to, describes or can be
      associated with you. The following sections describe the
      categories and specific types of personal information we
      collect.`,
  },
  {
    title: "4.Children's Data",
    content: `The Services are not intended to be used by children, and we
      do not knowingly collect any personal information about
      children. If you are the parent or guardian of a child who has
      provided us with their personal information, you may contact
      us using the contact details set out below to request that it
      be deleted.`,
  },
  {
    title: "5.Security and Retention of Your Information",
    content: `Please be aware that no security measures are perfect or
      impenetrable, and we cannot guarantee "perfect security." In
      addition, any information you send to us may not be secure
      while in transit. We recommend that you do not use unsecure
      channels to communicate sensitive or confidential information
      to us.`,
  },
  {
    title: "6.Your Rights and Choices",
    content: `We are open to you requesting access to the data we are
      collecting, as mentioned above, including:`,
  },
  {
    title: "7.Complaints",
    content: `If you have complaints about how we process your personal
      information, please contact us using the contact details
      provided below. If you are not satisfied with our response to
      your complaint, you have the right to appeal our decision by
      contacting us using the contact details set out below, or
      lodge your complaint with your local data protection
      authority.`,
  },
  {
    title: "8.Prohibited Uses",
    content: `We prohibit you from using our www.si-her.live site or its
      content: (a) for any unlawful purpose; (b) to solicit others
      to perform or participate in any unlawful acts; (c) to violate
      any international, federal, provincial or state regulations,
      rules, laws, or local ordinances; (d) to infringe upon or
      violate our intellectual property rights or the intellectual
      property rights of others; (e) to harass, abuse, insult, harm,
      defame, slander, disparage, intimidate, or discriminate based
      on gender, sexual orientation, religion, ethnicity, race, age,
      national origin, or disability; (f) to submit false or
      misleading information; (g) to upload or transmit viruses or
      any other type of malicious code that will or may be used in
      any way that will affect the functionality or operation of the
      Service or of any related website, other websites, or the
      Internet; (h) to collect or track the personal information of
      others; (i) to spam, phish, pharm, pretext, spider, crawl, or
      scrape; (j) for any obscene or immoral purpose; or (k) to
      interfere with or circumvent the security features of the
      Service or any related website, other websites, or the
      Internet. We reserve the right to terminate your use of the
      Service or any related website for violating any of the
      prohibited uses.`,
  },
  {
    title: "9.Contact",
    content: `Should you have any questions about our privacy practices or
      this Privacy Policy, or if you would like to exercise any of
      the rights available to you, please email us at
      media@si3..space or contact us at 2219 Main Street, 445, Santa
      Monica, CA, 90405, United States.`,
  },
];

const MemberPolicy = () => {
  return (
    <div className="w-full relative bg-white py-[4rem] overflow-hidden text-center text-gray-200 font-[Fira Mono]">
      <div className="bg-[#F5F7FA] mt-5 md:mx-[4rem] px-[2rem] flex flex-col items-center text-[4rem] text-[#383838]">
        <div className="relative leading-[4.25rem] uppercase font-bold py-[7rem] pb-[2rem] ">
           member POLICY
        </div>
            <div className="flex flex-col items-start text-left text-[1.5rem]">
          {policySections.map((section, index) => (
            <div key={index} className="self-stretch">
              <div className="leading-[4.25rem] uppercase font-medium">
                <ol className="font-inherit text-inherit pl-[1.325rem] text-[#373737]">
                  <li>{section.title}</li>
                </ol>
              </div>
              <div className="font-mono text-[1rem] leading-[2rem] font-fira-mono text-[#373737]">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberPolicy;
