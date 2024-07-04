import { SpeedInsights } from "@vercel/speed-insights/react";
import React, { useEffect } from "react";
import Favicon from "react-favicon";
import Hero from "../components/Hero";
import AboutScootspace from "../components/AboutScootspace";
import HowToPark from "../components/HowToPark";
import HowToUseTheApp from "../components/HowToUseTheApp";
import PricingPlan from "../components/PricingPlan";
import Locations from "../components/Locations";
import ScootSpaceLogo from "../assets/logo/logo.svg";

function Home() {
  function slideTo(id) {
    var element = document.getElementById(id);
    if (!element) {
      return window.location.replace("/");
    }
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (window.location.hash !== "") {
      slideTo(window.location.hash.split("#")[1]);
    }
  }, []);

  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center font-aptos">
      <Favicon url={ScootSpaceLogo} />
      <SpeedInsights />
      <Hero />
      <AboutScootspace />
      <HowToPark />
      <HowToUseTheApp />
      <PricingPlan />
      <Locations />
    </div>
  );
}

export default Home;
