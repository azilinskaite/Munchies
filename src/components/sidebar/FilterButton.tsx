import React from "react";

interface FilterButtonProps {
  label: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export default function FilterButton({ label, onClick, isSelected }: FilterButtonProps) {
  return (
    <button onClick={onClick}
    className={`flex w-fit px-[0.75rem] py-[0.5rem] align-top border border-[var(--stroke)] rounded-lg bg-[var(--white)] cursor-pointer transition duration-300 hover:scale-[1.02] ${isSelected ? "border-selected" : "border-[var(--stroke)] bg-[var(--white)]"}`}>
      <h4>{label}</h4>
    </button>
  );
}