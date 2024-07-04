import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OurApp from "./pages/OurApp";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import MobileNav from "./components/mobileNav";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 1024;

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <BrowserRouter>
      <>
        {isMobile ? (
          <MobileNav showSidebar={showSidebar} toggleSidebar={toggleSidebar} /> // Render Topbar for screen size less than or equal to 1024px
        ) : (
          <Navbar /> // Render Navbar for screen size greater than 1024px
        )}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/OurApp" element={<OurApp />} />
          </Routes>
        </div>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
