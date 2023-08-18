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

const [plants, setPlants] = React.useState([]);

export default function App() {
  
  function addPlant(newPlant) {
    setPlants((thePlants) => [...thePlants, newPlant]);
    console.log(`Adding ${newPlant.name} to the plants data!`);
  }

  function waterPlant(plantId) {
    const todaysDate = new Date();
    setPlants((allPlants) => {
      allPlants.map((plant) => {
        if (plant.id === plantId) {
          return { ...plant, wateredDate: todaysDate };
        } else {
          return plant;
        }
      });
    });
  }

  return (
    <PlantContext.Provider value={{ plants, addPlant, waterPlant }}>
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
