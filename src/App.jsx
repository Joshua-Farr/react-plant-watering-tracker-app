import React from "react";
import MainLayout from "./components/MainLayout";
import PlantsPage from "./components/Pages/PlantsPage";
import OverdueTaskCard from "./components/OverdueTaskCard";
import UpcomingPage from "./components/Pages/UpcomingPage";
import NewPlantInfoPage from "./components/Pages/NewPlantInfoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const PlantContext = React.createContext();

export default function App() {
  const [plants, setPlants] = React.useState([]);

  function addPlant(newPlant) {
    setPlants((thePlants) => [...thePlants, newPlant]);
    console.log(`Adding ${newPlant.name} to the plants data!`);
  }

  function waterPlant(plantId) {
    console.log("Water Plants function called!");
    console.log("Here are the plants: ", plants);
    const todaysDate = new Date();

    const month = todaysDate.getMonth() + 1;
    const day = todaysDate.getDate();
    const year = todaysDate.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;

    setPlants(
      plants.map((plant) => {
        if (plant.id === plantId) {
          return { ...plant, wateredDate: formattedDate.toString() };
        } else {
          return plant;
        }
      })
    );
  }

  function removePlant(plantId) {
    console.log("Removing Plant: ", plantId);

    let newPlants = [];

    plants.map((plant) => {
      if (plant.id !== plantId) {
        newPlants.push(plant);
      }
    });

    setPlants(newPlants);
  }

  return (
    <PlantContext.Provider
      value={{ plants, addPlant, waterPlant, removePlant }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<OverdueTaskCard />}></Route>
            <Route path="upcoming" element={<UpcomingPage />}></Route>
          </Route>
          <Route path="plants" element={<PlantsPage />}></Route>
          <Route path="newplantinfo" element={<NewPlantInfoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </PlantContext.Provider>
  );
}

export { PlantContext };
