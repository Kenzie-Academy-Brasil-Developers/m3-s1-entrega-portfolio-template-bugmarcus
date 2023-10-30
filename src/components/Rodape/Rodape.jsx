import React from "react";
import styles from "./Rodape.module.css";
import githubLogo from "../../assets/github-icon.png";
import whatsappLogo from "../../assets/whatsapp-icon.png";
import linkedinLogo from "../../assets/linkedin-icon.png";

const Rodape = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        <div className={styles.title}>Contato</div>
        <div className={styles.todosOsDireitos}>
          Todos os direitos reservados - Marcus Queiroz
        </div>
        <div className={styles.icons}>
          <a className={styles.icon} href="https://github.com/bugmarcus">
            <img src={githubLogo} alt="Icone do Github" />
          </a>
          <a
            className={styles.icon2}
            href="https://www.linkedin.com/in/marcus-queiroz/"
          >
            <img src={linkedinLogo} alt="Icone do Linkedin" />
          </a>
          <a className={styles.icon2} href="https://wa.me/5512982518567">
            <img src={whatsappLogo} alt="Icone do Whatasapp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rodape;
