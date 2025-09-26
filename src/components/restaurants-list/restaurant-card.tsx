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
      className="flex flex-col p-[1rem] gap-[6.875rem] border rounded-lg bg-[var(--white)] justify-between shadow-custom-light relative overflow-hidden
      "
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top -2rem right -2rem",
        backgroundSize: "8.75rem 8.75rem",
        backgroundClip: "padding-box"
      }}
      
    >
      <div className="flex gap-x-[0.5rem] self-start">
        <StatusBadge {...statusProps} />
        {isOpen && <StatusBadge status={deliveryLabel} />}
      </div>
      <div className="flex justify-between justify-self-end align-self-end items-end gap-x-[0.1rem]">
        <h3>{restaurantName}</h3>
        <ArrowButton />
      </div>

      {!isOpen && (
        <div className="bg-[var(--white)]/80 absolute inset-0 flex items-center justify-center z-5">
          <div className="border rounded-lg bg-[var(--off-white)] px-[0.75rem] py-[0.5rem] shadow-light">
            <span className="text-[0.75rem] text-[var(--black)]">
              Opens tomorrow at 12pm
            </span>
          </div>
        </div>
      )}

    </div>
  );
}
