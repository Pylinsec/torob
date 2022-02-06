import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./home.css";
import "./homeitem.css";
import torob_logo from "./../../assets/svg/torob_logo.svg";
import search from "./../../assets/svg/search.svg";
import Login from "../login/login";
import { useState } from "react";
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

function Home() {
  const [appliance, setOpenAppliance] = useState(false);
  const [baby, setOpenBaby] = useState(false);
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
  // const [openModal, setOpenModal] = useState(false);
  const header_json = [
    {
      title: "موبایل وتبلت",
      class: "mobile_div",
      modalFunc: Mobile,
      openModal: mobile,
      setOpenModal: setOpenMobile,
    },
    {
      title: "لب تاب ،کامپیوتر،اداری",
      class: "labtop_div",
      modalFunc: Computer,
      openModal: computer,
      setOpenModal: setOpenComputer,
    },

    {
      title: "هایپر مارکت",
      class: "hyper_div",
      modalFunc: Hypermarket,
      openModal: hypermarket,
      setOpenModal: setOpenHypermarket,
    },
    {
      title: "لوازم خانگی",
      class: "appliance_div",
      modalFunc: Appliance,
      openModal: appliance,
      setOpenModal: setOpenAppliance,
    },
    {
      title: "پوشاک،کیف و کفش",
      class: "clothing_div",
      modalFunc: Clothing,
      openModal: clothing,
      setOpenModal: setOpenClothing,
    },
    {
      title: "زیبایی و بهداشت",
      class: "health_div",
      modalFunc: Health,
      openModal: health,
      setOpenModal: setOpenHealth,
    },
    {
      title: "صوتی و تصویری",
      class: "media_div",
      modalFunc: Mobile,
      openModal: media,
      setOpenModal: setOpenMedia,
    },
    {
      title: "خودرو و سایر وسایل نقلیه",
      class: "vihicle_div",
      modalFunc: Vihicle,
      openModal: vihicle,
      setOpenModal: setOpenVihicle,
    },
    {
      title: "ورزش و سرگرمی",
      class: "sport_div",
      modalFunc: Sport,
      openModal: sport,
      setOpenModal: setOpenSport,
    },
    {
      title: "سلامت و پزشکی",
      class: "medical_div",
      modalFunc: Medical,
      openModal: medical,
      setOpenModal: setOpenMedical,
    },
    {
      title: "فرهنگی وهنری",
      class: "cultural_div",
      modalFunc: Cultural,
      openModal: cultural,
      setOpenModal: setOpenCultural,
    },
    {
      title: "کودک و نوزاد",
      class: "baby_div",
      modalFunc: Baby,
      openModal: baby,
      setOpenModal: setOpenBaby,
    },
    {
      title: "سایر دسته ها",
      class: "others_div",
      modalFunc: Others,
      openModal: others,
      setOpenModal: setOpenOthers,
    },
  ];
  return (
    <div className="home_container  overflow-hidden   ">
      <header className="home_header bg-[#f9fafb] ">
        <div className="home_header_item_out">
          {header_json.map((item) => (
            <div onClick={() => item.setOpenModal((prevValue) => !prevValue)}>
              <a className={item.class}>
                <span>{item.title}</span>
              </a>
              {item.openModal && <item.modalFunc />}
            </div>
          ))}
        </div>

        <section className="home_header_sign flex flex-col  ">
          <button
            onClick={() => setOpenLogin((prevLogin) => !prevLogin)}
            className="home_btn"
          >
            ورود / ثبت نام
          </button>
          <div className=" flex  z-10 bg-[black]">
            {login && <Login closeLogin={setOpenLogin} />}
          </div>
        </section>
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

export default Home;
