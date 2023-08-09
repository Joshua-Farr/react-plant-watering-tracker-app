import React from "react";

import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";

export default function PlantDetails({
  name = "Planto",
  location = "Office",
  wateredDate = "March 24th",
  imgUrl = "https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
}) {
  return (
    <div className="plant-container">
      <img src={imgUrl} alt="" />
      <div className="my-plant-info">
        <h2 className="my-plant-name">{name}</h2>
        <h3 className="my-plant-location">{location}</h3>
        <span className="last-watered-date">
          <WaterDropRoundedIcon className="water-droplet" />
          {wateredDate}
        </span>
      </div>
      <RemoveCircleRoundedIcon className="delete-button" />
    </div>
  );
}
