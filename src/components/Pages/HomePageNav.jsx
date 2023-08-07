import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../styling/HomePage.css";

export default function HomePageNav() {
  return (
    <div>
      <div className="nav-link-homepage">
        <NavLink to="." className="nav-link-main">
          Today
        </NavLink>
        <NavLink to="upcoming" className="nav-link-main">
          Upcoming
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
