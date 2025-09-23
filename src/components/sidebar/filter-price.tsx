import React from "react";
import FilterButton from "./filter-button";

export default function FilterPrice() {
  return (
    <div className="flex flex-col gap-[0.625rem]">
        <h5 className="mb-[0.375rem]">Price range</h5>
        <div className="flex flex-wrap gap-[0.625rem]">
        <FilterButton categoryName="&#36;" />
        <FilterButton categoryName="&#36; &#36;" />
        <FilterButton categoryName="&#36; &#36; &#36;" />
        <FilterButton categoryName="&#36; &#36; &#36; " />
        </div>
    </div>
  );
}