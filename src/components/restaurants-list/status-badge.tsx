import React from "react";

interface StatusBadgeProps {
  status: string;
  color?: string;
}

export default function StatusBadge({ status, color }: StatusBadgeProps) {

  return (
    <span className="flex items-center gap-x-[0.3rem] w-fit h-fit py-[0.5rem] px-[0.75rem] align-baseline border rounded-full bg-[var(--white)] shadow-custom-light">
        {color && (
        <div
          className="w-[0.5rem] h-[0.5rem] rounded-full"
          style={{ backgroundColor: `var(${color})` }}
        />
      )}
        <h4>{status}</h4>
    </span>
  );
}

/* pass status and color as prop depending on api response */
// div display none if no color is passed
