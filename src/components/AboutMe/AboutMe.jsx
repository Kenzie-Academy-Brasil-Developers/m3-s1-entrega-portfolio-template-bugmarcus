import React from "react";
import BannerImg from "../../assets/banner-img.png";
import styles from "./BannerSection.module.css";

const BannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.column}>
        <p className={styles.name}>MARCUS QUEIROZ</p>
        <p className={styles.welcome}>Bem vindo ao meu portfólio</p>
        <p className={styles.bio}>Desenvolvedor Full Stack</p>
        <a className={styles.button} href="#about">
          Saiba mais
        </a>
      </div>
      <div className={styles.img}>
        <img src={BannerImg} alt="Imagem de um notebook, arte complementar" />
      </div>
    </section>
  );
};

export default BannerSection;
