"use client";
import React from "react";
import FilterCategory from "./CategoryFilter";
import FilterDelivery from "./DeliveryFilter";
import FilterPrice from "./PriceFilter";
import { RestaurantWithStatus } from "@/lib/types/types";

export default function Sidebar({
  restaurants,
}: {
  restaurants: RestaurantWithStatus[];
}) {
  return (
    <aside className="flex flex-col md:p-[1.5rem] md:mt-[1rem] align-top gap-[2rem] md:border md:border-[var(--stroke)] md:rounded-lg md:bg-[var(--white)] md:shadow-custom-light">
      <h3 className="hidden md:block">Filter</h3>
      <FilterCategory title="Food category" />
      <FilterDelivery title="Delivery time" />
      <FilterPrice title="Price range" restaurants={restaurants} />
    </aside>
  );
}
