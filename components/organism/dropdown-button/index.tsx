// DropdownButton.tsx
"use client";

import { Button } from "@/components/atoms/button/Button";
import { useState, useRef, useEffect } from "react";

interface DropdownButtonProps {
  label: string;
  options: string[];
  active: boolean;
  selectedOption?: string | null;
  onSelect: (option: string) => void;
}

export function DropdownButton({
  label,
  options,
  active,
  selectedOption,
  onSelect,
}: DropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex-shrink-0 z-[99999999]" ref={dropdownRef}>
      <Button
        active={active}
        onClick={() => setIsOpen(!isOpen)}
        className="!rounded-full hover:text-white hover:!bg-black transition-all duration-300 ease-in-out flex items-center gap-2"
      >
        {selectedOption ? `${selectedOption}` : label}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-56 text-black rounded-md shadow-lg bg-white left-0">
          <div
            className="py-1 rounded-md"
            role="menu"
            aria-orientation="vertical"
          >
            {options.map((option) => (
              <button
                key={option}
                className="block w-full text-left px-4 py-2.5 text-sm hover:text-black bg-white hover:bg-gray-100"
                role="menuitem"
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
