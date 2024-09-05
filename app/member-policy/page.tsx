"use client";
import React, { useState, useEffect } from 'react';
import {client }from '../../utils/client';
import groq from 'groq';
import { PolicyItem } from '@/lib/types/interfaces';

// Helper function to extract number from a string
const extractNumber = (text:any) => {
  const match = text.match(/\d+/); // Matches the first sequence of digits in the string
  return match ? parseInt(match[0], 10) : 0;
};

const MemberPolicy = () => {
  const [memberPolicy, setMemberPolicy] = useState<PolicyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMemberPolicy() {
      try {
        const query = groq`*[_type == 'memberPolicy'] | order(_createdAt desc)`;
        const data = await client.fetch(query);

        // Sort the data by the number extracted from the title
        const sortedData = (data || []).sort((a:any, b:any) => {
          const numberA = extractNumber(a.title);
          const numberB = extractNumber(b.title);
          return numberA - numberB; // Ascending order
        });

        setMemberPolicy(sortedData);
      } catch (err:any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchMemberPolicy();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full relative bg-white py-[4rem] overflow-hidden text-center text-gray-800 font-mono">
      <div className="bg-[#F5F7FA] mt-5 md:mx-[4rem] px-[2rem] flex flex-col items-center text-[4rem] text-[#383838]">
        <div className="relative leading-[4.25rem] uppercase font-bold py-[7rem] pb-[2rem]">
          Member Policy
        </div>
        <div className="flex flex-col items-start text-left text-[1.5rem]">
          {memberPolicy.map((section, index) => (
            <div key={index} className="self-stretch">
              <div className="leading-[4.25rem] uppercase font-medium">
                <ol className="font-inherit text-inherit pl-[1.325rem] text-[#373737]">
                  <li>{section.title}</li>
                </ol>
              </div>
              <div className="font-mono text-[1rem] leading-[2rem] text-[#373737]">
                {section.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberPolicy;
