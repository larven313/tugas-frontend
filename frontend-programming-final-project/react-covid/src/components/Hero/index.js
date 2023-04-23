import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h4 className={styles.hero__subtitle}>
            Monitoring Perkembangan Covid
          </h4>
          <p className={styles.hero__description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ex
            explicabo unde aperiam provident repellat id eius blanditiis
            consequuntur incidunt ducimus repellendus labore, laborum quisquam?
            Quia dignissimos tempora consequatur. Doloribus.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img
            src={require("./img-vaccine.png")}
            alt=""
            className={styles.hero__image}
          />
        </div>
      </section>
    </div>
  );
};
export default Hero;
