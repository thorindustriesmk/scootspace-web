// MobileNav.jsx

import logo from "../assets/logo/logo.svg";
import dropdown from "../assets/icons/navdrop.svg";

const MobileNav = ({ showSidebar, toggleSidebar }) => {
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

      <div className={`flex  w-full fixed  overflow-hidden duration-200 `}>
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

          <ul className="text-borderColor flex flex-col items-start gap-10 text-3xl font-sofia font-semibold mt-12 md:ml-9 ml-2">
            <li className="">
              <a
                href="#howToPark"
                className="hover:border-b-2 hover:border-borderColor p-2 hover:rounded-e-md hover:rounded-s-md "
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#howToPark"
                className="hover:border-b-2 hover:border-borderColor p-2 hover:rounded-e-md hover:rounded-s-md "
                onClick={toggleSidebar}
              >
                How to park
              </a>
            </li>
            <li>
              <a
                href="#PricingPlan"
                onClick={toggleSidebar}
                className="hover:border-b-2 hover:border-borderColor p-2 hover:rounded-e-md hover:rounded-s-md"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#Locations"
                onClick={toggleSidebar}
                className="hover:border-b-2 hover:border-borderColor p-2 hover:rounded-e-md hover:rounded-s-md"
              >
                Locations
              </a>
            </li>
          </ul>
          <div className=" flex flex-col items-start gap-6  font-sofia mt-36 md:ml-9 ml-2">
            <button className="w-40 h-12 px-2.5 py-2 bg-teal-500 rounded-3xl border-2 border-teal-500 justify-center items-center gap-2.5 inline-flex text-white text-xl font-medium ">
              The App
            </button>
            <button className="h-14 w-36  items-center justify-start flex flex-row text-black gap-3 text-xl ">
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
              English
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
