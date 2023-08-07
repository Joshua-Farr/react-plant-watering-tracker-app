import React from "react";
import MainNavBar from "./MainNavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Outlet />
      <MainNavBar />
    </div>
  );
}
