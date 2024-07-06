import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.svg";
import { useState } from "react";
import i18n from "./i18n";

function Navbar() {
  function handleNavigation(path) {
    window.location.replace("/" + path);
    // window.location.assign(path);
  }
  const [handleDropdown, setHandleDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("i18n.language");

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
  };

  return (
    <>
      <div className="flex bg-white fixed w-full h-[80px] top-0 border-b-2 border-w border-opacity-20 shadow-md text-base">
        <div
          onClick={() => handleNavigation("#home")}
          className="flex basis-2/12 items-center justify-center"
        >
          <Link to="/">
            <img
              src={logo}
              width={"100%"}
              alt=""
              className="transition ease-in-out duration-400 hover:scale-110"
            />
          </Link>{" "}
        </div>
        <div className="flex basis-8/12 max-lg:invisible justify-center gap-8 items-center font-normal">
          <h2 className="transition ease-in-out duration-300 hover:scale-110">
            <button onClick={() => handleNavigation("#AboutScootspace")}>
              About Us
            </button>
          </h2>
          <h2 className="transition ease-in-out duration-300 hover:scale-110">
            <button onClick={() => handleNavigation("#HowToPark")}>
              How to park
            </button>
          </h2>
          <h2 className="transition ease-in-out duration-300 hover:scale-110">
            <button onClick={() => handleNavigation("#HowToUseTheApp")}>
              How to use the app
            </button>
          </h2>
          <h2 className="transition ease-in-out duration-300 hover:scale-110">
            <button onClick={() => handleNavigation("#PricingPlan")}>
              Pricing
            </button>
          </h2>
          <h2 className="transition ease-in-out duration-300 hover:scale-110">
            <button onClick={() => handleNavigation("#Locations")}>
              Locations
            </button>
          </h2>
        </div>

        <div className="hs-dropdown flex flex-row basis-2/12 items-center justify-end">
          <button
            onClick={
              handleDropdown
                ? () => setHandleDropdown(false)
                : () => setHandleDropdown(true)
            }
            id="hs-dropdown-default"
            className="hs-dropdown-toggle h-10 w-36 items-center justify-start flex flex-row text-black gap-3 max-lg:invisible"
            type="button"
          >
            <svg
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5683 13.07L10.6789 10.56L10.713 10.53C12.6402 8.6471 14.0801 6.41925 14.9334 4H18.2665V2H10.3035V0H8.02838V2H0.0654297V4H12.772C12.0099 5.92 10.804 7.75 9.16594 9.35C8.10801 8.32 7.23208 7.19 6.53817 6H4.26304C5.09346 7.63 6.23103 9.17 7.65298 10.56L1.86278 15.58L3.47812 17L9.16594 12L12.7038 15.11L13.5683 13.07ZM19.9728 8H17.6977L12.5786 20H14.8538L16.1278 17H21.5313L22.8167 20H25.0918L19.9728 8ZM16.9924 15L18.8352 10.67L20.6781 15H16.9924Z"
                fill="black"
              />
            </svg>
            Language
          </button>
          {/* <button className="transition ease-in-out duration-150 hover:scale-110 text-white h-10 w-36 bg-primary rounded-[20px] max-lg:invisible ">
            The App
          </button> */}
          <div
            defaultValue={selectedLanguage}
            onClick={chooseLanguage}
            class={`fixed right-4 top-[70px] hs-dropdown-menu transition-[opacity,margin] duration ${
              handleDropdown ? "handleDrop:opacity-100" : "opacity-0 hidden"
            } w-36 bg-white shadow-lg rounded-b-xl p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full`}
            aria-labelledby="hs-dropdown-default"
          >
            <a
              value="en"
              class="font-normal text-normal flex justify-center items-center gap-x-3.5 py-2 px-3 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              English
            </a>
            <a
              value="al"
              class="font-normal text-normal flex justify-center items-center gap-x-3.5 py-2 px-3 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Albanian
            </a>
            <a
              value="mk"
              class="font-normal text-normal flex justify-center items-center gap-x-3.5 py-2 px-3 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Macedonian
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
