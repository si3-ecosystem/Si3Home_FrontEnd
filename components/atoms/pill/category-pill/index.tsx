interface CategoryPillProps {
  label: string;
  isActive?: boolean;
}

export function CategoryPill({ label, isActive = false }: CategoryPillProps) {
  return (
    <button
      className={`px-4 py-1 rounded-full text-sm ${
        isActive
          ? "bg-black text-white"
          : "border border-[#E5007A] text-[#E5007A]"
      }`}
    >
      {label}
    </button>
  );
}
