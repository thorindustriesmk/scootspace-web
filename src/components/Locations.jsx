import React from "react";
import locationMap from "../assets/background/locationMap.svg";

function Locations() {
  return (
    <>
      <div
        id="Locations"
        className="flex flex-col w-full  gap-9 bg-[#DEF2F1] items-center justify-start "
      >
        <div className=" flex flex-col  justify-center items-center gap-6 px-4 py-8 sm:px-8 sm:py-12">
          <div className="text-black font-sofia font-black text-5xl leading-10">
            ScootSpace Locations
          </div>
          <div className="text-center text-black lg:text-lg text-base font-light font-sofia leading-snug">
            Discover ScootSpace's strategically placed hubs throughout the city
            for easy and secure electric scooter parking. Here are some of our
            prime locations:
          </div>
        </div>
        <div className="flex max-w-7xl w-[90%] sm:w-full">
          <img className="h-full w-full" src={locationMap} alt="" />
        </div>
      </div>
    </>
  );
}

export default Locations;
