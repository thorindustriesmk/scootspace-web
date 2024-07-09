import React from "react";
import guide1 from "../assets/steps/guide1.png";
import guide2 from "../assets/steps/guide2.png";
import { useTranslation } from "react-i18next";
import guide3 from "../assets/steps/guide3.png";

function HowToUseTheApp() {
  const { t } = useTranslation();
  return (
    <div
      id="HowToUseTheApp"
      className="flex flex=col w-full min-h-screen items-center justify-center pb-10"
    >
      <div className="flex flex-col ml-16 mr-16 w-full">
        <div className="flex flex-col justify-center items-center text-black gap-9 ">
          <div className="flex flex-col justify-center items-center gap-6 ">
            <div className="text-black  font-aptos-black text-center text-5xl leading-10 ">
              {t("HowToUseTheApp.Title")}
            </div>
            <div className="max-w-screen-xl text-center text-black lg:text-lg text-base  leading-snug">
              {t("HowToUseTheApp.Subtitle")}
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12  ">
            <div className="flex flex-col w-80 h-[600px] gap-7 bg-white rounded-3xl  border border-teal-500 border-opacity-20 shadow-[0px_20px_25px_6px_rgba(0,167,157,0.16)]">
              <img className="rounded-t-3xl" src={guide1} alt="" width={500} />
              <div className="text-start pl-4 text-teal-500 text-lg font-normal ">
                {t("HowToUseTheApp.Cards.Card1Title1")}
              </div>
              <div className="w-64 text-black text-base text-start m-8  leading-tight">
                {t("HowToUseTheApp.Cards.Card1Step1")}
                <div className="py-2" />
                {t("HowToUseTheApp.Cards.Card1Step2")}
                <div className="py-2" />
                {t("HowToUseTheApp.Cards.Card1Step3")}
              </div>
            </div>

            <div className="flex flex-col w-80 h-[600px] gap-7 bg-white rounded-3xl  border border-teal-500 border-opacity-20 shadow-[0px_20px_25px_6px_rgba(0,167,157,0.16)]">
              <img className="rounded-t-3xl" src={guide2} alt="" width={500} />
              <div className="text-start pl-4 text-teal-500 text-lg font-normal ">
                {t("HowToUseTheApp.Cards.CardTitle2")}
              </div>
              <div className="w-64 text-black text-base text-start m-8  leading-tight">
                {t("HowToUseTheApp.Cards.Card2Step1")}
                <div className="py-2" />
                {t("HowToUseTheApp.Cards.Card2Step2")}
                <div className="py-2" />
                {t("HowToUseTheApp.Cards.Card2Step3")}
              </div>
            </div>

            <div className="flex flex-col w-80 h-[600px] gap-7 bg-white rounded-3xl  border border-teal-500 border-opacity-20 shadow-[0px_20px_25px_6px_rgba(0,167,157,0.16)]">
              <img className="rounded-t-3xl" src={guide3} alt="" width={500} />
              <div className="text-start text-teal-500 text-lg pl-4 font-normal ">
                {t("HowToUseTheApp.Cards.CardTitle3")}
              </div>
              <div className="w-64 text-black text-base text-start m-8  leading-tight">
                {t("HowToUseTheApp.Cards.Card3Step1")}
                <div className="py-2" />
                {t("HowToUseTheApp.Cards.Card3Step2")}
                <div className="py-2" />
                {t("HowToUseTheApp.Cards.Card3Step3")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToUseTheApp;
