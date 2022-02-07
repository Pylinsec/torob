import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./computer.css";
export default function Computer() {
  return (
    <div className="mobile_container w-9/10  bg-[#f9fafb] z-20 absolute inset-x-[40px] top-[100px] ">
      <div className="">
        <div>
          <a className="" href="">
            <div className="droptitle hover:text-[#d73948] ">
              لپ‌تاپ، کامپیوتر، اداری
            </div>
          </a>

          <ul className="mainlist px-[34px]  ">
            <div className="columnelement ">
              <a className="link-on-clicksubtitle " href="">
                <span>لپ‌تاپ و نوت‌بوک</span>
              </a>
              <ul className="subsubitems">
                <div>
                  <a className="link-on-clickgrayhover" href="/">
                    <span>لپ‌تاپ اپل، مک‌بوک</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/533/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%85%D8%A7%DB%8C%DA%A9%D8%B1%D9%88%D8%B3%D8%A7%D9%81%D8%AA-microsoft-laptop/"
                  >
                    <span>لپ‌تاپ مایکروسافت</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/416/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%AF%D9%84-dell/"
                  >
                    <span>لپ‌تاپ دل</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/413/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%A7%DA%86-%D9%BE%DB%8C-hp/"
                  >
                    <span>لپ‌تاپ اچ‌ پی</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/414/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%A7%DB%8C%D8%B3%D8%B1-acer/"
                  >
                    <span>لپ‌تاپ ایسر</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/415/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%A7%D9%85-%D8%A7%D8%B3-%D8%A7%DB%8C-msi/"
                  >
                    <span>لپ‌تاپ ام اس آی</span>
                  </a>
                </div>
              </ul>
            </div>
            <div>
              <ul className="subsubitems">
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/417/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%84%D9%86%D9%88%D9%88-lenovo/"
                  >
                    <span>لپ‌تاپ لنوو</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/418/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%A7%DB%8C%D8%B3%D9%88%D8%B3-asus/"
                  >
                    <span>لپ‌تاپ ایسوس</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/2025/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%87%D9%88%D8%A7%D9%88%DB%8C/"
                  >
                    <span>لپ‌تاپ هوآوی</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/421/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%81%D9%88%D8%AC%DB%8C%D8%AA%D8%B3%D9%88-fujitsu/"
                  >
                    <span>لپ‌تاپ فوجیتسو</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/423/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA-gigabyte/"
                  >
                    <span>لپ‌تاپ گیگابایت</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/422/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%B3%D9%88%D9%86%DB%8C-sony/"
                  >
                    <span>لپ‌تاپ سونی</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/419/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%B3%D8%A7%D9%85%D8%B3%D9%88%D9%86%DA%AF-samsung/"
                  >
                    <span>لپ‌تاپ سامسونگ</span>
                  </a>
                </div>
              </ul>
            </div>
            <div>
              <ul className="subsubitems">
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1045/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%B4%DB%8C%D8%A7%DB%8C%D9%88%D9%85%DB%8C-xiaomi-laptop/"
                  >
                    <span>لپ‌تاپ شیائومی</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1046/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%AA%D9%88%D8%B4%DB%8C%D8%A8%D8%A7-toshiba-laptop/"
                  >
                    <span>لپ‌تاپ توشیبا</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1692/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%B1%DB%8C%D8%B2%D8%B1/"
                  >
                    <span>لپ‌تاپ ریزر</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/411/%D8%B3%D8%A7%DB%8C%D8%B1-%D8%A8%D8%B1%D9%86%D8%AF%D9%87%D8%A7%DB%8C-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%88-%D9%86%D9%88%D8%AA-%D8%A8%D9%88%DA%A9-other-brands/"
                  >
                    <span>سایر برندهای لپ‌تاپ و نوت‌بوک</span>
                  </a>
                </div>
              </ul>
            </div>
            <div className="columnelement">
              <a
                className="link-on-clicksubtitle"
                href="/browse/100/%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-%D9%88-%D9%85%D8%A7%D9%86%DB%8C%D8%AA%D9%88%D8%B1-pcs.-monitor/"
              >
                <span>کامپیوتر و مانیتور</span>
              </a>
              <ul className="subsubitems">
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/230/%D9%85%D8%A7%D9%86%DB%8C%D8%AA%D9%88%D8%B1-monitor/"
                  >
                    <span>مانیتور</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/231/%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-%D9%87%D8%A7%DB%8C-all-in-one-all-in-one/"
                  >
                    <span>کامپیوتر های All in one</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1165/%D9%85%D8%A7%D9%86%DB%8C%D8%AA%D9%88%D8%B1-%D8%B5%D9%86%D8%B9%D8%AA%DB%8C/"
                  >
                    <span>مانیتور صنعتی</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/232/%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-%D8%AF%D8%B3%DA%A9%D8%AA%D8%A7%D9%BE-others-monitor/"
                  >
                    <span>کامپیوتر دسکتاپ</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/970/%D9%85%DB%8C%D9%86%DB%8C-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1/"
                  >
                    <span>مینی کامپیوتر</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1017/%D8%AA%D8%AC%D9%87%DB%8C%D8%B2%D8%A7%D8%AA-%D9%85%D8%A7%DB%8C%D9%86%DB%8C%D9%86%DA%AF/"
                  >
                    <span>تجهیزات ماینینگ</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/2127/%D8%AA%D8%AC%D9%87%DB%8C%D8%B2%D8%A7%D8%AA-%D8%B1%D8%B3%D9%BE%D8%A8%D8%B1%DB%8C-%D8%A8%D8%A7%DB%8C/"
                  >
                    <span>تجهیزات رسپبری بای</span>
                  </a>
                </div>
              </ul>
            </div>
            <div className="columnelement">
              <a
                className="link-on-clicksubtitle"
                href="/browse/240/%D9%82%D8%B7%D8%B9%D8%A7%D8%AA-%D8%AF%D8%A7%D8%AE%D9%84%DB%8C-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-%D9%88-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-computer-internal-parts/"
              >
                <span>قطعات داخلی کامپیوتر و لپ‌تاپ</span>
              </a>
              <ul className="subsubitems">
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/519/%D9%BE%D8%B1%D8%AF%D8%A7%D8%B2%D9%86%D8%AF%D9%87-cpu/"
                  >
                    <span>پردازنده</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/520/%D9%85%D8%A7%D8%AF%D8%B1%D8%A8%D9%88%D8%B1%D8%AF-computer-moderboard/"
                  >
                    <span>مادربورد</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/522/%DA%A9%D8%A7%D8%B1%D8%AA-%DA%AF%D8%B1%D8%A7%D9%81%DB%8C%DA%A9-graphic-card/"
                  >
                    <span>کارت گرافیک</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/521/%D9%BE%D8%A7%D9%88%D8%B1-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-computer-power/"
                  >
                    <span>پاور کامپیوتر</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1013/%DA%A9%D8%A7%D8%B1%D8%AA-%D8%B5%D8%AF%D8%A7-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-computer-sound-card/"
                  >
                    <span>کارت صدا کامپیوتر</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/238/%D8%A8%D8%A7%D8%AA%D8%B1%DB%8C-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-charger-and-battery/"
                  >
                    <span>باتری لپ‌تاپ</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/524/%DA%A9%DB%8C%D8%A8%D9%88%D8%B1%D8%AF-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-laptop-keyboard/"
                  >
                    <span>کیبورد لپ‌تاپ</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/995/%D9%81%D9%86-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-laptop-fan/"
                  >
                    <span>فن لپ‌تاپ</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/525/%D8%B3%D8%A7%DB%8C%D8%B1-%D9%82%D8%B7%D8%B9%D8%A7%D8%AA-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE/"
                  >
                    <span>سایر قطعات لپ‌تاپ</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1043/%D8%B3%D8%A7%DB%8C%D8%B1-%D9%82%D8%B7%D8%B9%D8%A7%D8%AA-%D8%AF%D8%A7%D8%AE%D9%84%DB%8C-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1/"
                  >
                    <span>سایر قطعات داخلی کامپیوتر</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1059/%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AC%D8%A7%D9%86%D8%A8%DB%8C-%D9%82%D8%B7%D8%B9%D8%A7%D8%AA-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1/"
                  >
                    <span>لوازم جانبی قطعات کامپیوتر</span>
                  </a>
                </div>
              </ul>
            </div>
            <div className="columnelement">
              <a
                className="link-on-clicksubtitle"
                href="/browse/101/%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AC%D8%A7%D9%86%D8%A8%DB%8C-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-%D9%88-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-laptap-and-pc-accessories/"
              >
                <span>لوازم جانبی کامپیوتر و لپ‌تاپ</span>
              </a>
              <ul className="subsubitems">
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/233/%DA%A9%DB%8C%D8%A8%D9%88%D8%B1%D8%AF-keyboard/"
                  >
                    <span>کیبورد</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/234/%D9%85%D8%A7%D9%88%D8%B3-mouse/"
                  >
                    <span>ماوس</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/242/%D8%B3%D8%AA-%D9%85%D8%A7%D9%88%D8%B3-%D9%88-%DA%A9%DB%8C%D8%A8%D9%88%D8%B1%D8%AF-mouse-and-keyboard/"
                  >
                    <span>ست ماوس و کیبورد</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/239/%DA%A9%DB%8C%D8%B3-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-case/"
                  >
                    <span>کیس کامپیوتر</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/236/%D8%AE%D9%86%DA%A9-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D9%88-%D9%81%D9%86-stand/"
                  >
                    <span>خنک‌‌کننده و فن</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/892/%D8%B4%D8%A7%D8%B1%DA%98%D8%B1-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE/"
                  >
                    <span>شارژر لپ‌تاپ</span>
                  </a>
                </div>
              </ul>
            </div>
            <div>
              <ul className="subsubitems">
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/237/%DA%A9%DB%8C%D9%81-%D9%88-%DA%A9%D8%A7%D9%88%D8%B1-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-laptop-cover/"
                  >
                    <span>کیف و کاور لپ‌تاپ</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1185/%D8%AA%D8%AC%D9%87%DB%8C%D8%B2%D8%A7%D8%AA-%D9%88%DB%8C%D8%AF%DB%8C%D9%88-%DA%A9%D9%86%D9%81%D8%B1%D8%A7%D9%86%D8%B3/"
                  >
                    <span>تجهیزات ویدیو کنفرانس</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1005/%D9%85%D8%A7%D9%88%D8%B3-%D9%BE%D8%AF/"
                  >
                    <span>ماوس پد</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/871/%D9%82%D9%84%D9%85-%D9%86%D9%88%D8%B1%DB%8C/"
                  >
                    <span>قلم نوری</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1006/%DA%A9%D8%A7%D8%B1%D8%AA-%D8%AE%D9%88%D8%A7%D9%86/"
                  >
                    <span>کارت خوان</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1009/%D8%AF%D8%A7%D9%86%DA%AF%D9%84-%D8%A8%D9%84%D9%88%D8%AA%D9%88%D8%AB/"
                  >
                    <span>دانگل بلوتوث</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1010/%D8%AF%D8%B1%D8%A7%DB%8C%D9%88-%D9%86%D9%88%D8%B1%DB%8C/"
                  >
                    <span>درایو نوری</span>
                  </a>
                </div>
              </ul>
            </div>
            <div>
              <ul className="subsubitems">
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1008/%D9%BE%D9%88%D8%B3%D8%AA%D8%B1-%D9%88-%D8%A7%D8%B3%D8%AA%DB%8C%DA%A9%D8%B1/"
                  >
                    <span>پوستر و استیکر</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1060/%D9%BE%D8%A7%DB%8C%D9%87-%D9%86%DA%AF%D9%87%D8%AF%D8%A7%D8%B1%D9%86%D8%AF%D9%87-%D9%85%D8%A7%D9%86%DB%8C%D8%AA%D9%88%D8%B1-%D9%88-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE/"
                  >
                    <span>پایه نگهدارنده مانیتور و لپ‌تاپ</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1011/%D9%87%D8%A7%D8%A8-usb/"
                  >
                    <span>هاب USB</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/241/%D8%B3%D8%A7%DB%8C%D8%B1-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AC%D8%A7%D9%86%D8%A8%DB%8C-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-%D9%88-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-others-computer-accessories/"
                  >
                    <span>سایر لوازم جانبی کامپیوتر و لپ‌تاپ</span>
                  </a>
                </div>
              </ul>
            </div>
            <div className="columnelement">
              <a
                className="link-on-clicksubtitle"
                href="/browse/107/%D9%85%D8%A7%D8%B4%DB%8C%D9%86-%D9%87%D8%A7%DB%8C-%D8%A7%D8%AF%D8%A7%D8%B1%DB%8C-administrative-machines/"
              >
                <span>ماشین‌‌های اداری</span>
              </a>
              <ul className="subsubitems">
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/222/%D9%BE%D8%B1%DB%8C%D9%86%D8%AA%D8%B1-%D8%A7%D8%B3%DA%A9%D9%86%D8%B1-%D9%81%DA%A9%D8%B3-%D9%88-%DA%86%D9%86%D8%AF-%DA%A9%D8%A7%D8%B1%D9%87/"
                  >
                    <span>پرینتر، اسکنر، فکس و چند کاره</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/227/%DA%AF%D9%88%D8%B4%DB%8C-%D8%AA%D9%84%D9%81%D9%86-%D9%88-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AC%D8%A7%D9%86%D8%A8%DB%8C-telephone/"
                  >
                    <span>گوشی تلفن و لوازم جانبی</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/225/%D9%85%D8%A7%D8%B4%DB%8C%D9%86-%D8%AD%D8%B3%D8%A7%D8%A8-calculator/"
                  >
                    <span>ماشین‌ حساب</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/226/%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D9%81%D8%B1%D9%88%D8%B4%DA%AF%D8%A7%D9%87%DB%8C-store-equipments/"
                  >
                    <span>لوازم فروشگاهی</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/457/%D8%AE%D8%B1%D8%AF%DA%A9%D9%86-%D8%A7%D8%AF%D8%A7%D8%B1%DB%8C-shredder/"
                  >
                    <span>خردکن اداری</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/939/%D9%BE%D8%B1%DB%8C%D9%86%D8%AA%D8%B1-%D8%B3%D9%87-%D8%A8%D8%B9%D8%AF%DB%8C-%D9%88-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AC%D8%A7%D9%86%D8%A8%DB%8C/"
                  >
                    <span>پرینتر سه بعدی و لوازم جانبی</span>
                  </a>
                </div>
              </ul>
            </div>
            <div>
              <ul className="subsubitems">
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/940/%DA%A9%D9%86%D8%AA%D8%B1%D9%84-%D8%AA%D8%B1%D8%AF%D8%AF/"
                  >
                    <span>کنترل تردد</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/924/%D9%BE%D9%84%D8%A7%D8%AA%D8%B1-%D9%88-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AC%D8%A7%D9%86%D8%A8%DB%8C/"
                  >
                    <span>پلاتر و لوازم جانبی</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1157/%D8%A7%D8%B3%DA%A9%D9%86%D8%B1-%D8%A7%D8%AB%D8%B1-%D8%A7%D9%86%DA%AF%D8%B4%D8%AA/"
                  >
                    <span>اسکنر اثر انگشت</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1158/%D8%A7%D8%B3%DA%A9%D9%86%D8%A7%D8%B3-%D8%B4%D9%85%D8%A7%D8%B1/"
                  >
                    <span>اسکناس شمار</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1159/%D8%AA%D8%B4%D8%AE%DB%8C%D8%B5-%D8%A7%D8%B5%D8%A7%D9%84%D8%AA-%D8%A7%D8%B3%DA%A9%D9%86%D8%A7%D8%B3/"
                  >
                    <span>تشخیص اصالت اسکناس</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/2338/%D8%B5%D8%AD%D8%A7%D9%81%DB%8C-%D9%88-%D9%BE%D8%B1%D8%B3/"
                  >
                    <span>صحافی و پرس</span>
                  </a>
                </div>
              </ul>
            </div>
            <div>
              <ul className="subsubitems">
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/2340/%D8%B1%DB%8C%D8%B3%D9%88%DA%AF%D8%B1%D8%A7%D9%81-%D9%88-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AC%D8%A7%D9%86%D8%A8%DB%8C/"
                  >
                    <span>ریسوگراف و لوازم جانبی</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1169/%D9%BE%D8%B1%D9%81%D8%B1%D8%A7%DA%98-%DA%86%DA%A9/"
                  >
                    <span>پرفراژ چک</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/2413/%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AC%D8%A7%D9%86%D8%A8%DB%8C-%D8%AE%D8%B1%D8%AF-%DA%A9%D9%86-%D8%A7%D8%AF%D8%A7%D8%B1%DB%8C/"
                  >
                    <span>لوازم جانبی خرد‌کن اداری</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/229/%D8%B3%D8%A7%DB%8C%D8%B1-%D9%85%D8%A7%D8%B4%DB%8C%D9%86-%D9%87%D8%A7-%D9%88-%D8%AA%D8%AC%D9%87%DB%8C%D8%B2%D8%A7%D8%AA-%D8%A7%D8%AF%D8%A7%D8%B1%DB%8C-others-office/"
                  >
                    <span>سایر ماشین‌ها و تجهیزات اداری</span>
                  </a>
                </div>
              </ul>
            </div>
            <div className="columnelement">
              <a
                className="link-on-clicksubtitle"
                href="/browse/103/%D8%AA%D8%AC%D9%87%DB%8C%D8%B2%D8%A7%D8%AA-%D8%B4%D8%A8%DA%A9%D9%87-%D9%88-%D8%A7%D8%B1%D8%AA%D8%A8%D8%A7%D8%B7%D8%A7%D8%AA-network-equipments/"
              >
                <span>تجهیزات شبکه و ارتباطات</span>
              </a>
              <ul className="subsubitems">
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/14/%DA%A9%D8%A7%D8%A8%D9%84-%D8%B4%D8%A8%DA%A9%D9%87/"
                  >
                    <span>کابل شبکه</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/254/%D9%85%D9%88%D8%AF%D9%85-%D8%B1%D9%88%D8%AA%D8%B1-%D9%88-%D8%A7%DA%A9%D8%B3%D8%B3-%D9%BE%D9%88%DB%8C%D9%86%D8%AA-modem.-router/"
                  >
                    <span>مودم٬ روتر و اکسس‌ پوینت</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/255/%DA%A9%D8%A7%D8%B1%D8%AA-%D8%B4%D8%A8%DA%A9%D9%87-network-card/"
                  >
                    <span>کارت شبکه</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/256/%D8%B3%D9%88%DB%8C%DB%8C%DA%86-%D9%88-%D8%A7%D8%B3%D9%BE%D9%84%DB%8C%D8%AA%D8%B1-switch/"
                  >
                    <span>سوییچ و اسپلیتر</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/257/%D8%A7%D9%86%D8%AA%D9%86-%D9%88-%D8%AA%D9%82%D9%88%DB%8C%D8%AA-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D8%B4%D8%A8%DA%A9%D9%87-network-cable/"
                  >
                    <span>آنتن و تقویت کننده شبکه</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/258/%D8%AD%D8%A7%D9%81%D8%B8%D9%87-%D9%88-%D8%B0%D8%AE%DB%8C%D8%B1%D9%87-%D8%B3%D8%A7%D8%B2-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%A8%DA%A9%D9%87-network-memory-and-storage/"
                  >
                    <span>حافظه و ذخیره‌ساز تحت شبکه</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1044/%D8%B3%D8%B1%D9%88%D8%B1/"
                  >
                    <span>سرور</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1198/%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%D9%87%D8%A7%DB%8C-%D8%B3%D8%A7%D9%86%D8%AA%D8%B1%D8%A7%D9%84/"
                  >
                    <span>سیستم‌های سانترال</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1206/%D8%AA%D8%AC%D9%87%DB%8C%D8%B2%D8%A7%D8%AA-%D9%81%DB%8C%D8%A8%D8%B1-%D9%86%D9%88%D8%B1%DB%8C/"
                  >
                    <span>تجهیزات فیبر نوری</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1197/%D8%AA%D8%AC%D9%87%DB%8C%D8%B2%D8%A7%D8%AA-%D9%88%DB%8C%D9%BE-voip/"
                  >
                    <span>تجهیزات ویپ</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1042/%D8%AF%D8%A7%D9%86%DA%AF%D9%84-%DA%A9%D8%A7%D8%B1%D8%AA-%D8%B4%D8%A8%DA%A9%D9%87-wifi/"
                  >
                    <span>دانگل کارت شبکه (Wifi)</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/2169/%D8%AF%D8%A7%D9%85%D9%86%D9%87-%D9%88-%D9%85%DB%8C%D8%B2%D8%A8%D8%A7%D9%86%DB%8C-%D9%88%D8%A8/"
                  >
                    <span>دامنه و میزبانی وب</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/264/%D8%B3%D8%A7%DB%8C%D8%B1-%D8%AA%D8%AC%D9%87%DB%8C%D8%B2%D8%A7%D8%AA-%D8%B4%D8%A8%DA%A9%D9%87-%D9%88-%D8%A7%D8%B1%D8%AA%D8%A8%D8%A7%D8%B7%D8%A7%D8%AA-others-network/"
                  >
                    <span>سایر تجهیزات شبکه و ارتباطات</span>
                  </a>
                </div>
              </ul>
            </div>
            <div className="columnelement">
              <a
                className="link-on-clicksubtitle"
                href="/browse/102/%D8%AA%D8%AC%D9%87%DB%8C%D8%B2%D8%A7%D8%AA-%D8%B0%D8%AE%DB%8C%D8%B1%D9%87-%D8%B3%D8%A7%D8%B2%DB%8C-%D8%A7%D8%B7%D9%84%D8%A7%D8%B9%D8%A7%D8%AA-storage-equipments/"
              >
                <span>تجهیزات ذخیره‌سازی اطلاعات</span>
              </a>
              <ul className="subsubitems">
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/2466/%D9%87%D8%A7%D8%B1%D8%AF/"
                  >
                    <span>هارد</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/250/%D9%81%D9%84%D8%B4-%D9%85%D9%85%D9%88%D8%B1%DB%8C-flash-memory/"
                  >
                    <span>فلش مموری</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/2467/%D8%B1%D9%85/"
                  >
                    <span>رم</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/251/cd-%D9%88-dvd-%D8%AE%D8%A7%D9%85-cd.dvd/"
                  >
                    <span>CD و DVD خام</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/680/%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AC%D8%A7%D9%86%D8%A8%DB%8C-%D9%87%D8%A7%D8%B1%D8%AF/"
                  >
                    <span>لوازم جانبی هارد</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/253/%D8%B3%D8%A7%DB%8C%D8%B1-%D8%AA%D8%AC%D9%87%DB%8C%D8%B2%D8%A7%D8%AA-%D8%B0%D8%AE%DB%8C%D8%B1%D9%87-%D8%B3%D8%A7%D8%B2%DB%8C-%D8%A7%D8%B7%D9%84%D8%A7%D8%B9%D8%A7%D8%AA-others-memory/"
                  >
                    <span>سایر تجهیزات ذخیره‌سازی اطلاعات</span>
                  </a>
                </div>
              </ul>
            </div>
            <div className="columnelement">
              <a
                className="link-on-clicksubtitle"
                href="/browse/159/%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%D9%87%D8%A7%DB%8C-%D9%86%D8%B8%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D8%A7%D9%85%D9%86%DB%8C%D8%AA%DB%8C-%D9%88-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AC%D8%A7%D9%86%D8%A8%DB%8C-net-camera/"
              >
                <span>سیستم‌های نظارتی و امنیتی و لوازم جانبی</span>
              </a>
              <ul className="subsubitems">
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/609/%D8%AF%D9%88%D8%B1%D8%A8%DB%8C%D9%86-%D9%87%D8%A7%DB%8C-%D9%86%D8%B8%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D8%A7%D9%85%D9%86%DB%8C%D8%AA%DB%8C-network-and-security-camera/"
                  >
                    <span>دوربین‌های نظارتی و امنیتی</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/610/%D8%B6%D8%A8%D8%B7-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D9%88%DB%8C%D8%AF%DB%8C%D9%88%DB%8C%DB%8C-%D8%AF%D9%88%D8%B1%D8%A8%DB%8C%D9%86-%D9%87%D8%A7%DB%8C-%D9%86%D8%B8%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D8%A7%D9%85%D9%86%DB%8C%D8%AA%DB%8C/"
                  >
                    <span>ضبط کننده ویدیویی دوربین‌های نظارتی و امنیتی</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/611/%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AC%D8%A7%D9%86%D8%A8%DB%8C-%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%D9%87%D8%A7%DB%8C-%D9%86%D8%B8%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D8%A7%D9%85%D9%86%DB%8C%D8%AA%DB%8C/"
                  >
                    <span>لوازم جانبی سیستم‌های نظارتی و امنیتی</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/1094/%D9%BE%DA%A9%DB%8C%D8%AC-%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%D9%87%D8%A7%DB%8C-%D9%86%D8%B8%D8%A7%D8%B1%D8%AA%DB%8C-%D9%88-%D8%A7%D9%85%D9%86%DB%8C%D8%AA%DB%8C-security-package/"
                  >
                    <span>پکیج سیستم‌های نظارتی و امنیتی</span>
                  </a>
                </div>
                <div>
                  <a
                    className="link-on-clickgrayhover"
                    href="/browse/2473/%D8%A8%DB%8C%D8%B3%DB%8C%D9%85-%D9%88%D8%A7%DA%A9%DB%8C-%D8%AA%D8%A7%DA%A9%DB%8C/"
                  >
                    <span>بیسیم (واکی تاکی)</span>
                  </a>
                </div>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
