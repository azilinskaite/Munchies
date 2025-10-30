"use client";
import React, { useState, useEffect } from "react";
import { useFilters } from "@/lib/hooks/filtersContext";
import { getRestaurants, getPriceRangeById } from "@/lib/api/getRestaurants";
import FilterButton from "./FilterButton";
import FilterButtonSkeleton from "./FilterButtonSkeleton";
import { PriceRange } from "@/lib/types/types";

export default function FilterPrice({ title }: { title: string }) {
  const { selectedFilters, setSelectedFilters } = useFilters();
  const [priceRanges, setPriceRanges] = useState<PriceRange[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    async function fetchPriceRanges() {
      setLoading(true);

      try {
        const { restaurants } = await getRestaurants();
        const uniqueIds: string[] = Array.from(
          new Set(restaurants.map((r: any) => r.price_range_id as string))
        );
        const ranges = await Promise.all(
          uniqueIds.map((id) => getPriceRangeById(id))
        );
        setPriceRanges(ranges);
      } catch (error) {
        console.error("Error fetching price ranges:", error);
      } finally {
        setLoading(false);
      }
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
    <div className="hidden md:block flex flex-col gap-[0.625rem]">
      <h5 className="mb-2">{title}</h5>

      {loading && (
        <div className="flex flex-wrap gap-[0.625rem]">
          {Array.from({ length: 4 }).map((_, i) => (
            <FilterButtonSkeleton key={i} />
          ))}
        </div>
      )}

      {!loading && (
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
      )}
    </div>
  );
}
