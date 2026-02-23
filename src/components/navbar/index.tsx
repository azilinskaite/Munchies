"use client";
import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import { useFilters } from "@/lib/hooks/filtersContext";
import { Filter } from "@/lib/types/types";

export default function Navbar({ filters }: { filters: Filter[]}) {
  const { selectedFilters, setSelectedFilters } = useFilters();

  function handleCategorySelect(categoryId: string) {
    const prefixedId = `cat-${categoryId}`;
    setSelectedFilters((prev) =>
      prev.length === 1 && prev[0] === prefixedId ? [] : [prefixedId]
    );
  }

  return (
    <nav className="w-full md:ml-4 whitespace-nowrap">
      <div className="flex w-full py-4 overflow-x-auto gap-[0.625rem]">
        {filters.map((filter) => (
          <CategoryCard
            key={filter.id}
            categoryName={filter.name}
            imageUrl={filter.image_url}
            onClick={() => handleCategorySelect(filter.id)}
            isSelected={selectedFilters[0] === `cat-${filter.id}`}
          />
        ))}
      </div>
    </nav>
  );
}
