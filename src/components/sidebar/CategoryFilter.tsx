"use client";
import React, { useState, useEffect } from "react";
import { useFilters } from "@/lib/hooks/filtersContext";
import { getRestaurantFilters } from "@/lib/api/getRestaurants";
import FilterButton from "./FilterButton";

export default function FilterCategory({ title }: { title: string }) {
  const { selectedFilters, setSelectedFilters } = useFilters();
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    async function fetchFilters() {
      const response = await getRestaurantFilters();
      setCategories(response.data.filters);
    }
    fetchFilters();
  }, []);

  function handleCategoryToggle(categoryId: string) {
    setSelectedFilters((prev) =>
      prev.includes(`cat-${categoryId}`)
        ? prev.filter((f) => f !== `cat-${categoryId}`)
        : [...prev, `cat-${categoryId}`]
    );
  }

  return (
    <div className="flex flex-col gap-[0.625rem]">
      <h5 className="mb-[0.375rem]">{title}</h5>
      {categories.map((filter: any) => (
        <FilterButton
          key={filter.id}
          label={filter.name}
          onClick={() => handleCategoryToggle(filter.id)}
          isSelected={selectedFilters.includes(`cat-${filter.id}`)}
        />
      ))}
    </div>
  );
}
