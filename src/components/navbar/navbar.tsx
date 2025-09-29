"use client";
import React, { useState } from "react";
import CategoryCard from "./category-card";
import { useFilters } from "@/utils/hooks/FiltersContext";

export default function Navbar({ filters }: { filters: any }) {
  const { selectedFilters, setSelectedFilters } = useFilters();

  function handleCategorySelect(categoryId: string) {
    const prefixedId = `cat-${categoryId}`;
    setSelectedFilters((prev) =>
      prev.length === 1 && prev[0] === prefixedId ? [] : [prefixedId]
    );
  }

  return (
    <nav className="w-full ml-[1rem] whitespace-nowrap">
      <div className="flex w-full py-[1rem] overflow-x-auto gap-[0.625rem]">
      {filters.data.filters.map((filter: any) => (
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
