import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocalFloristRoundedIcon from "@mui/icons-material/LocalFloristRounded";
import { NavLink } from "react-router-dom";
import "../styling/MainNavBar.css";

export default function MainNavBar() {
  return (
    <div className="menu-bar-wrapper">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <div
            className="menu-item"
            style={{ color: isActive ? "#7da08e" : `#969696` }}
          >
            <HomeIcon />
            <h4>Home</h4>
          </div>
        )}
      </NavLink>

      <NavLink to="/plants" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <div
            className="menu-item"
            style={{ color: isActive ? "#7da08e" : `#969696` }}
          >
            <LocalFloristRoundedIcon />
            <h4>My Plants</h4>
          </div>
        )}
      </NavLink>
    </div>
  );
}
