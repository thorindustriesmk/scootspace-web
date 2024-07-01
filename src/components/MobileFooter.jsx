import React from "react";
import facebook from "../assets/icons/fb.svg";
import instagram from "../assets/icons/ig.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/twitter.svg";

function MobileFooter() {
  return (
    <div className="flex flex-col items-center xl:w-full w-[95%] pb-10 p-2  divide-borderColor">
      <div className="flex flex-col items-center gap-3 p-2 w-full divide-borderColor divide-y-4">
        {" "}
        <div className="flex flex-col gap-5 justify-between w-full items-center devi ">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="divide-x-2">
              {" "}
              <img src={linkedin} alt="" />
            </div>
            <div>
              {" "}
              <img src={facebook} alt="" />
            </div>
            <div>
              {" "}
              <img src={instagram} alt="" />
            </div>
            <div>
              {" "}
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-between w-full items-center ">
          <div className="flex flex-row justify-around w-full items-center py-4 ">
            <div className="text-center text-black text-lg font-bold  leading-3">
              About Us
            </div>
            <div className="text-center text-black text-lg font-bold  leading-3">
              {" "}
              Our office{" "}
            </div>
            <div className="text-center text-black text-lg font-bold  leading-3">
              {" "}
              Our app{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 justify-between w-full items-center">
        <div className="flex flex-row justify-around w-full items-center ">
          <div className="text-center text-borderColor text-3xl font-black  flex justify-center leading-10">
            Scootspace
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;
