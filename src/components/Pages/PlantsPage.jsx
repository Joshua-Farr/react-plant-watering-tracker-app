import React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import PlantDetails from "../PlantDetails";
import MainNavBar from "../MainNavBar";
import { NavLink } from "react-router-dom";
import { PlantContext } from "../../App";
import "../../styling/PlantsPage.css";

export default function PlantsPage() {
  const { plants } = React.useContext(PlantContext);
  console.log("These are the plants in the system: ", plants);

  const { removePlant } = React.useContext(PlantContext);

  const plantElements = plants.map((plant) => {
    return (
      <PlantDetails
        name={plant.name}
        id={plant.id}
        location={plant.location}
        wateredDate={plant.wateredDate}
        waterSchedule={plant.waterSchedule}
        imgUrl={plant.imgUrl}
        removePlant={removePlant}
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
      <MainNavBar />
    </div>
  );
}
