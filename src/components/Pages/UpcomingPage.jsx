import React from "react";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import "../../styling/UpcomingPage.css";

export default function UpcomingPage() {
  return (
    <>
      <div className="upcoming-reminder-card">
        <div>
          <h3 className="time-left-until-action">In 10 days</h3>
          <h4 className="tasks-remaining">1 task</h4>
        </div>
        <div className="upcoming-plant-information">
          <div className="icon-circle">
            <img src="" alt="" />
          </div>
          <div className="reminder-info-text">
            <h3>Monstera</h3>
            <h4 className="reminder-info-location">Office</h4>
          </div>
          <div className="task-bubble">
            <WaterDropRoundedIcon size="large" />
          </div>
        </div>
        <h3 className="more-info-reminder">
          Tap on each task for instructions
        </h3>
      </div>
    </>
  );
}
