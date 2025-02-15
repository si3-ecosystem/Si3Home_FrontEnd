"use client";

import { TabValues } from "@/lib/types/interfaces";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isActive?: boolean;
}

function Button(props: ButtonProps) {
  if (props.isActive) {
    return (
      <button
        {...props}
        className="min-w-[166px] min-h-10 sm:min-h-14 border-2 border-[#B668E4] p-1 md:p-2 rounded-full text-xs sm:text-sm font-medium flex-1 bg-white "
      >
        <span className="inline-block rounded-full w-full bg-black text-white p-4">
          {props.title}
        </span>
      </button>
    );
  }
  return (
    <button
      className="min-h-10 sm:min-h-14 min-w-[166px] flex-1  border-2 border-[#B0B0B0] hover:border-[#B668E4] hover:bg-[#e9e3ff] rounded-full text-xs sm:text-sm transition"
      {...props}
    >
      {props.title}
    </button>
  );
}

interface HeaderProps {
  activeTab: TabValues;
  setActiveTab: (value: TabValues) => void;
}

interface TabObject {
  title: string;
  value: TabValues;
}

const tabList: TabObject[] = [
  { title: "I am Exploring Web3", value: "explorers" },
  { title: "I am Leading Web3", value: "leaders" },
  { title: "I am Building Web3", value: "creators" },
];

export default function TabHeader(props: HeaderProps) {
  const { activeTab, setActiveTab } = props;
  return (
    <div className="px-4">
      <header className="max-w-[590px] overflow-x-auto mx-auto justify-between flex gap-2 md:gap-4">
        {tabList.map((tab) => {
          return (
            <Button
              key={tab.title}
              title={tab.title}
              isActive={activeTab == tab.value}
              onClick={(e) => setActiveTab(tab.value)}
            />
          );
        })}
      </header>
    </div>
  );
}
