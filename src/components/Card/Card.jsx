import styles from "../Card/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.technologies}>
      <div key={props} className={styles.technologyCard}>
        <img src={props.img} alt={`${props.name} Icon`} />
        <span className={styles.techName}>{props.name}</span>
      </div>
    </div>
  );
};

export default Card;
