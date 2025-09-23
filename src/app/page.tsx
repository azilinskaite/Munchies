import Header from "@/components/header/header";
import Navbar from "@/components/navbar/navbar";
import RestaurantsList from "@/components/restaurants-list/restaurantsList";
import Sidebar from "@/components/sidebar/sidebar";
import React from "react";

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