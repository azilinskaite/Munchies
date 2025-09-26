import React from "react";

export default function ArrowButton() {
  return (
    <button className="h-[2rem] w-[2rem] border-none rounded-full bg-[var(--green)] flex items-center justify-center shrink-0 cursor-pointer">
        <img src="/images/arrow.svg" alt="Arrow" width="12" height="auto" />
    </button>
  );
}
