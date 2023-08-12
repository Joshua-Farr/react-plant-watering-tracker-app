import React from "react";
import "../../styling/WaterModal.css";

export default function WaterModal({ toggle }) {
  return (
    <div className="modal-container">
      <h3>Are you sure you want to water this plant?</h3>
      <div className="buttons">
        <button
          className="water-cancel-btn"
          onClick={() => {
            toggle();
          }}
        >
          No
        </button>
        <button className="water-yes-btn">Yes</button>
      </div>
    </div>
  );
}
