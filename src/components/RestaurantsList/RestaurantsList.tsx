"use client";
import { useFilters } from "@/lib/hooks/filtersContext";
import React, { useState, useEffect } from "react";
import {
  getRestaurantOpenStatus,
  getRestaurants,
} from "@/lib/api/getRestaurants";
import RestaurantCard from "./RestaurantCard";
import { applyFilters } from "@/lib/filters/applyFilters";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";
import { Restaurant, RestaurantWithStatus } from "@/lib/types/types";

export default function RestaurantsList({
  initialRestaurants,
}: {
  initialRestaurants: RestaurantWithStatus[];
}) {
  const { selectedFilters } = useFilters();
  const [restaurants, setRestaurants] =
    useState<RestaurantWithStatus[]>(initialRestaurants);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setError(null);
      setLoading(true);

      try {
        const { restaurants: allRestaurants } = await getRestaurants();

        const statusResults = await Promise.all(
          allRestaurants.map(async (r) => {
            const is_open = await getRestaurantOpenStatus(r.id);
            return { ...r, is_open };
          })
        );

        const filtered = applyFilters(statusResults, selectedFilters);
        setRestaurants(filtered);
      } catch (err: any) {
        console.error("Error fetching restaurants:", err);
        setError(
          "Sorry, we couldn't load restaurants at the moment. Please try again later."
        );
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    }

    fetchData();
  }, [selectedFilters]);

  return (
    <section className="md:p-4 lg:pr-[7.5rem] w-full">
      <h1 className="mb-4 pt-4 md:pb-4">Restaurants</h1>

      {loading && (
        <div className="w-full grid grid-cols-1 gap-4 md:py-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <RestaurantCardSkeleton key={i} />
          ))}
        </div>
      )}

      {!loading && !error && (
        <div className="w-full grid grid-cols-1 gap-4 md:py-4 sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
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

      {!loading && !error && restaurants.length === 0 && (
        <p className="text-gray-500 uppercase">
          No restaurants match your filters.
        </p>
      )}

      {error && <div className="error text-gray-500 uppercase">{error}</div>}
    </section>
  );
}
