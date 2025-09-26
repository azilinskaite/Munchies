"use client";
import React, { useState, useEffect } from "react";
import { useFilters } from "@/utils/hooks/FiltersContext";
import { getRestaurants, getPriceRangeById } from "@/utils/api/restaurants";
import FilterButton from "./filter-button";

  interface PriceRange {
    id: string;
    range: string;
  }

export default function FilterPrice({title} : {title: string}) {
  const { selectedFilters, setSelectedFilters } = useFilters();
  const [priceRanges, setPriceRanges] = useState<PriceRange[]>([]);

  useEffect(() => {
    async function fetchPriceRanges() {
      // Step 1: get restaurants to extract unique price_range_ids
      const restaurants = await getRestaurants();

      const uniqueIds: string[] = Array.from(
        new Set(restaurants.map((r: any) => r.price_range_id as string))
      );

      // Step 2: fetch each price-range by ID
      const ranges = await Promise.all(uniqueIds.map((id) => getPriceRangeById(id)));
      setPriceRanges(ranges);
    }

    fetchPriceRanges();
  }, []);

  function handlePriceToggle(priceId: string) {
    setSelectedFilters((prev) =>
      prev.includes(`price-${priceId}`)
        ? prev.filter((f) => f !== `price-${priceId}`)
        : [...prev, `price-${priceId}`]
    );
  }

  return (
    <div className="flex flex-col gap-[0.625rem]">
      <h5 className="mb-[0.375rem]">{title}</h5>
      <div className="flex flex-wrap gap-[0.625rem]">
        {priceRanges.map((price) => (
          <FilterButton
            key={price.id}
            label={price.range}
            onClick={() => handlePriceToggle(price.id)}
            isSelected={selectedFilters.includes(`price-${price.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

// priceRange - restaurants.price_range_id and then fetch /price-range/{id} to get the actual price range, displays 1, 2 or 3 dollar signs
