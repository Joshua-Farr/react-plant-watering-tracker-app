import React from "react";
import { PlantContext } from "../App";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import WaterModal from "./special_components/WaterModal";
import "../styling/WaterModal.css";
import Confetti from "react-confetti";

export default function OverdueTaskCard() {
  const plantsData = React.useContext(PlantContext).plants;
  const [havePlants, setHavePlants] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(true);
  const [thirstyPlant, setThirstyPlant] = React.useState();

  //Checking to ensure that state is working correctly...
  React.useEffect(() => {
    console.log("This is the state of the modal: ", showModal);
  }, [showConfetti]);

  function toggleModal() {
    setShowModal((theState) => !theState);
    console.log(thirstyPlant);
  }

  function waterPlant() {
    const todaysDate = new Date();
    console.log("Watering the plant!, ID:", thirstyPlant);

    const newPlants = plantsData.map((plant) => {
      if (plant.id === thirstyPlant) {
        return { ...plant, wateredDate: todaysDate };
      }
    });
    console.log(newPlants);
    plantsData = newPlants;
    setShowModal((theState) => !theState);
  }

  function getOverduePlants() {
    const todaysDate = new Date();

    const upcomingPlantsArray = plantsData.map((singlePlant) => {
      let nextWater = new Date(singlePlant.wateredDate);

      nextWater.setDate(
        nextWater.getDate() + parseInt(singlePlant.waterSchedule)
      );

      let needs = nextWater <= todaysDate;
      if (needs) {
        let daysToWater = Math.round(
          nextWater.getTime() / 86400000 - todaysDate.getTime() / 86400000
        );

        React.useEffect(() => {
          if (upcomingPlantsArray) setHavePlants(true);
        }, []);

        return (
          <>
            <>
              <div
                className="upcoming-reminder-card clickable"
                onClick={() => {
                  console.log(`PlantId ${singlePlant.id} clicked!`);
                  toggleModal();
                  setThirstyPlant(singlePlant.id);
                }}
                data-plantId={singlePlant.id}
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
          </>
        );
      }
    });

    return upcomingPlantsArray;
  }
  const plantElements = getOverduePlants();
  return (
    <div className="modal-overlay">
      {showModal && havePlants ? (
        <WaterModal toggle={toggleModal} waterPlant={waterPlant} />
      ) : !showModal && havePlants ? (
        <>
          <h1 className="these-plants-need-water">These Plants Need Water:</h1>
          {plantElements}
        </>
      ) : (
        <div className="water-reminder-card">
          {/* <Confetti /> */}
          <div className="reminder-info-text">
            <div className="icon-circle">
              <CelebrationRoundedIcon size="large" />
            </div>
            <h3>All tasks completed!</h3>

            <p className="quote">
              "A beautiful plant is like having a friend around the house" -Beth
              Ditto
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
