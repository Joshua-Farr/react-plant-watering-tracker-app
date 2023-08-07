import React from "react";
import MainNavBar from "./MainNavBar";
import { Outlet } from "react-router-dom";
import "../styling/MainLayout.css";

export default function MainLayout() {
  return (
    <div className="app-wrapper">
      <Outlet />
      <MainNavBar />
    </div>
  );
}
