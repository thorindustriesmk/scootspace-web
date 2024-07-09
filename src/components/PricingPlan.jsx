import React from "react";
import scootIcon from "../assets/icons/scootIcon.svg";
import { useTranslation } from "react-i18next";
function PricingPlan() {
  const { t } = useTranslation();
  return (
    <div
      id="PricingPlan"
      className="flex flex-col justify-center items-center min-h-screen xl:flex-row xl:max-w-full w-[100%] bg-b-pricingPlanBg gap-5 p-4"
    >
      <div className="flex flex-col max-w-full xl:w-2/6 justify-end xl:m">
        <div className="flex flex-col lg:items-end gap-6">
          <div className="text-black font-aptos-black text-5xl leading-10 lg:text-end">
            {t("PricingPlan.Title")}
          </div>
          <div className="text-black text-lg lg:text-end max-w-md leading-snug">
            {t("PricingPlan.Subtitle")}
          </div>
        </div>
      </div>
      <div className="flex flex=col max-w-5xl xl:w-2/6 justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="mainrectangle flex flex-col gap-4 lg:gap-10 justify-between bg-gradient-to-b from-teal-500 to-teal-700 rounded-3xl border-4 border-white">
            <div className="flex flex-row justify-between items-center pt-10 px-5 gap-5 ">
              <div className=" text-white text-start justify-center items-center xl:text-4xl text-4xl max-w-[200px] font-black leading-tight">
                {t("PricingPlan.PricingCard.Title")}
              </div>
              <div className="text-white text-3xl font-black leading-tight">
                <span className="text-6xl">
                  {t("PricingPlan.PricingCard.Price")}
                </span>
                {t("PricingPlan.PricingCard.den")}
              </div>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center ">
              <div className="flex justify-start items-start w-72 rounded-full h-1 pb-14 bg-white "></div>
              <ul className="flex flex-col gap-6 text-start text-white text-xl font-normal font-['Sofia Pro']">
                <li className="inline-flex gap-4">
                  <span>
                    <img src={scootIcon} alt="" />
                  </span>
                  {t("PricingPlan.PricingCard.Features.Feature1")}
                </li>
                <li className="inline-flex gap-4">
                  <span>
                    <img src={scootIcon} alt="" />
                  </span>
                  {t("PricingPlan.PricingCard.Features.Feature2")}
                </li>
                <li className="inline-flex gap-4">
                  <span>
                    <img src={scootIcon} alt="" />
                  </span>
                  {t("PricingPlan.PricingCard.Features.Feature3")}
                </li>
                <li className="inline-flex gap-4">
                  <span>
                    <img src={scootIcon} alt="" />
                  </span>
                  {t("PricingPlan.PricingCard.Features.Feature4")}
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-end py-10">
              <button className="transition ease-in-out duration-400 hover:scale-110 flex w-44 justify-center items-center font-aptos-semibold text-center text-black py-3 px-4 bg-white rounded-2xl gap-2.5 border-2 border-teal-500  ">
                {t("PricingPlan.PricingCard.BuyNowButton")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex=col w-full xl:w-2/6 justify-start items-end ">
        <div className="flex-col justify-center items-center">
          <div className="text-black text-sm text-start max-w-md leading-snug">
            {t("PricingPlan.Paragraph1")}
            <br />
            {t("PricingPlan.Paragraph2")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;
