import React from "react";
import { PlantContext } from "../App";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";

export default function UpcomingTaskCard() {
  const plantsData = React.useContext(PlantContext).plants;

  function getUpcomingPlants() {
    let upcomingPlantsArray;
    const todaysDate = new Date();
    console.log("This is the plants data: ", plantsData);

    upcomingPlantsArray = plantsData.map((singlePlant) => {
      let nextWater = new Date(singlePlant.wateredDate);

      //updating the next
      nextWater.setDate(
        nextWater.getDate() + parseInt(singlePlant.waterSchedule)
      );

      let daysToWater = Math.round(
        nextWater.getTime() / 86400000 - todaysDate.getTime() / 86400000
      );
      if (nextWater >= todaysDate) {
        return (
          <div className="upcoming-reminder-card">
            <div>
              <h3 className="time-left-until-action">
                {`Water in
                ${daysToWater}
                day${daysToWater > 1 ? "s" : ""}:`}
              </h3>
              {/* For future expansions of the application */}
              {/* <h4 className="tasks-remaining">1 task</h4> */}
            </div>
            <div className="upcoming-plant-information">
              <div className="icon-circle">
                <img src={singlePlant.imgUrl} alt="" />
              </div>
              <div className="reminder-info-text">
                <h3>{singlePlant.name}</h3>
                <h4 className="reminder-info-location">
                  {singlePlant.location}
                </h4>
              </div>
              <div className="task-bubble">
                <WaterDropRoundedIcon size="large" />
              </div>
            </div>
          </div>
        );
      }
    });
    return upcomingPlantsArray;
  }

  return <>{getUpcomingPlants()}</>;
}
