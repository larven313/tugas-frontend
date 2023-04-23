import Nav from "../Nav";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.navbar__title}>Covid ID</h2>
      <Nav />
    </div>
  );
}

export default Navbar;
