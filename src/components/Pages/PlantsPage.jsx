import React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import PlantDetails from "../PlantDetails";
import { NavLink } from "react-router-dom";
import { PlantContext } from "../../App";
import "../../styling/PlantsPage.css";

export default function PlantsPage() {
  const { plants } = React.useContext(PlantContext);
  console.log(plants);

  const plantElements = plants.map((plant) => {
    return (
      <PlantDetails
        name={plant.name}
        location={plant.location}
        wateredDate={plant.wateredDate}
        waterSchedule={plant.waterSchedule}
        imgUrl={plant.imgUrl}
      />
    );
  });

  return (
    <div className="my-plants-container">
      <h1 className="page-title">My Plants</h1>
      <div className="plant-wrapper">{plantElements}</div>
      <NavLink to="/newplantinfo">
        <AddCircleRoundedIcon className="add-plant-button" />
      </NavLink>
    </div>
  );
}
