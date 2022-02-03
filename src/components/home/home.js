import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./home.css";
import "./homeitem.css";
import Modals from "./modals";
import torob_logo from "./../../assets/svg/torob_logo.svg";
import search from "./../../assets/svg/search.svg";
export default function Home() {
  return (
    <div className="home_container  overflow-hidden min-w-[400px]">
      <header className="home_header bg-[#f9fafb] z-0">
        <div className="home_header_item_out">
          {header_json.map((item) => (
            <a className={item.class}>
              <span>{item.title}</span>
            </a>
          ))}
        </div>

        <div className="home_header_sign">
          <button className="home_btn ">ورود / ثبت نام</button>
        </div>
        {/* <Modals /> */}
      </header>
      <main className=" min-w-[400px] h-full flex flex-col items-center justify-center ">
        <div className="  h-[230px] relative top-[-160px] flex flex-col items-center justify-center ">
          <section className="flex justify-start flex-row-reverse mt-[15px] mb-[24px]">
            <div className="w-[85px] h-[85px] mt-[9px] ml-[12px] ">
              <a href="/">
                <img src={torob_logo} />
              </a>
            </div>

            <div>
              <h1 className="text-[#d73948] text-[40px] font-bold  text-right">
                ترب
              </h1>
              <span className="text-[ #808080] text-[14px] text-[#808080]">
                موتور جستجوی هوشمند خرید
              </span>
            </div>
          </section>
          <section className=" w-[478px] h-[46px] border-solid border-[1px] ">
            <form className="flex flex-row-reverse  bg-[#ffffff] rounded-[4px] border-[1px] border-solid border-[#1b1919]">
              <div className="w-[50px] h-[46px]  m-[1px] p-[13px]">
                <img src={search} className="h-[20px] w-[20px] " />
              </div>
              <input
                className="  text-[16px] w-full h-full w-[478px] h-[46px] py-[1px] pl-[10px] text-right 
                
                  focus:outline-none focus:border-none "
                placeholder="نام کالا را وارد کنید"
                name="query"
                autocomplete="off"
                value=""
              />
            </form>
          </section>
          <section className=" w-[478px] h-[56px] text-center my-[24px]">
            <button
              className="w-[120px] h-[40px] bg-[#d73948] rounded-[4px] text-white"
              href=""
            >
              تخفیف‌ها
            </button>
          </section>
        </div>
      </main>
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
