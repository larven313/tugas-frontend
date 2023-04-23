import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <div>
      <ul className={styles.nav}>
        <li className={styles.nav__item}>Global</li>
        <li className={styles.nav__item}>Indonesia</li>
        <li className={styles.nav__item}>Provinsi</li>
        <li className={styles.nav__item}>About</li>
      </ul>
    </div>
  );
};

export default Nav;
