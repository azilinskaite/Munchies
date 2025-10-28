"use client";
import React from "react";
import FilterCategory from "./CategoryFilter";
import FilterDelivery from "./DeliveryFilter";
import FilterPrice from "./PriceFilter";

export default function Sidebar() {

  return (
    <aside className="flex flex-col p-[1.5rem] mt-[1rem] align-top gap-[2rem] border border-[var(--stroke)] rounded-lg bg-[var(--white)] shadow-custom-light">
        <h3>Filter</h3>
        <FilterCategory title="Food category"/>
        <FilterDelivery title="Delivery time"/>
        <FilterPrice title="Price range"/>
    </aside>
  );
}
