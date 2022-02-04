import React from "react";
import close from "./../../assets/svg/close.svg";
export default function Login() {
  return (
    <main className="bg-[#FFF]">
      <div className="w-[400px] h-[300px] bg-[#FFFFFF] ">
        <section className="">
          <img className="mt-[5px]" src={close} alt="closeicon" />
        </section>
        <section className=" text-center">
          <hr className="my-[10px]" />
          <div className="text-center text-[14px] relative top-[-25px] ">
            ورود یا ثبت نام
          </div>
        </section>
        <section className="h-[219px] py-[15px] px-[30px]">
          <div className="pb-[5px] text-right text-[#333333]">
            شماره موبایل{" "}
          </div>
          <div>
            <input className="w-full h-[34px] text-[#FFFFFF] text-[14px] px-[12px] py-[6px] border-none"></input>
            <div className="h-[28px]">
              <p className=" text-[13px] text-right text-[#BF1F25] hidden">
                باید ۱۱ رقم باشد و با 09 شروع شود.
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              className="w-[225px] h-[33px]  text-white bg-[#d73948] rounded-[4px]  px-[12px] py-[6px]"
              type="submit"
            >
              دریافت کد تایید
            </button>
          </div>
          <footer className="text-center text-[11px] pt-[20px]">
            <p>ثبت نام در ترب به معنی مواقثت با شرایط استفاده از ترب است</p>
            <p>قبلاً در ترب حساب کاربری داشتم.</p>
          </footer>
        </section>
      </div>
    </main>
  );
}
