import React from "react";
import scootIcon from "../assets/icons/scootIcon.svg";

function PricingPlan() {
  return (
    <>
      <div
        id="PricingPlan"
        className="flex justify-center items-center xl:flex-row xl:max-w-full w-[95%] h-screen  flex-col  bg-b-pricingPlanBg gap-5"
      >
        <div className="flex flex-col max-w-full xl:w-2/6 justify-end xl:m ">
          <div className="flex flex-col items-end gap-6">
            <div className="text-black font-aptos-black text-5xl leading-10  text-end ">
              Pricing Plan
            </div>
            <div className="text-black text-lg text-end max-w-md  leading-snug">
              We believe in keeping things straightforward and budget-friendly.
              Our pricing structure consists of a single plan:
            </div>
          </div>
        </div>
        <div className="flex flex=col max-w-5xl xl:w-2/6 justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="mainrectangle flex flex-col gap-10 justify-between bg-gradient-to-b from-teal-500 to-teal-700  rounded-3xl border-4 border-white">
              <div className="flex flex-row justify-between items-center pt-10 px-5 gap-5 ">
                <div className=" text-white text-start justify-center items-center xl:text-4xl text-4xl max-w-[200px] font-black leading-tight">
                  Price per hour
                </div>
                <div className="text-white text-3xl font-black leading-tight">
                  <span className="text-6xl">2</span>den/h
                </div>
              </div>

              <div className="flex flex-col gap-6 justify-center items-center ">
                <div className="flex justify-start items-start w-72 rounded-full h-1 mb-14 bg-white "></div>
                <ul className="flex flex-col gap-6 text-start text-white text-xl font-normal font-['Sofia Pro']">
                  <li className="inline-flex gap-4">
                    <span>
                      <img src={scootIcon} alt="" />
                    </span>
                    Secure Scooter Lock
                  </li>
                  <li className="inline-flex gap-4">
                    <span>
                      <img src={scootIcon} alt="" />
                    </span>
                    Easy and Safe Payment Options
                  </li>
                  <li className="inline-flex gap-4">
                    <span>
                      <img src={scootIcon} alt="" />
                    </span>
                    Free Scooter Charger
                  </li>
                  <li className="inline-flex gap-4">
                    <span>
                      <img src={scootIcon} alt="" />
                    </span>
                    Prime Location Advantage
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-end py-10">
                <button className="flex w-44 justify-center items-center font-aptos-semibold text-center text-black py-3 px-4 bg-white rounded-2xl gap-2.5 border-2 border-teal-500  ">
                  Buy Now!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex=col w-full xl:w-2/6 justify-start items-end ">
          <div className="flex-col justify-center items-center">
            <div className="text-black text-sm text-start max-w-md leading-snug">
              With ScootSpace, you get more than just parking; you get a
              hassle-free and comprehensive solution for your electric scooter.{" "}
              <br />
              Enjoy peace of mind knowing that your scooter is safe, charged,
              and ready to go whenever you need it. Discover the convenience,
              security, and sustainability that ScootSpace offers for just 120
              denar per hour.{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingPlan;
