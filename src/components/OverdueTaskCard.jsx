import React from "react";
import { PlantContext } from "../App";
import ForestRoundedIcon from "@mui/icons-material/ForestRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";

export default function OverdueTaskCard() {
  const plantsData = React.useContext(PlantContext).plants;
  const [havePlants, setHavePlants] = React.useState(false);

  function getOverduePlants() {
    console.log("running thirsty plant funciton...");
    const todaysDate = new Date();

    const upcomingPlantsArray = plantsData.map((singlePlant) => {
      let nextWater = new Date(singlePlant.wateredDate);

      nextWater.setDate(
        nextWater.getDate() + parseInt(singlePlant.waterSchedule)
      );

      console.log("next water for thirsty plants: ", nextWater);
      let needs = nextWater <= todaysDate;
      if (needs) {
        console.log("thirstyy!");
        let daysToWater = Math.round(
          nextWater.getTime() / 86400000 - todaysDate.getTime() / 86400000
        );

        React.useEffect(() => {
          if (upcomingPlantsArray) setHavePlants(true);
        }, []);

        return (
          <div className="upcoming-reminder-card">
            <div className="upcoming-plant-information">
              <div className="icon-circle">
                <img src={singlePlant.imgUrl} alt="" />
              </div>
              <div className="reminder-info-text">
                <h3>{`${singlePlant.name}`}</h3>
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
  const plantElements = getOverduePlants();
  return (
    <>
      {havePlants ? (
        plantElements
      ) : (
        <div className="reminder-card">
          <div className="icon-circle">
            <ForestRoundedIcon size="large" />
          </div>
          <div className="reminder-info-text">
            <h3>All tasks completed! 🎉</h3>
            <h4>new tasks will show up here </h4>
          </div>
        </div>
      )}
    </>
  );
}
