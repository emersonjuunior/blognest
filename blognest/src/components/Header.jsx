import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        Blog<span>Nest</span>
      </Link>
      <nav>
        <ul className={styles.navbar_ul}>
          <li>
            <NavLink className={styles.navbar_item} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={styles.navbar_item} to="/login">Entrar</NavLink>
          </li>
          <li>
            <NavLink className={styles.navbar_item} to="/register">Cadastrar</NavLink>
          </li>
          <li>
            <NavLink className={styles.navbar_item} to="/about">Sobre</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
