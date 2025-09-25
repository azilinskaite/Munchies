import React from "react";

interface FilterButtonProps {
  categoryName: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export default function FilterButton({ categoryName, onClick, isSelected }: FilterButtonProps) {
  return (
    <button onClick={onClick}
    className={`flex w-fit px-[0.75rem] py-[0.5rem] align-top border border-[var(--stroke)] rounded-lg bg-[var(--white)] ${isSelected ? "border-selected" : "border-[var(--stroke)] bg-[var(--white)]"}`}>

      <h4>{categoryName}</h4>
    </button>
  );
}