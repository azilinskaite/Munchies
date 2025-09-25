"use client";
import React, { useState, useEffect } from "react";
import RestaurantCard from "./restaurant-card";

export default function RestaurantsList({ initialRestaurants }: { initialRestaurants: any }) {

  const [restaurants, setRestaurants] = useState(initialRestaurants);

  return (
    <section className="p-[1rem] w-full">
      <h1 className="mb-[1rem]">Restaurants</h1>
      <div className="grid grid-cols-1 gap-[1rem] sm:grid-cols-2 lg:grid-cols-3">
        {initialRestaurants.data.restaurants.map((restaurant: any) => (
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
