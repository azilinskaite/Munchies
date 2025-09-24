import React from "react";
import Navbar from "@/components/navbar/navbar";
import RestaurantsList from "@/components/restaurants-list/restaurants-list";
import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="min-w-[25%] md:max-w-[15%]">
        <Sidebar />
      </div>
      
      <div className="flex-1">
        <Navbar />
        <RestaurantsList />
      </div>
    </div>
  );
}