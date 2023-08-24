import React from "react";
import MainLayout from "./components/MainLayout";
import HomePage from "./components/Pages/HomePage";
import PlantsPage from "./components/Pages/PlantsPage";
import SettingsPage from "./components/Pages/SettingsPage";
import SearchPage from "./components/Pages/SearchPage";
import HomePageNav from "./components/Pages/HomePageNav";
import UpcomingPage from "./components/Pages/UpcomingPage";
import AddNewPlant from "./components/Pages/AddNewPlant";
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
    setPlants(
      plants.map((plant) => {
        if (plant.id === plantId) {
          return;
        } else {
          return plant;
        }
      })
    );
  }

  return (
    <PlantContext.Provider
      value={{ plants, addPlant, waterPlant, removePlant }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="home-nav" element={<HomePageNav />}>
              <Route index element={<HomePage />}></Route>
              <Route path="upcoming" element={<UpcomingPage />}></Route>
            </Route>
            <Route path="plants" element={<PlantsPage />}></Route>
            <Route path="settings" element={<SettingsPage />}></Route>
            <Route path="search" element={<SearchPage />}></Route>
          </Route>
          <Route path="newplantinfo" element={<NewPlantInfoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </PlantContext.Provider>
  );
}

export { PlantContext };
