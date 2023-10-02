import React from "react";
import { technologies } from "../../data/technologies";
import styles from "./Technologies.module.css";

const Technologies = () => {
  return (
    <div>
      <div className={styles.title}>
        <p>Technologias</p>
      </div>
      <div className={styles.technologies}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.technologyCard}>
            <img src={tech.img} alt={`${tech.name} Icon`} />
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
