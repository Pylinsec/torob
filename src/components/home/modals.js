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

export default function Modals() {
  const [appliance, openappliance] = useState(false);
  const [baby, openbaby] = useState(false);
  const [clothing, openclothing] = useState(false);
  const [computer, opencomputer] = useState(false);
  const [cultural, opencultural] = useState(false);
  const [health, openhealth] = useState(false);
  const [hypermarket, openhypermarket] = useState(false);
  const [media, openmedia] = useState(false);
  const [medical, openmedical] = useState(false);
  const [mobile, openmobile] = useState(false);
  const [sport, opensport] = useState(false);
  const [vihicle, openvihicle] = useState(false);
  const [others, openothers] = useState(false);
  return <div>modals</div>;
}
