"use client";
import { useFilters } from "@/utils/hooks/FiltersContext";
import React, { useState, useEffect } from "react";
import { getRestaurants } from "@/utils/api/restaurants";
import RestaurantCard from "./restaurant-card";

export default function RestaurantsList({
  initialRestaurants,
}: {
  initialRestaurants: [];
}) {
  const { selectedFilters } = useFilters();
  const [restaurants, setRestaurants] = useState(initialRestaurants);

  useEffect(() => {
    async function fetchData() {
      const allRestaurants = await getRestaurants();

      if (selectedFilters.length > 0) {
        // show only restaurants that include the selected filter(s)
        const filtered = allRestaurants.filter((r: any) =>
          r.filter_ids.some((fid: string) => selectedFilters.includes(fid))
        );
        setRestaurants(filtered);
      } else {
        // no filter selected → show all
        setRestaurants(allRestaurants);
      }
    }

    fetchData();
  }, [selectedFilters]);

  return (
    <section className="p-[1rem] w-full">
      <h1 className="mb-[1rem]">Restaurants</h1>
      <div className="grid grid-cols-1 gap-[1rem] sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant: any) => (
          <RestaurantCard
            key={restaurant.id}
            restaurantName={restaurant.name}
            imageUrl={restaurant.image_url}
          />
        ))}
      </div>
    </section>
  );
}
