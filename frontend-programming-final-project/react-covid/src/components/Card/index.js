import styles from "./Card.module.css";

const Card = (props) => {
  const { card } = props;
  let cardClass = "";
  switch (card.status) {
    case "Positif":
      cardClass = styles["card__positif"];
      break;
    case "Sembuh":
      cardClass = styles["card__sembuh"];
      break;
    case "Meninggal":
      cardClass = styles["card__meninggal"];
      break;
    default:
      break;
  }
  return (
    <div className={styles.container}>
      <section className={`${styles.card} ${cardClass}`}>
        <div className={styles.card__body}>
          <h3 className={`${styles.card__title}`}>{card.status}</h3>
          <p className={`${styles.card__desc}`}>{card.total}</p>
        </div>
      </section>
    </div>
  );
};

export default Card;
