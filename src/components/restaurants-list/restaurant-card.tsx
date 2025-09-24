import React from "react";
import StatusBadge from "./status-badge";
import ArrowButton from "./arrow-button";

interface RestaurantCardProps {
  restaurantName: string;
  imageUrl: string;
}

export default function RestaurantCard({
  restaurantName,
  imageUrl,
}: RestaurantCardProps) {
  return (
    <div
      className="flex flex-col p-[1rem] gap-[6.875rem] border rounded-lg bg-[var(--white)] justify-between shadow-custom-light relative overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top -2rem right -2rem",
        backgroundSize: "8.75rem 8.75rem",
      }}
    >
      <div className="flex gap-x-[0.5rem] self-start">
        <StatusBadge status="Open" color="--green" />
        <StatusBadge status="Closed" color="--black" />
      </div>
      <div className="flex justify-between justify-self-end items-top gap-x-[1rem]">
        <h3 className="mb-0">{restaurantName}</h3>
        <ArrowButton />
      </div>
    </div>
  );
}
