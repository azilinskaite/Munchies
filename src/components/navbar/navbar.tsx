import React from "react";
import CategoryCard from "./category-card";

export default function Navbar() {
  return (
    <nav className="flex p-[1rem] overflow-x-auto whitespace-nowrap gap-[0.625rem]">
      <CategoryCard categoryName="Burger" imageUrl="/images/burger.png" />
      <CategoryCard categoryName="Burger" imageUrl="/images/burger.png" />
      <CategoryCard categoryName="Burger" imageUrl="/images/burger.png" />
    </nav>
  );
}

/* fetch categoryName and imageUrl from api and map through them */
