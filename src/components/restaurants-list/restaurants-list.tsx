"use client";
import { useFilters } from "@/utils/hooks/FiltersContext";
import React, { useState, useEffect } from "react";
import {
  getRestaurantOpenStatus,
  getRestaurants,
} from "@/utils/api/restaurants";
import RestaurantCard from "./restaurant-card";
import { applyFilters } from "@/utils/apply-filters";

type Restaurant = {
  id: string;
  name: string;
  image_url: string;
  filter_ids: string[];
  delivery_time_minutes: number;
  price_range_id: string;
};

type RestaurantWithStatus = Restaurant & {
  is_open: boolean;
};

export default function RestaurantsList({
  initialRestaurants,
}: {
  initialRestaurants: RestaurantWithStatus[];
}) {
  const { selectedFilters } = useFilters();
  const [restaurants, setRestaurants] =
    useState<RestaurantWithStatus[]>(initialRestaurants);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setError(null);

      try {
        const allRestaurants = await getRestaurants();

        const statusResults: RestaurantWithStatus[] = await Promise.all(
          allRestaurants.map((r: Restaurant) =>
            getRestaurantOpenStatus(r.id).then((is_open: boolean) => ({
              ...r,
              is_open,
            }))
          )
        );

        const filtered = applyFilters(statusResults, selectedFilters);
        setRestaurants(filtered);
      } catch (err: any) {
        console.error("Error fetching restaurants:", err);
        setError(
          "😟 Sorry, we couldn't load restaurants at the moment. Please try again later."
        );
      } 
    }

    fetchData();
  }, [selectedFilters]);

  return (
    <section className="p-[1rem] lg:pr-[7.5rem] w-full">
      <h1 className="mb-[1rem] py-[1rem]">Restaurants</h1>

      {!error && (
        <div className="grid grid-cols-1 gap-[1rem] py-[1rem] sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}