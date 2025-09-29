import React from "react";
import Navbar from "@/components/navbar/navbar";
import RestaurantsList from "@/components/restaurants-list/restaurants-list";
import Sidebar from "@/components/sidebar/sidebar";
import { getRestaurants, getRestaurantFilters } from "@/utils/api/restaurants";
import { FiltersProvider } from "@/utils/hooks/FiltersContext";

export default async function HomePage() {
  const restaurants = await getRestaurants(); 
  const filters = await getRestaurantFilters();

  return (
    <FiltersProvider>
      <div className="flex">
        <div className="w-1/4 min-w-[10rem] max-w-[18rem]">
          <Sidebar />
        </div>
        <div className="flex-1 w-3/4">
          <Navbar filters={filters} />
          <RestaurantsList initialRestaurants={restaurants} />
        </div>
      </div>
    </FiltersProvider>
  );
}