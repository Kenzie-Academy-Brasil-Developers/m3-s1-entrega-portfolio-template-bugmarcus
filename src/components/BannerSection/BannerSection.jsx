import React from "react";
import BannerImg from "../../assets/banner-img.png";

const BannerSection = () => {
  return (
    <section className="banner-section">
      <div className="left-column">
        <p>Texto 1</p>
        <p>Texto 2</p>
        <p>Texto 3</p>
      </div>
      <div className="right-column">
        <button>Botão</button>
        <img src={BannerImg} alt="Imagem de um notebook, arte complementar" />
      </div>
    </section>
  );
};

export default BannerSection;
