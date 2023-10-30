import React from "react";
import Card from "../Card/Card";
import styles from "./Technologies.module.css";
import image from "../../assets/html-icon.png";
import { technologies } from "../../data/technologies";

const Technologies = () => {
  return (
    <div>
      <div className={styles.title}>
        <p>Tecnologias</p>
      </div>
      <div className={styles.cards}>
        {technologies.map((tech) => (
          <Card img={tech.img} name={tech.name} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
