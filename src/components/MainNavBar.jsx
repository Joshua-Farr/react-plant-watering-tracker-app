import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchRoundedIcon from "@mui/icons-material/Search";
import SettingsRoundedIcon from "@mui/icons-material/Settings";
import YardRoundedIcon from "@mui/icons-material/YardRounded";
import LocalFloristRoundedIcon from "@mui/icons-material/LocalFloristRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Link, NavLink } from "react-router-dom";
import "../styling/MainNavBar.css";

export default function MainNavBar() {
  return (
    <div className="menu-bar-wrapper">
      <NavLink to="home-nav" style={{ textDecoration: "none" }}>
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

      <NavLink to="plants" style={{ textDecoration: "none" }}>
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
      {/* <NavLink
        to="search"
        className={({ isActive }) =>
          isActive ? "nav-bar-link selected" : "nav-bar-link"
        }
      >
        <div className="menu-item">
          <SearchRoundedIcon />
          <h4>Search</h4>
        </div>
      </NavLink>
      <NavLink
        to="settings"
        className={({ isActive }) =>
          isActive ? "nav-bar-link selected" : "nav-bar-link"
        }
      >
        <div className="menu-item">
          <SettingsRoundedIcon />
          <h4>Settings</h4>
        </div>
      </NavLink> */}
    </div>
  );
}
