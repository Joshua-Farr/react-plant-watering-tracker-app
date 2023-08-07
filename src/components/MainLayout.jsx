import React from "react";
import MainNavBar from "./MainNavBar";
import { Outlet } from "react-router-dom";
import "../styling/MainLayout.css";

export default function MainLayout() {
  return (
    <div className="app-wrapper">
      {/* <div className="background-img-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#7da08e"
            fill-opacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,138.7C384,171,480,213,576,240C672,267,768,277,864,234.7C960,192,1056,96,1152,69.3C1248,43,1344,85,1392,106.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div> */}
      <Outlet />
      <MainNavBar />
    </div>
  );
}
