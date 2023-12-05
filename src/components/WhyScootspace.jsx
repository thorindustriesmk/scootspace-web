import React from "react";
import exclusiveProvider from "../assets/icons/exclusiveProvider.svg";
import safety from "../assets/icons/safety.svg";
import freeCharging from "../assets/icons/freeCharging.svg";

function WhyScootspace() {
  return (
    <>
      <div className="h-32"></div>
      <div className="flex flex=col w-full h-auto items-center justify-center mb-52">
        <div className="flex flex-col ml-24 mr-24 w-full">
          <div className="flex flex-col justify-center items-center text-black gap-9 ">
            <div className="flex flex-col justify-center items-center gap-5 ">
              <div className="text-black font-sofia font-black text-5xl leading-10 ">
                Why ScootSpace?
              </div>
              <div className="max-w-screen-xl text-center text-black text-xl font-light font-['Sofia Pro'] leading-snug">
                At ScootSpace, we're more than just a parking facility; we're a
                revolution in urban mobility. As the sole company offering
                electric scooter parking solutions in the country, our
                commitment to convenience, sustainability, and security is
                unrivaled.
              </div>
            </div>

            <div className="flex flex-row justify-center gap-14 flex-wrap flex-grow-1 pt-16 pb-16">
              <div className="flex flex-col justify-center items-center gap-5 bg-white  rounded-[20px] shadow-[0px_56px_79px_-20px_rgba(58,175,169,0.20)] border-2 border-teal-500 w-72 h-96 ">
                <div className="text-center text-black text-xl font-normal font-sofia leading-normal">
                  Exclusive Provider
                </div>
                <img
                  src={exclusiveProvider}
                  width={80}
                  alt=""
                  className="pt-12 pb-7"
                />
                <div className="text-center text-black text-base font-light font-['Sofia Pro'] leading-tight px-5 pb-3">
                  ScootSpace is the sole provider of electric scooter parking
                  services in North Macedonia. We are your dedicated and trusted
                  partner in elevating your urban mobility experience.
                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-5 bg-white  rounded-[20px] shadow-[0px_56px_79px_-20px_rgba(58,175,169,0.20)] border-2 border-teal-500 w-72 h-96 ">
                <div className="text-center text-black text-xl font-normal font-sofia leading-normal">
                  Free Charging
                </div>
                <img
                  src={freeCharging}
                  width={80}
                  alt=""
                  className="pt-12 pb-7"
                />
                <div className="text-center text-black text-base font-light font-['Sofia Pro'] leading-tight px-5 pb-3">
                  We go the extra mile by offering free charging for your
                  scooter. Say goodbye to the hassle of finding charging
                  stations; we've got you covered.
                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-5 bg-white  rounded-[20px] shadow-[0px_56px_79px_-20px_rgba(58,175,169,0.20)] border-2 border-teal-500 w-72 h-96 ">
                <div className="text-center text-black text-xl font-normal font-sofia leading-normal">
                  Safety
                </div>
                <img src={safety} width={80} alt="" className="pt-12 pb-7" />
                <div className="text-center text-black text-base font-light font-['Sofia Pro'] leading-tight px-5 pb-3">
                  Your peace of mind is paramount. Our facilities are equipped
                  with top-tier security features, ensuring your scooter is
                  always in safe hands when you choose ScootSpace.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyScootspace;
