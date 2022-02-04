import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./modals.css";
import Appliance from "../appliance/appliance";
import Baby from "../baby/baby";
import Clothing from "../clothiong/clothing";
import Computer from "../computer/computer";
import Cultural from "../cultural/cultural";
import Health from "../health/health";
import Hypermarket from "../hypermarket/hypermarket";
import Media from "../media/media";
import Medical from "../medical/medical";
import Mobile from "../mobile/mobile";
import Sport from "../sport/sport";
import Vihicle from "../vihicle/vihicle";
import Others from "../others/others";
import Login from "../login/login";

function Modals() {
  const [appliance, setOpenAppliance] = useState(false);
  const [baby, setOpenbaby] = useState(false);
  const [clothing, setOpenClothing] = useState(false);
  const [computer, setOpenComputer] = useState(false);
  const [cultural, setOpenCultural] = useState(false);
  const [health, setOpenHealth] = useState(false);
  const [hypermarket, setOpenHypermarket] = useState(false);
  const [media, setOpenMedia] = useState(false);
  const [medical, setOpenMedical] = useState(false);
  const [mobile, setOpenMobile] = useState(false);
  const [sport, setOpenSport] = useState(false);
  const [vihicle, setOpenVihicle] = useState(false);
  const [others, setOpenOthers] = useState(false);
  const [login, setOpenLogin] = useState(false);
  return <div></div>;
}
export default Modals();
