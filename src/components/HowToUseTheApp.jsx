import React from "react";
import guide1 from "../assets/steps/guide1.png";
import guide2 from "../assets/steps/guide2.png";
import guide3 from "../assets/steps/guide3.png";

function HowToUseTheApp() {
  return (
    <div
      id="HowToUseTheApp"
      className="flex flex=col w-full min-h-screen items-center justify-center pb-10"
    >
      <div className="flex flex-col ml-16 mr-16 w-full">
        <div className="flex flex-col justify-center items-center text-black gap-9 ">
          <div className="flex flex-col justify-center items-center gap-6 ">
            <div className="text-black  font-aptos-black text-center text-5xl leading-10 ">
              How to use the app?
            </div>
            <div className="max-w-screen-xl text-center text-black lg:text-lg text-base  leading-snug">
              Getting started with our app is a walk in the park. Check the
              steps to your right, and you'll be smoothly navigating our
              platform. Discover the simplicity of urban mobility with
              ScootSpace!
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12  ">
            <div className="flex flex-col w-80 h-[600px] gap-7 bg-white rounded-3xl  border border-teal-500 border-opacity-20 shadow-[0px_20px_25px_6px_rgba(0,167,157,0.16)]">
              <img className="rounded-t-3xl" src={guide1} alt="" width={500} />
              <div className="text-start pl-4 text-teal-500 text-lg font-normal ">
                Download the app
              </div>
              <div className="w-64 text-black text-base text-start m-8  leading-tight">
                1. Open your smartphones app store (iOS App Store or Google Play
                Store).
                <div className="py-2" />
                2.Search for ScootSpace and download the official app.
                <div className="py-2" />
                3.Install the app on your device and open it.
              </div>
            </div>

            <div className="flex flex-col w-80 h-[600px] gap-7 bg-white rounded-3xl  border border-teal-500 border-opacity-20 shadow-[0px_20px_25px_6px_rgba(0,167,157,0.16)]">
              <img className="rounded-t-3xl" src={guide2} alt="" width={500} />
              <div className="text-start pl-4 text-teal-500 text-lg font-normal ">
                Scan the code
              </div>
              <div className="w-64 text-black text-base text-start m-8  leading-tight">
                1. Approach the ScootSpace parking machine located within the
                parking zone.
                <div className="py-2" />
                2.Open the ScootSpace app and navigate to the "Park Scooter"
                option.
                <div className="py-2" />
                3.Use the app's built-in QR code scanner to scan the QR code
                displayed on the parking machine.
              </div>
            </div>

            <div className="flex flex-col w-80 h-[600px] gap-7 bg-white rounded-3xl  border border-teal-500 border-opacity-20 shadow-[0px_20px_25px_6px_rgba(0,167,157,0.16)]">
              <img className="rounded-t-3xl" src={guide3} alt="" width={500} />
              <div className="text-start text-teal-500 text-lg pl-4 font-normal ">
                Lock the scooter
              </div>
              <div className="w-64 text-black text-base text-start m-8  leading-tight">
                1. Once the QR code is successfully scanned, the app will
                confirm the parking process.
                <div className="py-2" />
                2.Press the "Lock" button on the app's interface.
                <div className="py-2" />
                3.Your scooter's locking mechanism will activate, securing it in
                place within the parking slot.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToUseTheApp;
