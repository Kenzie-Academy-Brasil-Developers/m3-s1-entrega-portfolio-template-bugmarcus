import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.AboutMeSection}>
      <div className={styles.bioTitle}>
        <p>Sobre mim</p>
      </div>
      <div className={styles.bioText}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex
          magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam
          a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra,
          vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis
          ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
