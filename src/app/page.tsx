import React from "react";
import Navbar from "@/components/navbar/navbar";
import RestaurantsList from "@/components/restaurants-list/restaurants-list";
import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Navbar />
        <RestaurantsList />
      </div>
    </div>
  );
}