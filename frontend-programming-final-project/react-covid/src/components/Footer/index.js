import Nav from "../Nav";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <section className={styles.footer__title}>
          <h2 className={styles.footer__title}>Covid ID</h2>
          <p className={styles.footer__desc}>Develop by SukMaX</p>
        </section>
        <Nav />
      </footer>
    </div>
  );
}

export default Footer;
