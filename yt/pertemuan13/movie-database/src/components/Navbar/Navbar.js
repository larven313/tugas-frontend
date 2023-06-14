/**
 * Import CSS Module Navbar.
 * Disimpan di object
 */
// import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledNavbar>
      <div className="container">
        <nav className="navbar">
          <div>
            <h1 className="navbar__brand">Movie App</h1>
          </div>
          <div>
            <ul className="navbar__list">
              <li className="navbar__item">
                <Link className="navbar__link" to="/">
                  Home
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/movie/create">
                  Add Movie
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/movie/popular">
                  Popular
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/movie/now">
                  Now Playing
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/movie/top">
                  Top Rated
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
