import React from "react";
import HowToParkBg from "../assets/background/howToParkBg.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function HowToPark() {
  const { t } = useTranslation();
  const [cards] = useState([
    {
      title: "Qr code scanner",
      description: "Can be scan by scootspace app",
      image: "",
    },
    {
      title: "Led indicator",
      description: "Open/Close",
      image: "",
    },
    {
      title: "Scooter charger",
      description: "Most scooter supported",
      image: "",
    },
    {
      title: "Locking bar",
      description: "Closes automatically",
      image: "",
    },
  ]);

  return (
    <div
      id="HowToPark"
      className="flex max-w-screen-3xl min-h-screen pt-10 w-full bg-howToParkBg xl:flex-row flex-col"
    >
      <div className="flex items-start flex-col xl:w-2/4 w-full mt-12">
        <div className="flex flex-col gap-5 xl:ml-28  sm:mr-0 ml-0 xl:items-start items-center h-auto ">
          <div className="text-black text-5xl font-aptos-black leading-10 xl:text-start text-center ">
            {t("HowToPark.Title")}
          </div>
          <div className="text-black text-sm xl:text-start text-center max-w-2xl xl:max-w-xl sm:text-lg leading-snug">
            {t("HowToPark.Subtitle")}
          </div>

          <div className="flex m-0 justify-center items-center flex-wrap flex-shrink gap-5 mt-20 xl:mt-40 xl:pb-40 ">
            <div className="flex flex-col h-28 w-80 gap-1 p-7 bg-white rounded-xl border-2 border-borderColor justify-center items-center  ">
              <div className="text-black text-xl font-semibold leading-normal">
                {t("HowToPark.Cards.Title1")}
              </div>
              <div className="text-black text-base leading-tight">
                {t("HowToPark.Cards.Subtitle1")}
              </div>
            </div>
            <div className="flex flex-col h-28 w-80 gap-1 p-7 bg-white rounded-xl border-2 border-borderColor justify-center items-center  ">
              <div className="text-black text-xl font-semibold leading-normal">
                {t("HowToPark.Cards.Title2")}
              </div>
              <div className="text-black text-base leading-tight">
                {t("HowToPark.Cards.Subtitle2")}
              </div>
            </div>
            <div className="flex flex-col h-28 w-80 gap-1 p-7 bg-white rounded-xl border-2 border-borderColor justify-center items-center  ">
              <div className="text-black text-xl font-semibold leading-normal">
                {t("HowToPark.Cards.Title3")}
              </div>
              <div className="text-black text-base leading-tight">
                {t("HowToPark.Cards.Subtitle3")}
              </div>
            </div>

            <div className="flex flex-col h-28 w-80 gap-1 p-7 bg-white rounded-xl border-2 border-borderColor justify-center items-center  ">
              <div className="text-black text-xl font-semibold leading-normal">
                {t("HowToPark.Cards.Title4")}
              </div>
              <div className="text-black text-base leading-tight">
                {t("HowToPark.Cards.Subtitle4")}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-end justify-end  basis-2/4     ">
        <img
          src={HowToParkBg}
          alt=""
          className=" flex flex-row items-end justify-end  "
        />
      </div>
    </div>
  );
}

export default HowToPark;
