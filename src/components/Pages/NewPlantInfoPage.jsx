import "../../styling/NewPlantInfoPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import { PlantContext } from "../../../src/App.jsx";
import { plantArray } from "../../../src/PlantImages.jsx";
import React from "react";

export default function NewPlantInfoPage() {
  const [plantName, setPlantName] = React.useState();
  const [plantLocation, setPlantLocation] = React.useState();
  const [wateredDate, setWateredDate] = React.useState();
  const [waterSchedule, setWaterSchedule] = React.useState();

  const { plants, addPlant } = React.useContext(PlantContext);

  function handleSubmit(e) {
    e.preventDefault();
    const plantImgIndex = Math.floor(Math.random() * plantArray.length);
    console.log("these are the plants: ", plantArray);
    console.log("this is the selected img: ", plantArray[plantImgIndex]);
    // const navigate = useNavigate();
    console.log(plantName, plantLocation, wateredDate, waterSchedule);
    const newPlant = {
      name: plantName,
      location: plantLocation,
      wateredDate: wateredDate,
      waterSchedule: waterSchedule,
      imgUrl: plantArray[plantImgIndex],
    };
    console.log(newPlant);
    addPlant(newPlant);
    console.log(plants);
    // navigate("..", { relative: "path" });
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
              value="location"
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
