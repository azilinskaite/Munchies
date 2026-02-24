"use client";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { useFilters } from "@/lib/hooks/filtersContext";
import { Filter } from "@/lib/types/types";
import { getRestaurantFilters } from "@/lib/api/getRestaurants";

export default function Navbar() {
  const { selectedFilters, setSelectedFilters } = useFilters();
  const [filters, setFilters] = useState<Filter[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleCategorySelect(categoryId: string) {
    const prefixedId = `cat-${categoryId}`;
    setSelectedFilters((prev) =>
      prev.length === 1 && prev[0] === prefixedId ? [] : [prefixedId]
    );
  }

  useEffect(() => {
    async function fetchFilters() {
      try {
        const data = await getRestaurantFilters();
        setFilters(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFilters();
  }, []);

  return (
    <nav className="w-full md:ml-4 md:pr-8 whitespace-nowrap">
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
