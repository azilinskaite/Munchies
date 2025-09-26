import React from "react";
import StatusBadge from "./status-badge";
import ArrowButton from "./arrow-button";
import { getDeliveryRangeLabel } from "../sidebar/filter-delivery";

interface RestaurantCardProps {
  restaurantName: string;
  imageUrl: string;
  isOpen: boolean;
  deliveryTimeMinutes: number;
}

export default function RestaurantCard({
  restaurantName,
  imageUrl,
  isOpen,
  deliveryTimeMinutes,
}: RestaurantCardProps) {
  const statusProps = getStatusProps(isOpen);

  function getStatusProps(isOpen: boolean) {
  return isOpen
    ? { status: "Open", color: "--green" }
    : { status: "Closed", color: "--black" };
}

const deliveryLabel = getDeliveryRangeLabel(deliveryTimeMinutes);

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
        <StatusBadge {...statusProps} />
        <StatusBadge status={deliveryLabel} />
      </div>
      <div className="flex justify-between justify-self-end items-top gap-x-[1rem]">
        <h3 className="mb-0">{restaurantName}</h3>
        <ArrowButton />
      </div>
    </div>
  );
}
