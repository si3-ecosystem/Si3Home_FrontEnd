"use client";
import React, { useState, useEffect } from 'react';
import { client2 } from '@/utils/client';
import groq from 'groq';
import { PolicyItem } from '@/lib/types/interfaces';

// Helper function to extract number from a string
const extractNumber = (text:any) => {
  const match = text.match(/\d+/); // Matches the first sequence of digits in the string
  return match ? parseInt(match[0], 10) : 0;
};

const Policy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState<PolicyItem[]>([]);

  useEffect(() => {
    async function fetchPrivacyPolicy() {
      const query = groq`*[_type == 'privacyPolicy']`;
      const data = await client2.fetch(query);

      // Sort the data by the number extracted from the title
      const sortedData = (data || []).sort((a:any, b:any) => {
        const numberA = extractNumber(a.title);
        const numberB = extractNumber(b.title);
        return numberA - numberB; // Ascending order
      });

      setPrivacyPolicy(sortedData);
    }

    fetchPrivacyPolicy();
  }, []);

  if (!privacyPolicy.length) {
    return <div>Loading...</div>; // You can have a more sophisticated loading state
  }

  return (
    <div className="w-full relative bg-white md:py-[4rem] overflow-hidden text-center text-gray-800 font-mono">
      <div className="bg-[#F5F7FA] mt-5 md:mx-[4rem] px-[2rem] flex flex-col items-center md:text-[4rem] text-[2rem] text-[#383838]">
        <div className="relative leading-[4.25rem] uppercase font-bold pt-[7rem] pb-[2rem]">
          Si Her Co-Active Privacy Policy
        </div>
        <div className="flex flex-col items-start text-left text-[1.5rem]">
          {privacyPolicy.map((section, index) => (
            <div key={index} className="self-stretch">
              <div className="leading-[4.25rem] uppercase font-medium">
                <ol className="font-inherit text-inherit pl-[1.325rem] text-[#373737]">
                  <li>{section.title}</li>
                </ol>
              </div>
              <div className="font-mono text-[1rem] leading-[2rem] text-[#373737] pb-">
                {section.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;
