import React from "react";
import MainLayout from "./components/MainLayout";
import HomePage from "./components/Pages/HomePage";
import PlantsPage from "./components/Pages/PlantsPage";
import SettingsPage from "./components/Pages/SettingsPage";
import SearchPage from "./components/Pages/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="plants" element={<PlantsPage />}></Route>
          <Route path="settings" element={<SettingsPage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
