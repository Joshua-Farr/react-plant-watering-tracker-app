import React from "react";
import "../../styling/AddNewPlant.css";

export default function AddNewPlant() {
  return (
    <div className="my-plants-container">
      <h1>Find Your Plant</h1>
      <form action="">
        <input
          className="find-plant-input"
          placeholder="Search for a plant:"
        ></input>
      </form>

      <div className="list-of-plant-types">
        <div className="plant-type">
          <img
            src="https://images.pexels.com/photos/1382394/pexels-photo-1382394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <h3 className="plant-type-name">Cacti & Succulents</h3>
        </div>
        <div className="plant-type">
          <img
            src="https://images.pexels.com/photos/5085407/pexels-photo-5085407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <h3 className="plant-type-name">Vegetables</h3>
        </div>
        <div className="plant-type">
          <img
            src="https://images.pexels.com/photos/2090641/pexels-photo-2090641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <h3 className="plant-type-name">Foilage Plants</h3>
        </div>
        <div className="plant-type">
          <img
            src="https://images.pexels.com/photos/7663157/pexels-photo-7663157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <h3 className="plant-type-name">Flowering Plants</h3>
        </div>
        <div className="plant-type">
          <img
            src="https://images.pexels.com/photos/3699859/pexels-photo-3699859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <h3 className="plant-type-name">Orchids</h3>
        </div>
        <div className="plant-type">
          <img
            src="https://images.pexels.com/photos/3912947/pexels-photo-3912947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <h3 className="plant-type-name">Herbs</h3>
        </div>
      </div>
    </div>
  );
}
