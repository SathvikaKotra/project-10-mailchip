import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Topnav from "./components/Topnav";
import Hero from "./components/Hero";
import Tools from "./components/Features";
import Why from "./components/Why";
import Onboarding from "./components/Onboarding";
import Try from "./components/Try";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-yellow-300 via-orange-200 to-yellow-400 min-h-screen">
      <Topnav />
      <Navbar />
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-up">
        <Tools />
      </div>
      <div data-aos="fade-up">
        <Why />
      </div>
      <div data-aos="fade-up">
        <Onboarding />
      </div>
      <div data-aos="fade-up">
        <Try />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>
  );
};

export default App;
