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
          Desenvolvedor Full Stack. Entre minhas conquistas recentes, tenho
          orgulho de desenvolvi um bot para o Telegram, permitindo downloads de
          mídia do Instagram do Instagram por meio de links fornecidos pelo
          usuário. Minha paixão por inovação, aliada à minha dedicação e
          proficiência em diversas tecnologias, me tornam um ativo valioso para
          qualquer equipe de desenvolvimento. Vamos colaborar para criar
          soluções extraordinárias que causem um impacto real!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
