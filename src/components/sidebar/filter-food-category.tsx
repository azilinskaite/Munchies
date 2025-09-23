import React from "react";
import FilterButton from "./filter-button";

export default function FilterCategory() {
  return (
    <div className="flex flex-col gap-[0.625rem]">
        <h5 className="mb-[0.375rem]">Food category</h5>
        <FilterButton categoryName="Hamburger" />
        <FilterButton categoryName="Pizza" />
        <FilterButton categoryName="Tacos" />
    </div>
  );
}

/* fetch categoryName and imageUrl from api and map through them */