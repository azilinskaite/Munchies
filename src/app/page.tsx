"use client";
import React from "react";
import Navbar from "@/components/navbar";
import RestaurantsList from "@/components/RestaurantsList";
import Sidebar from "@/components/sidebar";
import { FiltersProvider } from "@/lib/hooks/filtersContext";
import { useRestaurants } from "@/lib/hooks/useRestaurants";

export default function HomePage() {
  const { restaurants, isLoading, error } = useRestaurants();
  
  return (
    <FiltersProvider>
      <div className="flex flex-col md:flex-row">
        <div className="w-[100%] md:w-1/4 md:min-w-[10rem] md:max-w-[18rem]">
          <Sidebar restaurants={restaurants} />
        </div>
        <div className="flex-1 md:w-3/4">
          <Navbar/>
          <RestaurantsList restaurants={restaurants} isLoading={isLoading} error={error}/>
        </div>
      </div>
    </FiltersProvider>
  );
}