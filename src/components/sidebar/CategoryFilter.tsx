"use client";
import React, { useState, useEffect } from "react";
import { useFilters } from "@/lib/hooks/filtersContext";
import { getRestaurantFilters } from "@/lib/api/getRestaurants";
import FilterButton from "./FilterButton";
import FilterButtonSkeleton from "./FilterButtonSkeleton";

export default function FilterCategory({ title }: { title: string }) {
  const { selectedFilters, setSelectedFilters } = useFilters();
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchFilters() {
      setLoading(true);
      try {
        const response = await getRestaurantFilters();
        console.log("Response from getRestaurantFilters:", response);
        setCategories(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
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
    <div className="hidden md:block flex flex-col min-h-32">
      <h5 className="mb-2">{title}</h5>
      {loading && (
        <div className="flex flex-col gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <FilterButtonSkeleton key={index} />
          ))}
        </div>
      )}

      {!loading && (
        <div className="flex flex-col gap-2">
          {categories.map((filter) => (
            <FilterButton
              key={filter.id}
              label={filter.name}
              onClick={() => handleCategoryToggle(filter.id)}
              isSelected={selectedFilters.includes(`cat-${filter.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
