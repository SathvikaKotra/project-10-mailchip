import React from "react";
import Navbar from "./components/Navbar";
import Topnav from "./components/Topnav";
import Hero from "./components/Hero";
import Tools from "./components/Features";
import Why from "./components/Why";
import Onboarding from "./components/Onboarding";
import Try from "./components/Try";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Topnav />
      <Navbar />
      <Hero />
      <Tools />
      <Why />
      <Onboarding />
      <Try />
      <Footer />
    </div>
  );
};

export default App;
