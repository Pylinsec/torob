import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./home.css";
export default function Home() {
  return (
    <div className="home_container">
      <header className="home_header">
        <div className="home_header_item_out">
          {header_json.map((item) => (
            <div className={item.class}>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className="home_header_sign">
          <button className="home_btn">ورود / ثبت نام</button>
        </div>
      </header>
      <body className="home_body"></body>
    </div>
  );
}
const header_json = [
  { title: "موبایل وتبلت", class: "mobile_div" },
  { title: "لب تاب ،کامپیوتر،اداری", class: "labtop_div" },
  { title: "سایر دسته ها", class: "others_div" },
];
