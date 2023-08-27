import React from "react";
import MainNavBar from "./MainNavBar";
import HomePageNav from "./Pages/HomePageNav";
import { Outlet } from "react-router-dom";
import "../styling/MainLayout.css";
import "../styling/WaterModal.css";

export default function MainLayout() {
  return (
    <div className="modal-wrapper">
      <div className="app-wrapper">
        <HomePageNav />
        <Outlet />
        <MainNavBar />
      </div>
    </div>
  );
}
