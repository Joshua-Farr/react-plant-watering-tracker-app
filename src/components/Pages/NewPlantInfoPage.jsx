import "../../styling/NewPlantInfoPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import { PlantContext } from "../../../src/App.jsx";
import { plantArray } from "../../../src/PlantImages.jsx";
import { nanoid } from "nanoid";
import React from "react";

export default function NewPlantInfoPage() {
  const [plantName, setPlantName] = React.useState("Planto");
  const [plantLocation, setPlantLocation] = React.useState("Office");
  const [wateredDate, setWateredDate] = React.useState("2023-08-01");
  const [waterSchedule, setWaterSchedule] = React.useState("7");

  const { plants, addPlant } = React.useContext(PlantContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const plantImgIndex = Math.floor(Math.random() * plantArray.length);
    console.log("these are the plants: ", plantArray);
    console.log("this is the selected img: ", plantArray[plantImgIndex]);
    console.log(plantName, plantLocation, wateredDate, waterSchedule);
    const newPlant = {
      name: plantName,
      location: plantLocation,
      wateredDate: wateredDate,
      waterSchedule: waterSchedule,
      imgUrl: plantArray[plantImgIndex],
      id: nanoid(),
    };
    console.log(newPlant);
    addPlant(newPlant);
    console.log(plants);
    navigate("../plants", { relative: "path" });
  }

  return (
    <div className="my-plants-container">
      {/* <h1>🌱 Add a plant: </h1> */}
      <img
        src="https://images.pexels.com/photos/3153526/pexels-photo-3153526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="plant-form-img"
      />
      <div className="add-new-plant-form">
        <form id="new-plant-form" onSubmit={handleSubmit}>
          <label>
            Plant Name:
            <input
              type="text"
              className="plant-name-input"
              onChange={(e) => {
                console.log(e.target.value);
                setPlantName(e.target.value);
              }}
            />
          </label>

          <label>
            Location:
            <select
              onChange={(e) => {
                setPlantLocation(e.target.value);
              }}
            >
              <option>Select</option>
              <option>Outside</option>
              <option>Office</option>
              <option>Kitchen</option>
              <option>Living Room</option>
              <option>Dining Room</option>
              <option>Laundry Room</option>
              <option>Master Bedroom</option>
              <option>Guest Bedroom</option>
              <option>Bathroom</option>
            </select>
          </label>

          <label>
            When did you last water this plant?
            <input
              type="date"
              className="plant-form-date"
              onChange={(e) => {
                setWateredDate(e.target.value);
              }}
            />
          </label>

          <label>
            How often does it need watering?
            <select
              onChange={(e) => {
                setWaterSchedule(e.target.value);
              }}
            >
              <option>Select</option>
              <option value="7">Every week</option>
              <option value="14">Every other week</option>
              <option value="30">Once a month</option>
              <option value="60">Every other month</option>
            </select>
          </label>
        </form>
        <div className="plant-form-buttons">
          <NavLink to="../plants" relative="path">
            <button className="cancel-button">Cancel</button>
          </NavLink>
          <button className="submit-button" type="submit" form="new-plant-form">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
