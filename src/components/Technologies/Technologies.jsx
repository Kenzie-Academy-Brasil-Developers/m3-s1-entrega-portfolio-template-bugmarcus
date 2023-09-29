import React from "react";
import { technologies } from "../../data/technologies";
import styles from "./Technologies.module.css";

const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <p>Technologias</p>
      {technologies.map((tech, index) => (
        <div key={index} className={styles.technologyCard}>
          <img src={tech.img} alt={`${tech.name} Icon`} />
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
