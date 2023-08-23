import React from "react";
import { PlantContext } from "../App";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import WaterModal from "./special_components/WaterModal";
import "../styling/WaterModal.css";
import Confetti from "react-confetti";

export default function OverdueTaskCard() {
  const [thirstyPlant, setThirstyPlant] = React.useState("");
  const plantsData = React.useContext(PlantContext).plants;
  const { waterPlant } = React.useContext(PlantContext);

  const [havePlants, setHavePlants] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(true);

  React.useEffect(() => {
    if (plantsData.length > 0) {
      setHavePlants(true);
    } else {
      setHavePlants(false);
    }
  }, [plantsData]);

  //Checking to ensure that state is working correctly...
  // React.useEffect(() => {
  //   console.log("This is the state of the modal: ", showModal);
  // }, [showConfetti]);

  function toggleModal() {
    setShowModal((theState) => !theState);
    console.log("Heres updated plants data: ", plantsData);
  }

  function waterThisPlant() {
    waterPlant(thirstyPlant);
    console.log("Watering!");
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

        return (
          <>
            <>
              <div
                className="upcoming-reminder-card clickable"
                onClick={() => {
                  console.log(`PlantId ${singlePlant.id} selected!`);
                  setThirstyPlant(singlePlant.id);
                  toggleModal();
                  console.log("This is the thirsty plant!!", thirstyPlant);
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
        <WaterModal
          toggle={toggleModal}
          waterThePlant={waterThisPlant}
          plantId={thirstyPlant}
        />
      ) : !showModal && havePlants ? (
        <>
          <h1 className="these-plants-need-water">These Plants Need Water:</h1>
          {console.log("Do we have thirsty plants?", havePlants)}
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
