import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./mobile.css";
export default function Mobile() {
  return (
    <div className="mobile_container w-9/10 h-[3200px] bg-[#f9fafb] z-20 absolute inset-x-[40px] top-[100px] ">
      <div>
        <a className="" href="#####">
          <div className="hover:text-[#d73948]  text-[14px] text-[#333333] px-[24px] py-[16px] leading-[24px] ">
            موبایل و تبلت
          </div>
        </a>
        <hr />
        <ul className="mainlist px-[34px] ">
          <div className="  columnelement">
            <a className="link-on-clicksubtitle" href="">
              <span>گوشی موبایل</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333] font-normal">
              <div>
                <a className="link-on-clickgrayhover " href="">
                  <span>گوشی سامسونگ</span>
                </a>
              </div>
              <div>
                <a className="link-on-clickgrayhover " href="">
                  <span>گوشی شیائومی</span>
                </a>
              </div>
            </ul>
          </div>
          <div className="columnelement">
            <a className="link-on-clicksubtitle" href="">
              <span>تبلت</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333]">
              <div>
                <a className="link-on-clickgrayhover" href="">
                  <span>تبلت سامسونگ</span>
                </a>
              </div>
              <div>
                <a className="link-on-clickgrayhover" href="">
                  <span>تبلت اپل، آیپد</span>
                </a>
              </div>
            </ul>
          </div>
          <div className="columnelement">
            <a className="link-on-clicksubtitle" href="############">
              <span>هدفون، هدست و هندزفری</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333]">
              <div>
                <a className="link-on-clickgrayhover" href="">
                  <span>هدفون و هدست سامسونگ</span>
                </a>
              </div>
              <div>
                <a className="link-on-clickgrayhover" href="">
                  <span>هدفون و هدست اپل</span>
                </a>
              </div>
            </ul>
          </div>
          <div className="columnelement">
            <a
              className="link-on-clicksubtitle"
              href="#########################"
            >
              <span>لوازم جانبی موبایل و تبلت</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333]">
              <div>
                <a className="link-on-clickgrayhover" href="">
                  <span>کیف و کاور گوشی</span>
                </a>
              </div>
              <div>
                <a className="link-on-clickgrayhover" href="">
                  <span>محافظ صفحه نمایش گوشی</span>
                </a>
              </div>
            </ul>
          </div>
          <div className="columnelement">
            <a
              className="link-on-clicksubtitle"
              href="###############################################"
            >
              <span>قطعات موبایل و تبلت</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333]">
              <div>
                <a className="link-on-clickgrayhover" href="">
                  <span>باتری گوشی موبایل</span>
                </a>
              </div>
              <div>
                <a className="link-on-clickgrayhover" href="">
                  <span>باتری تبلت</span>
                </a>
              </div>
            </ul>
          </div>
          <div className="columnelement">
            <a
              className="link-on-clicksubtitle"
              href="#############################"
            >
              <span>لوازم الکتریکی همراه</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333]">
              <div>
                <a className="link-on-clickgrayhover" href="">
                  <span>پاوربانک و شارژر همراه</span>
                </a>
              </div>
              <div>
                <a className="link-on-clickgrayhover" href="">
                  <span>کتاب‌خوان و کاغذ دیجیتال</span>
                </a>
              </div>
            </ul>
          </div>
          <div className="columnelement">
            <a
              className="link-on-clicksubtitle"
              href="######################################"
            >
              <span>ساعت و مچ بند هوشمند</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333]">
              <div>
                <a className="link-on-clickgrayhover" href="">
                  <span>ساعت هوشمند اپل</span>
                </a>
              </div>
              <div>
                <a className="link-on-clickgrayhover" href="">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
              </div>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}
