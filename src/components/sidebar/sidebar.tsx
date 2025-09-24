import React from "react";
import FilterCategory from "./filter-food-category";
import FilterDelivery from "./filter-delivery";
import FilterPrice from "./filter-price";

export default function Sidebar() {
  return (
    <aside className="flex flex-col p-[1.5rem] mt-[1rem] align-top gap-[2rem] border border-[var(--stroke)] rounded-lg bg-[var(--white)] shadow-custom-light">
        <h3>Filter</h3>
        <FilterCategory />
        <FilterDelivery />
        <FilterPrice/>
    </aside>
  );
}