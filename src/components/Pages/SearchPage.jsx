import React from "react";
import "../../styling/SearchPage.css";

export default function SearchPage() {
  return (
    <div className="my-plants-container">
      <h1>Find Plant</h1>
      <form action="">
        <input
          className="find-plant-input"
          placeholder="Search for a plant:"
        ></input>
      </form>
    </div>
  );
}
