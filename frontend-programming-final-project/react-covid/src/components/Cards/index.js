import Card from "../Card";
import styles from "./Cards.module.css";

const Cards = (props) => {
  const { cards } = props;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Indonesia</h1>
        <p>Data Covid Berdasarkan Indonesia</p>
      </div>
      <div className={styles.cards}>
        {cards.map(function (card, index) {
          return <Card key={index} card={card} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
