import React from "react";

export default function NewPlantInfoPage() {
  return (
    <div className="my-plants-container">
      <h1>Lets add a new plant to your collection! 🌱</h1>
      <h3></h3>
      <div className="add-new-plant-form">
        <form action="">
          {/* <input type="file" name="file" /> */}
          <label>
            Plant Name:
            <input type="text" />
          </label>

          <label>
            Location:
            <select>
              <option>Select Option</option>
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
            <input type="date" />
          </label>

          <label>
            How often does it need watering?
            <select>
              <option>Select Option</option>
              <option>Every week</option>
              <option>Every other week</option>
              <option>Once a month</option>
              <option>Every other month</option>
            </select>
          </label>
          <button className="submit-button">Add Plant</button>
        </form>
      </div>
    </div>
  );
}
