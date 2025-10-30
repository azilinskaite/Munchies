import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import RestaurantsList from "@/components/RestaurantsList/RestaurantsList";
import Sidebar from "@/components/Sidebar/Sidebar";
import { getRestaurants, getRestaurantFilters } from "@/lib/api/getRestaurants";
import { FiltersProvider } from "@/lib/hooks/filtersContext";

export default async function HomePage() {
  const restaurants = await getRestaurants(); 
  const filters = await getRestaurantFilters();

  return (
    <FiltersProvider>
      <div className="flex flex-col md:flex-row">
        <div className="w-[100%] md:w-1/4 md:min-w-[10rem] md:max-w-[18rem]">
          <Sidebar />
        </div>
        <div className="flex-1 md:w-3/4">
          <Navbar filters={filters} />
          <RestaurantsList initialRestaurants={restaurants.restaurants} />
        </div>
      </div>
    </FiltersProvider>
  );
}