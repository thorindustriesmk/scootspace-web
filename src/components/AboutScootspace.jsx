import React from "react";
import exclusiveProvider from "../assets/icons/exclusiveProvider.svg";
import safety from "../assets/icons/safety.svg";
import freeCharging from "../assets/icons/freeCharging.svg";
import { useTranslation } from "react-i18next";

function AboutScootspace() {
  const { t } = useTranslation();

  return (
    <div
      id="AboutScootspace"
      className="flex flex=col min-h-screen w-full items-center justify-center pb-52"
    >
      <div className="flex flex-col  w-full">
        <div className="flex flex-col justify-center items-center text-black gap-9 ">
          <div className="flex flex-col justify-center items-center gap-5 ">
            <div className="text-black font-aptos-black text-5xl leading-10 ">
              {t("AboutScootspace.Title")}
            </div>
            <div className="max-w-screen-xl text-center text-black text-xl font-['Sofia Pro'] leading-snug">
              {t("AboutScootspace.Subtitle")}
            </div>
          </div>

          <div className="flex flex-row justify-center gap-14 flex-wrap flex-grow-1 pt-16 pb-16">
            <div className="flex flex-col justify-start py-5 items-center gap-2 bg-white rounded-[20px] shadow-[0px_56px_79px_-20px_rgba(58,175,169,0.20)] border-2 border-teal-500 w-72 h-96 ">
              <div className="text-center text-black text-xl font-normal leading-normal ">
                {t("AboutScootspace.Cards.Title1")}
              </div>
              <img
                src={exclusiveProvider}
                width={80}
                alt=""
                className="pt-12 pb-7"
              />
              <div className="text-center text-black text-base font-['Sofia Pro'] leading-tight px-5 pb-3">
                {t("AboutScootspace.Cards.Subtitle1")}
              </div>
            </div>

            <div className="flex flex-col justify-start py-5 items-center gap-2 bg-white rounded-[20px] shadow-[0px_56px_79px_-20px_rgba(58,175,169,0.20)] border-2 border-teal-500 w-72 h-96 ">
              <div className="text-center text-black text-xl font-normal leading-normal">
                {t("AboutScootspace.Cards.Title2")}
              </div>
              <img
                src={freeCharging}
                width={80}
                alt=""
                className="pt-12 pb-7"
              />
              <div className="text-center text-black text-base font-['Sofia Pro'] leading-tight px-5 pb-3">
                {t("AboutScootspace.Cards.Subtitle2")}
              </div>
            </div>

            <div className="flex flex-col justify-start py-5 items-center gap-2 bg-white rounded-[20px] shadow-[0px_56px_79px_-20px_rgba(58,175,169,0.20)] border-2 border-teal-500 w-72 h-96 ">
              <div className="text-center text-black text-xl font-normal leading-normal">
                {t("AboutScootspace.Cards.Title3")}
              </div>
              <img src={safety} width={80} alt="" className="pt-12 pb-7" />
              <div className="text-center text-black text-base font-['Sofia Pro'] leading-tight px-5 pb-3">
                {t("AboutScootspace.Cards.Subtitle3")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutScootspace;
