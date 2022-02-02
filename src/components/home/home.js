import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./home.css";
import "./homeitem.css";
import Modals from "./modals";
export default function Home() {
  return (
    <div className="home_container">
      <header className="home_header">
        <div className="home_header_item_out">
          {header_json.map((item) => (
            <a className={item.class}>
              <span>{item.title}</span>
            </a>
          ))}
        </div>
        <div className="home_header_sign">
          <button className="home_btn">ورود / ثبت نام</button>
        </div>
        {/* <Modals /> */}
      </header>
      <body className="home_body"></body>
    </div>
  );
}
const header_json = [
  { title: "موبایل وتبلت", class: "mobile_div" },
  { title: "لب تاب ،کامپیوتر،اداری", class: "labtop_div" },
  { title: "هایپر مارکت", class: "hyper_div" },
  { title: "لوازم خانگی", class: "appliance_div" },
  { title: "پوشاک،کیف و کفش", class: "clothing_div" },
  { title: "زیبایی و بهداشت", class: "health_div" },
  { title: "صوتی و تصویری", class: "media_div" },
  { title: "خودرو و سایر وسایل نقلیه", class: "vihicle_div" },
  { title: "ورزش و سرگرمی", class: "sport_div" },
  { title: "سلامت و پزشکی", class: "medical_div" },
  { title: "فرهنگی وهنری", class: "cultural_div" },
  { title: "کودک و نوزاد", class: "baby_div" },
  { title: "سایر دسته ها", class: "others_div" },
];
