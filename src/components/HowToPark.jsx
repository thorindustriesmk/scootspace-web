import React from "react";
import HowToParkBg from "../assets/background/howToParkBg.svg";
import { useState } from "react";

function HowToPark() {
  const [cards] = useState([
    {
      title: "Qr code scanner",
      description: "Can be scan by scootspace app",
      image: "",
    },
    {
      title: "Led indicator",
      description: "Open/Close",
      image: "",
    },
    {
      title: "Scooter charger",
      description: "Most scooter supported",
      image: "",
    },
    {
      title: "Locking bar",
      description: "Closes automatically",
      image: "",
    },
    {
      title: "Locking bar",
      description: "Closes automatically",
      image: "",
    },
    {
      title: "Locking bar",
      description: "Closes automatically",
      image: "",
    },
  ]);

  return (
    <>
      <div
        id="howToPark"
        className="flex max-w-screen-3xl h-auto w-full bg-howToParkBg xl:flex-row flex-col "
      >
        <div className="flex items-start flex-col xl:w-2/4 w-full mt-12">
          <div className="flex flex-col gap-5 xl:ml-28  sm:mr-0 ml-0 xl:items-start items-center h-auto ">
            <div className="text-black text-5xl font-black font-sofia leading-10 xl:text-start text-center ">
              How to park?
            </div>
            <div className="text-black text-sm xl:text-start text-center max-w-2xl xl:max-w-xl sm:text-lg font-light font-sofia leading-snug">
              Parking your electric scooter with ScootSpace is a breeze. Simply
              locate the nearest ScootSpace hub using our app, secure your
              scooter, and make an easy payment. It's that simple! No
              reservations, no complications. Experience the ultimate
              convenience in urban mobility with ScootSpace.
            </div>

            <div className="flex m-0 justify-center items-center flex-wrap flex-shrink gap-5 mt-20 xl:mt-40 xl:mb-40 ">
              {cards.map((card) => (
                <div className="flex flex-col h-28 w-80 gap-1 p-7 bg-white rounded-xl border-2 border-borderColor justify-center items-center  ">
                  <div className="text-black text-xl font-semibold font-sofia leading-normal">
                    {card.title}
                  </div>
                  <div className="text-black text-base font-light font-sofia leading-tight">
                    {card.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end justify-end  basis-2/4     ">
          <img
            src={HowToParkBg}
            alt=""
            className=" flex flex-row items-end justify-end  "
          />
        </div>
      </div>
    </>
  );
}

export default HowToPark;
