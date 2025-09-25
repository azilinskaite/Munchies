import React from "react";
import FilterButton from "./filter-button";

export default function FilterSection() {
  return (
    <div className="flex flex-col gap-[0.625rem]">
        <h5 className="mb-[0.375rem]">Delivery time</h5>
        <div className="flex flex-wrap gap-[0.625rem]">
        <FilterButton categoryName="0-10min" />
        <FilterButton categoryName="10-30min" />
        <FilterButton categoryName="30-60min" />
        <FilterButton categoryName="1 hour+" />
        </div>
    </div>
  );
}