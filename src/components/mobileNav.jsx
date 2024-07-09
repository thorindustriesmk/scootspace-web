// MobileNav.jsx

import logo from "../assets/logo/logo.svg";
import dropdown from "../assets/icons/navdrop.svg";
import { useState } from "react";
import i18n from "./i18n";

const MobileNav = ({ showSidebar, toggleSidebar }) => {
  function handleNavigation(path) {
    window.location.replace("/" + path);
    toggleSidebar();
    // window.location.assign(path);
  }
  const [handleDropdown, setHandleDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
  };
  return (
    <>
      <div className="flex top-0 fixed bg-white w-full flex-row h-20 items-center justify-between px-12 border-b border-gray-300 border-opacity-0.5 shadow-md shadow-white text-base">
        <div>
          <img src={logo} width={154} alt="Scootspace logo" />
        </div>
        <div>
          <button onClick={toggleSidebar}>
            <img src={dropdown} alt="dropdown" />
          </button>
        </div>
      </div>

      <div className={`flex w-full fixed  overflow-hidden duration-200 `}>
        <div
          className={`fixed top-0 left-0 h-screen w-full z-10 bg-black bg-opacity-50 ${
            showSidebar ? "fixed" : "hidden"
          } text-borderColor p-4`}
        ></div>

        <div
          className={`fixed top-0 z-50 right-0 h-screen w-[70%] bg-white text-borderColor p-4 transition-transform  ${
            showSidebar ? "-translate-x-0" : "translate-x-full"
          } `}
        >
          <div className="text-5xl flex w-full justify-center items-end flex-col mt-5 mr-5 pr-3 md:pr-7">
            <button onClick={toggleSidebar} className="">
              &times;
            </button>
          </div>

          <ul className="text-borderColor flex flex-col items-start gap-10 text-3xl  font-semibold mt-12 md:ml-9 ml-2">
            <li className="">
              <button
                onClick={() => handleNavigation("#AboutScootspace")}
                className="hover:border-b-2 hover:border-borderColor p-2 hover:rounded-e-md hover:rounded-s-md "
              >
                About Us
              </button>
            </li>
            <li>
              <button
                href="#howToPark"
                className="hover:border-b-2 hover:border-borderColor p-2 hover:rounded-e-md hover:rounded-s-md "
                onClick={() => handleNavigation("#HowToPark")}
              >
                How to park
              </button>
            </li>
            <li>
              <button
                href="#PricingPlan"
                onClick={() => handleNavigation("#PricingPlan")}
                className="hover:border-b-2 hover:border-borderColor p-2 hover:rounded-e-md hover:rounded-s-md"
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                href="#Locations"
                onClick={() => handleNavigation("#Locations")}
                className="hover:border-b-2 hover:border-borderColor p-2 hover:rounded-e-md hover:rounded-s-md"
              >
                Locations
              </button>
            </li>
          </ul>
          <div className=" hs-dropdown flex flex-col items-start gap-6 mt-36 md:ml-9 ml-2">
            <button
              className="h-14 w-36  items-center justify-start flex flex-row text-black gap-3 text-xl "
              onClick={
                handleDropdown
                  ? () => setHandleDropdown(false)
                  : () => setHandleDropdown(true)
              }
              id="hs-dropdown-default"
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
              {selectedLanguage === "en" ? "English" : ""}
              {selectedLanguage === "al" ? "Shqip" : ""}
              {selectedLanguage === "mk" ? "Македонски" : ""}
            </button>
            <div
              defaultValue={selectedLanguage}
              onClick={chooseLanguage}
              class={`cursor-pointer hs-dropdown-menu transition-[opacity,margin] duration ${
                handleDropdown ? "handleDrop:opacity-100" : "opacity-0 hidden"
              } w-36 bg-white shadow-lg rounded-b-xl p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full`}
              aria-labelledby="hs-dropdown-default"
            >
              <option
                value="en"
                class="font-normal text-normal flex justify-center items-center gap-x-3.5 py-2 px-3 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                English
              </option>
              <option
                value="al"
                class="font-normal text-normal flex justify-center items-center gap-x-3.5 py-2 px-3 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Albanian
              </option>
              <option
                value="mk"
                class="font-normal text-normal flex justify-center items-center gap-x-3.5 py-2 px-3 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Macedonian
              </option>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
