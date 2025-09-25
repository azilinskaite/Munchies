"use client";
import React, { useState, useEffect } from "react";
import { useFilters } from "@/utils/hooks/FiltersContext";  
import { getRestaurantFilters } from "@/utils/api/restaurants";
import FilterButton from "./filter-button";

export default function FilterCategory({ label }: { label: string }) {

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
    setSelectedFilters(
      (prev) =>
        prev.includes(categoryId)
          ? prev.filter((f) => f !== categoryId)
          : [...prev, categoryId]
);
    console.log("Clicked sidebar filters:", selectedFilters);
  }

  return (
    <div className="flex flex-col gap-[0.625rem]">
        <h5 className="mb-[0.375rem]">Food category</h5>
        {categories.map((filter: any) => (
                <FilterButton
                  key={filter.id}
                  label={filter.name}
                  onClick={() => handleCategoryToggle(filter.id)}
                  isSelected={selectedFilters.includes(filter.id)}
                  // response has to be a boolean
                />
              ))}
    </div>
  );
}

/* fetch categoryName and imageUrl from api and map through them */