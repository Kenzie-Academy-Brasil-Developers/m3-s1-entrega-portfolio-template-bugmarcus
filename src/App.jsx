import React from "react";
import Header from "./components/Header/Header";
import "./index.css";
import BannerSection from "./components/BannerSection/BannerSection";
import AboutMe from "./components/AboutMe/AboutMe";

const App = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <AboutMe />
    </div>
  );
};

export default App;
