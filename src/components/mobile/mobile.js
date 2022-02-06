import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./mobile.css";
export default function Mobile() {
  return (
    <div className="mobile_container w-9/10 h-[3200px] bg-[#f9fafb] z-20 absolute inset-x-[40px] top-[100px] ">
      <div>
        <a className="" href="#####">
          <div className="font-bold text-[14px] text-[#333333] px-[24px] py-[16px] leading-[24px] font-iranyekan">
            موبایل و تبلت
          </div>
        </a>
        <hr />
        <ul className="px-[34px] font-bold text-[14px]  ">
          <div className="columnelement">
            <a className="" href="">
              <span>گوشی موبایل</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333]">
              <div>
                <a className="link-on-click grayhover" href="">
                  <span>گوشی سامسونگ</span>
                </a>
              </div>
              <div>
                <a className="link-on-click grayhover" href="">
                  <span>گوشی شیائومی</span>
                </a>
              </div>
            </ul>
          </div>
          <div className="columnelement">
            <a className="link-on-click subtitle" href="">
              <span>تبلت</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333]">
              <div>
                <a className="link-on-click grayhover" href="">
                  <span>تبلت سامسونگ</span>
                </a>
              </div>
              <div>
                <a className="link-on-click grayhover" href="">
                  <span>تبلت اپل، آیپد</span>
                </a>
              </div>
            </ul>
          </div>
          <div className="columnelement">
            <a className="link-on-click subtitle" href="############">
              <span>هدفون، هدست و هندزفری</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333]">
              <div>
                <a className="link-on-click grayhover" href="">
                  <span>هدفون و هدست سامسونگ</span>
                </a>
              </div>
              <div>
                <a className="link-on-click grayhover" href="">
                  <span>هدفون و هدست اپل</span>
                </a>
              </div>
            </ul>
          </div>
          <div className="columnelement">
            <a
              className="link-on-click subtitle"
              href="#########################"
            >
              <span>لوازم جانبی موبایل و تبلت</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333]">
              <div>
                <a className="link-on-click grayhover" href="">
                  <span>کیف و کاور گوشی</span>
                </a>
              </div>
              <div>
                <a className="link-on-click grayhover" href="">
                  <span>محافظ صفحه نمایش گوشی</span>
                </a>
              </div>
            </ul>
          </div>
          <div className="columnelement">
            <a
              className="link-on-click subtitle"
              href="###############################################"
            >
              <span>قطعات موبایل و تبلت</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333]">
              <div>
                <a className="link-on-click grayhover" href="">
                  <span>باتری گوشی موبایل</span>
                </a>
              </div>
              <div>
                <a className="link-on-click grayhover" href="">
                  <span>باتری تبلت</span>
                </a>
              </div>
            </ul>
          </div>
          <div className="columnelement">
            <a
              className="link-on-click subtitle"
              href="#############################"
            >
              <span>لوازم الکتریکی همراه</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333]">
              <div>
                <a className="link-on-click grayhover" href="">
                  <span>پاوربانک و شارژر همراه</span>
                </a>
              </div>
              <div>
                <a className="link-on-click grayhover" href="">
                  <span>کتاب‌خوان و کاغذ دیجیتال</span>
                </a>
              </div>
            </ul>
          </div>
          <div className="columnelement">
            <a
              className="link-on-click subtitle"
              href="######################################"
            >
              <span>ساعت و مچ بند هوشمند</span>
            </a>
            <ul className="text-[12px] leading-[28px] text-[#333333]">
              <div>
                <a className="link-on-click grayhover" href="">
                  <span>ساعت هوشمند اپل</span>
                </a>
              </div>
              <div>
                <a className="link-on-click grayhover" href="">
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
