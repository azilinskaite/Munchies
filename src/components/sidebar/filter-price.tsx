"use client";
import React, { useState, useEffect } from "react";
import { useFilters } from "@/utils/hooks/FiltersContext";
import { getPriceRangeById } from "@/utils/api/restaurants";
import FilterButton from "./filter-button";

export default function FilterPrice({ label }: { label: string }) {
  const { selectedFilters, setSelectedFilters } = useFilters();
  const [priceRanges, setPriceRanges] = useState<any[]>([]);

  function handlePriceToggle(deliveryId: string) {
    setSelectedFilters((prev) =>
      prev.includes(deliveryId)
        ? prev.filter((f) => f !== deliveryId)
        : [...prev, deliveryId]
    );
  }

  return (
    <div className="flex flex-col gap-[0.625rem]">
      <h5 className="mb-[0.375rem]">{label}</h5>
      <div className="flex flex-wrap gap-[0.625rem]">
        {priceRanges.map((price) => (
          <FilterButton
            key={price.id}
            label={price.label}
            onClick={() => handlePriceToggle(price.id)}
            isSelected={selectedFilters.includes(price.id)}
          />
        ))}
      </div>
    </div>
  );
}

// priceRange - restaurants.price_range_id and then fetch /price-range/{id} to get the actual price range, displays 1, 2 or 3 dollar signs
