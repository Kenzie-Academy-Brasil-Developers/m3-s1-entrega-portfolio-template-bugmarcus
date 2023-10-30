import React from "react";
import Header from "./components/Header/Header";
import "./index.css";
import BannerSection from "./components/BannerSection/BannerSection";
import AboutMe from "./components/AboutMe/AboutMe";
import Technologies from "./components/Technologies/Technologies";
import Projetos from "./components/Projetos/Projetos";
import Rodape from "./components/Rodape/Rodape";
import style from "../src/App.module.css";

const App = () => {
  return (
    <div className={style.column}>
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
