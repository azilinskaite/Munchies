"use client";
import React, { useState } from "react";
import CategoryCard from "./category-card";

export default function Navbar({filters}: {filters: any}) {

    const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  function handleCategorySelect(category: string) {
    setCurrentCategory(category === currentCategory ? null : category);
  }""

  /* restaurants come with delivery time & price range right away.
  Missing: food category filter */
  /* return restaurants separately and filters separately and create a link between them with ids? restaurants have filter_ids which match filters ids  */

  /* filters have ids and names (for category) and images (which match restaurant images too) */

  return (
    <nav className="flex p-[1rem] overflow-x-auto whitespace-nowrap gap-[0.625rem] max-w-[50rem]">
      {filters.data.filters.map((filter: any) => (
        <CategoryCard
          key={filter.id}
          categoryName={filter.name}
          imageUrl={filter.image_url}
        />
      ))}
    </nav>
  );
}

// ONCLICK (or on category change) prop to category card, set current category, pass on the state 