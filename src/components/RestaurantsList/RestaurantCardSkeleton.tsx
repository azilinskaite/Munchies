import React from "react";

export default function RestaurantCardSkeleton() {

  return (
    <div className="h-50 flex flex-col p-4 gap-[6.875rem] border rounded-lg bg-white justify-between shadow-custom-light relative overflow-hidden animate-pulse">
      <div className="flex gap-x-2 self-start">
        <div className="h-8 w-14 bg-gray-200 rounded-lg" />
        <div className="h-8 w-20 bg-gray-200 rounded-lg" />
      </div>
      <div className="flex justify-between items-end gap-x-1">
        <div className="h-8 w-30 bg-gray-300 rounded" />
        <div className="h-8 w-8 bg-gray-300 rounded-full" />
      </div>
      <div/>
    </div>
  );
}
