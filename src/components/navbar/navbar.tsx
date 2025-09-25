"use client";
import React, { useState } from "react";
import CategoryCard from "./category-card";
import { useFilters } from "@/utils/hooks/FiltersContext";

export default function Navbar({ filters }: { filters: any }) {
  const { selectedFilters, setSelectedFilters } = useFilters();

function handleCategorySelect(categoryId: string) {
  setSelectedFilters((prev) => 
    prev.length === 1 && prev[0] === categoryId
  ? [] 
  : [categoryId] 
  );
}

  return (
    <nav className="flex p-[1rem] overflow-x-auto whitespace-nowrap gap-[0.625rem] max-w-[50rem]">
      {filters.data.filters.map((filter: any) => (
        <CategoryCard
          key={filter.id}
          categoryName={filter.name}
          imageUrl={filter.image_url}
          onClick={() => handleCategorySelect(filter.id)}
          isSelected={selectedFilters === filter.id}
        />
      ))}
    </nav>
  );
}

