import React from "react";
import Header from "./components/Header/Header";
import "./index.css";
import BannerSection from "./components/BannerSection/BannerSection";
import AboutMe from "./components/AboutMe/AboutMe";
import Technologies from "./components/Technologies/Technologies";
import Projetos from "./components/Projetos/Projetos";
import Rodape from "./components/Rodape/Rodape";

const App = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <AboutMe />
      <Technologies />
      <Projetos />
      <Rodape />
    </div>
  );
};

export default App;
