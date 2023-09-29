import React from "react";
import Header from "./components/Header/Header";
import "./index.css";
import BannerSection from "./components/BannerSection/BannerSection";
import AboutMe from "./components/AboutMe/AboutMe";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <AboutMe />
      <Technologies />
    </div>
  );
};

export default App;
