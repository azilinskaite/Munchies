import React from "react";
import Navbar from "@/components/navbar/navbar";
import RestaurantsList from "@/components/restaurants-list/restaurants-list";
import Sidebar from "@/components/sidebar/sidebar";
import { getRestaurants } from "@/utils/api/restaurants";

export default async function HomePage({ searchParams }: { searchParams: Record<string, string> }) {

  const restaurants = await getRestaurants(searchParams);

  return (
    <div className="flex">
      <div className="min-w-[25%] md:max-w-[15%]">
        <Sidebar />
      </div>
      
      <div className="flex-1">
        <Navbar />
        <RestaurantsList initialRestaurants={restaurants}/>
      </div>
    </div>
  );
}