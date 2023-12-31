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

  //Getting plant data from local storage
  React.useEffect(() => {
    const savedPlants = JSON.parse(localStorage.getItem("plantData"));
    if (savedPlants) {
      setPlants(savedPlants);
    }
  }, []);

  //Saving plant data to local storage
  React.useEffect(() => {
    localStorage.setItem("plantData", JSON.stringify(plants));
  }, [plants]);

  function addPlant(newPlant) {
    setPlants((thePlants) => [...thePlants, newPlant]);
  }

  function waterPlant(plantId) {
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
