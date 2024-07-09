import heroIcon from "../assets/icons/heroIcon.svg";
import { useTranslation } from "react-i18next";

function Hero({ slideTo }) {
  const { t } = useTranslation();
  return (
    <div
      id="home"
      className="flex flex-col min-h-screen pt-10 gap-4 text-center w-full xl:flex-row xl:text-start items-center justify-center 2xl:gap-64 lg:pt-[120px]"
    >
      <div className="flex flex-col pt-10 w-full gap-4 md:max-w-xl">
        <div className="flex font-aptos-black text-2xl sm:text-5xl ">
          {t("Hero.Title")}
          <br />
          {t("Hero.Title2")}
        </div>
        <div className="text-black text-base w-full ">{t("Hero.Subtitle")}</div>
        <div className="flex flex-col items-center justify-center sm:flex-row xl:justify-start gap-5 w-full">
          <button className="transition ease-in-out duration-150 hover:scale-110 flex w-44 font-aptos-semibold justify-center items-center text-white text-center py-2 px-3 border-primary bg-primary gap-2.5 border-2 rounded-2xl">
            {t("Hero.Button1")}
          </button>
          <button
            onClick={() => slideTo("Locations")}
            className="transition ease-in-out duration-150 hover:scale-110 flex w-44 font-aptos-semibold justify-center items-center text-center text-black py-2 px-3 bg-white rounded-2xl gap-2.5 border-2 border-teal-500"
          >
            {t("Hero.Button2")}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-auto">
        <img
          src={heroIcon}
          alt="heroImage"
          className="lg:max-w-xl 2xl:max-w-2xl xl:w-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
