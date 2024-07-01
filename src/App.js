import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OurApp from "./pages/OurApp";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
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
