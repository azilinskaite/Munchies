import React from "react";
import Navbar from "@/components/navbar/navbar";
import RestaurantsList from "@/components/restaurants-list/restaurants-list";
import Sidebar from "@/components/sidebar/sidebar";
import { getRestaurants, getRestaurantFilters } from "@/utils/api/restaurants";

export default async function HomePage({ searchParams }: { searchParams: Record<string, string> }) {

  const restaurants = await getRestaurants(searchParams);
  const filters = await getRestaurantFilters();
    console.log("Filters received:", filters);

  return (
    <div className="flex">
      <div className="min-w-[25%] md:max-w-[15%]">
        <Sidebar />
      </div>
      
      <div className="flex-1">
        <Navbar filters={filters}/>
        <RestaurantsList initialRestaurants={restaurants}/>
      </div>
    </div>
  );
}

// useState for setting currentCategory
// pass updated state (currentCategory) to RestaurantsList (array filter)
// pass handleCategorySelect to Navbar, then to CategoryCard, onClick call handleCategorySelect with category name
// fetch restaurants in page.tsx and pass to RestaurantsList as prop (initialRestaurants) - done
// in RestaurantsList, use useEffect to update restaurants when initialRestaurants or currentCategory changes
// in useEffect, filter initialRestaurants based on currentCategory and set to restaurants state
// display restaurants state in the list
