import React from "react";
import portfolioLogo from "../../assets/portfolio.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={portfolioLogo}
        alt="Logo do Portfólio"
        className={styles.logo}
      />
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a href="#about">Sobre</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#technologies">Stack</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#projects">Projetos</a>
          </li>
        </ul>
      </nav>
      <div className={styles.extraItem}>
        <a href="#contact">Contato</a>
      </div>
    </header>
  );
};

export default Header;
