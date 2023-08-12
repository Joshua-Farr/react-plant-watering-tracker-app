import React from "react";
import { PlantContext } from "../App";
import ForestRoundedIcon from "@mui/icons-material/ForestRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import WaterModal from "./special_components/WaterModal";
import "../styling/WaterModal.css";

export default function OverdueTaskCard() {
  const plantsData = React.useContext(PlantContext).plants;
  const [havePlants, setHavePlants] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  //Checking to ensure that state is working correctly...
  React.useEffect(() => {
    console.log("This is the state of the modal: ", showModal);
  }, [showModal]);

  function toggleModal() {
    setShowModal((theState) => !theState);
    console.log();
  }

  function waterPlant(plantId) {
    console.log("This is the plant!", plantId);
  }

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
          <>
            {showModal && <WaterModal toggle={toggleModal} />}
            <h1 className="title-main">These Plants Need Water:</h1>
            <div
              className="upcoming-reminder-card clickable"
              onClick={() => {
                console.log("button clicked!");
                toggleModal();
              }}
            >
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
          </>
        );
      }
    });

    return upcomingPlantsArray;
  }
  const plantElements = getOverduePlants();
  return (
    <div className="modal-overlay">
      {havePlants ? (
        plantElements
      ) : (
        <div className="water-reminder-card">
          <div className="icon-circle">
            <ForestRoundedIcon size="large" />
          </div>
          <div className="reminder-info-text">
            <h3>All tasks completed! 🎉</h3>
            <h4>new tasks will show up here </h4>
          </div>
        </div>
      )}
    </div>
  );
}
