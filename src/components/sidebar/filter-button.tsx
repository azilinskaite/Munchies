import React from "react";

export default function FilterButton({categoryName}: {categoryName: string}) {
  return (
    <button className="flex w-fit px-[0.75rem] py-[0.5rem] align-top border border-[var(--stroke)] rounded-lg bg-[var(--white)]">
      <h4>{categoryName}</h4>
    </button>
  );
}