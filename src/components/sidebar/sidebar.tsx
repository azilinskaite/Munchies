"use client";
import React from "react";
import FilterCategory from "./filter-category";
import FilterSection from "./filter-section";
import { useFilters } from "@/utils/hooks/FiltersContext";

export default function Sidebar() {

  return (
    <aside className="flex flex-col p-[1.5rem] mt-[1rem] align-top gap-[2rem] border border-[var(--stroke)] rounded-lg bg-[var(--white)] shadow-custom-light">
        <h3>Filter</h3>
        <FilterCategory/>
        <FilterSection />
        <FilterSection />
    </aside>
  );
}

  /* restaurants come with delivery time & price range right away.
  Missing: food category filter */