import React from "react";
import RestaurantCard from "./restaurant-card";

export default function RestaurantsList() {
  return (
    <section className="p-[1rem] w-full">
      <h1 className="mb-[1rem]">Restaurants</h1>
      <div className="grid grid-cols-1 gap-[1rem] sm:grid-cols-[repeat(auto-fit,minmax(15rem,2fr))]">
        <RestaurantCard restaurantName="Cortado Bar" imageUrl="/images/coffee.png" />
        <RestaurantCard restaurantName="Cortado Bar" imageUrl="/images/coffee.png" />
        <RestaurantCard restaurantName="Cortado Bar" imageUrl="/images/coffee.png" />
      </div>
    </section>
  );
}
