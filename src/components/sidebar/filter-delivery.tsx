"use client";
import React, { useState, useEffect } from "react";
import { useFilters } from "@/utils/hooks/FiltersContext";
import { getRestaurants } from "@/utils/api/restaurants";
import FilterButton from "./filter-button";

const deliveryTimeRanges = [
  { id: "fast", label: "0-10 min", match: (time: number) => time < 10 },
  {
    id: "medium",
    label: "10-30 min",
    match: (time: number) => time >= 10 && time < 30,
  },
  {
    id: "slow",
    label: "30-60 min",
    match: (time: number) => time >= 30 && time < 60,
  },
  { id: "long", label: "1 hour+", match: (time: number) => time >= 60 },
];

export default function FilterDelivery({ label }: { label: string }) {
  const { selectedFilters, setSelectedFilters } = useFilters();

  function handleDeliveryToggle(deliveryId: string) {
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
        {deliveryTimeRanges.map((range) => (
          <FilterButton
            key={range.id}
            label={range.label}
            onClick={() => handleDeliveryToggle(range.id)}
            isSelected={selectedFilters.includes(range.id)}
          />
        ))}
      </div>
    </div>
  );
}

// take delivery time & price range from restaurant data
// change categoryId to deliveryTime - restaurants.delivery_time_minutes
// change categoryId to priceRange - restaurants.price_range_id and then fetch /price-range/{id} to get the actual price range
