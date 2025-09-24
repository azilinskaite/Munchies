import React from "react";
import RestaurantCard from "./restaurant-card";
import { getRestaurants } from "@/utils/api/restaurants";

export default async function RestaurantsList() {

  const restaurants = await getRestaurants();
  /* returns data as an array of objects */

  console.log("Restaurants response:", restaurants);

  return (
    <section className="p-[1rem] w-full">
      <h1 className="mb-[1rem]">Restaurants</h1>
      <div className="grid grid-cols-1 gap-[1rem] sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.data.restaurants.map((restaurant: any) => (
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
/* map through every restaurant name and image path to create restaurant cards*/
