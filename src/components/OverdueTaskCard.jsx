import React from "react";
import { PlantContext } from "../App";
import ForestRoundedIcon from "@mui/icons-material/ForestRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";

export default function OverdueTaskCard() {
  const plantsData = React.useContext(PlantContext).plants;

  const [havePlants, setHavePlants] = React.useState(false);

  function getThirstyPlants() {
    let thirstyPlantsArray;
    const todaysDate = new Date();
    thirstyPlantsArray = plantsData.map((singlePlant) => {
      let nextWater = new Date(singlePlant.wateredDate);
      if (nextWater <= todaysDate) {
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
    setHavePlants((plants) => !plants);
    return thirstyPlantsArray;
  }

  return (
    <>
      {console.log(havePlants)}
      {havePlants ? (
        getThirstyPlants()
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
