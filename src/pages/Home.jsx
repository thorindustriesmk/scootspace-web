import { SpeedInsights } from "@vercel/speed-insights/react";
import React, { useEffect } from "react";
import Favicon from "react-favicon";
import Hero from "../components/Hero";
import WhyScootspace from "../components/WhyScootspace";
import HowToPark from "../components/HowToPark";
import HowToUseTheApp from "../components/HowToUseTheApp";
import PricingPlan from "../components/PricingPlan";
import Locations from "../components/Locations";
import ScootSpaceLogo from "../assets/logo/logo.svg";

function Home() {
  //   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //   const [showSidebar, setShowSidebar] = useState(false);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setWindowWidth(window.innerWidth);
  //     };
  //     window.addEventListener("resize", handleResize);
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  //   const isMobile = windowWidth <= 1024;
  //   const footerIsMobile = windowWidth <= 768;

  //   const toggleSidebar = () => {
  //     setShowSidebar(!showSidebar);
  //   };
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
    <div className={`App flex flex-col justify-center items-center font-aptos`}>
      <Favicon url={ScootSpaceLogo} />
      <SpeedInsights />
      {/* {isMobile ? (
        <MobileNav showSidebar={showSidebar} toggleSidebar={toggleSidebar} /> // Render Topbar for screen size less than or equal to 1024px
      ) : (
        <Navbar /> // Render Navbar for screen size greater than 1024px
      )} */}
      <Hero />
      <WhyScootspace />
      <HowToPark />
      <HowToUseTheApp />
      <PricingPlan />
      <Locations />
      {/* {footerIsMobile ? <MobileFooter /> : <Footer />} */}
    </div>
  );
}

export default Home;
