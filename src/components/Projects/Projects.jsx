import React from "react";
// import styles from "./projects.module.css";
import { projects } from "../../data/projects";

const projetos = () => {
  return (
    <div className={styles.projects}>
      {projects.map((tech, index) => (
        <div key={index} className={styles.projectCard}>
          <img src={tech.img} alt={`${tech.name} Icon`} />
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default projects;
