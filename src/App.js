import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Appliance from "./components/appliance/appliance";
import Baby from "./components/baby/baby";
import Clothing from "./components/clothiong/clothing";
import Computer from "./components/computer/computer";
import Cultural from "./components/cultural/cultural";
import Home from "./components/home/home";
import Health from "./components/health/health";
import Media from "./components/media/media";
import Medical from "./components/medical/medical";
import Mobile from "./components/mobile/mobile";
import Others from "./components/others/others";
import Sport from "./components/sport/sport";
import Vihicle from "./components/vihicle/vihicle";
import Hypermarket from "./components/hypermarket/hypermarket";

function App() {
  return (
    <div className="app_container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appliance" element={<Appliance />} />
        <Route path="/baby" element={<Baby />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/cultural" element={<Cultural />} />
        <Route path="/health" element={<Health />} />
        <Route path="/hypermarket" element={<Hypermarket />} />
        <Route path="/media" element={<Media />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/vihicle" element={<Vihicle />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </div>
  );
}

export default App;
