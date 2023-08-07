import React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { NavLink } from "react-router-dom";
import "../../styling/PlantsPage.css";

export default function PlantsPage() {
  return (
    <div className="my-plants-container">
      <h1>My Plants</h1>
      <NavLink to="/addnewplant">
        <AddCircleRoundedIcon className="add-plant-button" />
      </NavLink>
    </div>
  );
}
