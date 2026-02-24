"use client";

import { useEffect, useState } from "react";
import {
  getRestaurants,
  getRestaurantOpenStatus,
} from "@/lib/api/getRestaurants";
import { RestaurantWithStatus } from "@/lib/types/types";

export function useRestaurants() {
  const [restaurants, setRestaurants] =
    useState<RestaurantWithStatus[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRestaurants() {
      setError(null);
      setIsLoading(true);

      try {
        const { restaurants: allRestaurants } = await getRestaurants();

        const statusResults = await Promise.allSettled(
          allRestaurants.map(async (r) => {
            const is_open = await getRestaurantOpenStatus(r.id);
            return { ...r, is_open };
          })
        );

        const finalRestaurants = statusResults.map((result, index) => {
          const originalRestaurant = allRestaurants[index];

          if (result.status === "fulfilled") {
            return result.value;
          }

          return { ...originalRestaurant, is_open: false };
        });
        setRestaurants(finalRestaurants);
      } catch (err: unknown) {
        console.error("Error fetching restaurants:", err);
        setError(
          "Sorry, we couldn't load restaurants at the moment. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchRestaurants();
  }, []);

  return { restaurants, isLoading, error };
}
