import React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import { NavLink } from "react-router-dom";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import "../../styling/PlantsPage.css";

export default function PlantsPage() {
  return (
    <div className="my-plants-container">
      <h1 className="page-title">My Plants</h1>

      <div className="plant-container">
        <img
          src="https://images.pexels.com/photos/3125195/pexels-photo-3125195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="my-plant-info">
          <h2 className="my-plant-name">Monstera</h2>
          <h3 className="my-plant-location">Location: Office</h3>
          <span className="last-watered-date">
            <WaterDropRoundedIcon className="water-droplet" />
            August 12th
          </span>
        </div>
        <RemoveCircleRoundedIcon className="delete-button" />
      </div>

      <div className="plant-container">
        <img
          src="https://images.pexels.com/photos/12123235/pexels-photo-12123235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="my-plant-info">
          <h2 className="my-plant-name">Satin Pothos</h2>
          <h3 className="my-plant-location">Location: Living Room</h3>
          <span className="last-watered-date">
            <WaterDropRoundedIcon className="water-droplet" />
            July 27th
          </span>
        </div>
        <RemoveCircleRoundedIcon className="delete-button" />
      </div>

      <NavLink to="/addnewplant">
        <AddCircleRoundedIcon className="add-plant-button" />
      </NavLink>
    </div>
  );
}
