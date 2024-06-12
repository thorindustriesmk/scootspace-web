import React from "react";
import facebook from "../assets/icons/fb.svg";
import instagram from "../assets/icons/ig.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/twitter.svg";
import ScootSpaceLogo from "../assets/logo/logo.svg";

function Footer() {
  return (
    <>
      <div className="flex flex-row xl:w-full w-[95%] pt-10  mb-10">
        <div className="flex flex-col gap-6 justify items-start w-full xl:px-28 ">
          <div className="flex flex-row justify-start items-start">
            <ul className="flex flex-row justify-center items-start gap-7 text-center text-black text-2xl font-normal  leading-7">
              <li className="transition ease-in-out duration-300 hover:scale-110 cursor-pointer">
                About Us
              </li>
              <li className="transition ease-in-out duration-300 hover:scale-110 cursor-pointer">
                Our office
              </li>
              <li className="transition ease-in-out duration-300 hover:scale-110 cursor-pointer">
                Our app
              </li>
            </ul>
          </div>
          <div className="flex flex-row justify-end items-end ">
            <img className="w-56" src={ScootSpaceLogo} alt="scootspace-logo" />
          </div>
        </div>

        <div className=" flex flex-col gap-6 justify-end items-end w-full xl:px-28">
          <div className=" flex flex-row justify-end">
            <ul className="flex flex-row gap-7 text-center text-black text-2xl font-normal  leading-7">
              <li>
                <img src={linkedin} alt="" />
              </li>
              <li>
                <img src={facebook} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" />
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-row justify-center items-center gap-7 text-center text-black text-2xl font-normal  leading-7">
              <li className="transition ease-in-out duration-300 hover:scale-110 cursor-pointer">
                Terms
              </li>
              <li className="transition ease-in-out duration-300 hover:scale-110 cursor-pointer">
                Privacy
              </li>
              <li className="transition ease-in-out duration-300 hover:scale-110 cursor-pointer">
                Our app
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
