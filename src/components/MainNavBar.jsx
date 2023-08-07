import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchRoundedIcon from "@mui/icons-material/Search";
import SettingsRoundedIcon from "@mui/icons-material/Settings";
import YardRoundedIcon from "@mui/icons-material/YardRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import "../styling/MainNavBar.css";

export default function MainNavBar() {
  return (
    <div className="menu-bar-wrapper">
      <div className="menu-item">
        <HomeIcon />
        <h4>Home</h4>
      </div>
      <div className="menu-item">
        <SpaRoundedIcon />
        <h4>My Plants</h4>
      </div>
      <div className="menu-item">
        <SearchRoundedIcon />
        <h4>Search</h4>
      </div>
      <div className="menu-item">
        <SettingsRoundedIcon />
        <h4>Settings</h4>
      </div>
    </div>
  );
}
