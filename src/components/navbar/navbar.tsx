import React from "react";
import CategoryCard from "./category-card";

export default function Navbar() {
  return (
    <nav className="flex overflow-x-auto whitespace-nowrap gap-[0.625rem]">
      <CategoryCard categoryName="Burger" imageUrl="/assets/burger.png" />
      <CategoryCard categoryName="Burger" imageUrl="/assets/burger.png" />
      <CategoryCard categoryName="Burger" imageUrl="/assets/burger.png" />
    </nav>
  );
}

/* fetch categoryName and imageUrl from api and map through them */
