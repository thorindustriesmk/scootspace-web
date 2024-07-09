import React from "react";
import locationMap from "../assets/background/locationMap.svg";
import { useTranslation } from "react-i18next";

function Locations() {
  const { t } = useTranslation();
  return (
    <div
      id="Locations"
      className="flex flex-col w-full min-h-screen  gap-9 bg-[#DEF2F1] items-center justify-center"
    >
      <div className="px-4 py-8 sm:px-8 sm:py-12 gap-4">
        <div className="text-black text-center font-aptos-black text-5xl leading-10">
          {t("Location.Title")}
        </div>
        <div className="text-center text-black lg:text-lg text-base pt-2 leading-snug">
          {t("Location.Subtitle")}
          <br />
          {t("Location.Subtitle2")}
        </div>
      </div>
      <div className="flex max-w-7xl w-[90%] sm:w-full items-center justify-center">
        <img className="w-fit" src={locationMap} alt="" />
      </div>
    </div>
  );
}

export default Locations;
