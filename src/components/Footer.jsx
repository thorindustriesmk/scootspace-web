import React from "react";
import facebook from "../assets/icons/fb.svg";
import instagram from "../assets/icons/ig.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/twitter.svg";
import ScootSpaceLogo from "../assets/logo/logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-row xl:w-full w-[100%] border-t-2">
      <div className="flex basis-2/12 gap-6 justify-center items-center w-full">
        <img
          className="w-full px-8"
          src={ScootSpaceLogo}
          alt="scootspace-logo"
        />
      </div>

      <div className="flex basis-10/12 flex-col gap-6 items-end w-full">
        <ul className="flex flex-row gap-7 text-center text-black text-2xl font-normal leading-7">
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

        <ul className="flex flex-row justify-center items-center gap-7 text-center text-black text-2xl font-normal  leading-7">
          <Link to="/Terms">Terms</Link>
          <Link to="/PrivacyPolicy">Privacy</Link>
          <Link to="/OurApp">Our app</Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
