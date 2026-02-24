"use client";
import React, { useMemo } from "react";
import { useFilters } from "@/lib/hooks/filtersContext";
import RestaurantCard from "./RestaurantCard";
import { applyFilters } from "@/lib/filters/applyFilters";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";
import { RestaurantWithStatus } from "@/lib/types/types";

export default function RestaurantsList({
  restaurants,
  isLoading,
  error,
}: {
  restaurants: RestaurantWithStatus[];
  isLoading: boolean;
  error: string | null;
}) {
  const { selectedFilters } = useFilters();
  const filteredRestaurants = useMemo(() => {
    return applyFilters(restaurants, selectedFilters);
  }, [restaurants, selectedFilters]);

  return (
    <section className="md:p-4 lg:pr-[7.5rem] w-full">
      <h1 className="mb-4 pt-4 md:pb-4">Restaurants</h1>

      {isLoading && (
        <div className="w-full grid grid-cols-1 gap-4 md:py-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <RestaurantCardSkeleton key={i} />
          ))}
        </div>
      )}

      {!isLoading && !error && (
        <div className="w-full grid grid-cols-1 gap-4 md:py-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurantName={restaurant.name}
              imageUrl={restaurant.image_url}
              isOpen={restaurant.is_open}
              deliveryTimeMinutes={restaurant.delivery_time_minutes}
            />
          ))}
        </div>
      )}

      {!isLoading && !error && filteredRestaurants.length === 0 && (
        <p className="text-gray-500 uppercase">
          No restaurants match your filters.
        </p>
      )}

      {error && <div className="error text-gray-500 uppercase">{error}</div>}
    </section>
  );
}
