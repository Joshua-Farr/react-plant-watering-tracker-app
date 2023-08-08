import "../../styling/NewPlantInfoPage.css";
import { NavLink } from "react-router-dom";
import React from "react";

export default function NewPlantInfoPage() {
  return (
    <div className="my-plants-container">
      <h1>Lets add a new plant to your collection! 🌱</h1>
      <img
        src="https://images.pexels.com/photos/3153526/pexels-photo-3153526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="plant-form-img"
      />
      <div className="add-new-plant-form">
        <form action="">
          <label>
            Plant Name:
            <input type="text" className="plant-name-input" />
          </label>

          <label>
            Location:
            <select>
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
            <input type="date" className="plant-form-date" />
          </label>

          <label>
            How often does it need watering?
            <select>
              <option>Select</option>
              <option>Every week</option>
              <option>Every other week</option>
              <option>Once a month</option>
              <option>Every other month</option>
            </select>
          </label>
        </form>
        <div className="plant-form-buttons">
          <NavLink to="../plants" relative="path">
            <button className="cancel-button">Cancel</button>
          </NavLink>
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
}
