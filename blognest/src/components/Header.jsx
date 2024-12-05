import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

const Header = () => {
  const { user } = useAuthValue();
  const {logout} = useAuthentication()

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        Blog<span>Nest</span>
      </Link>
      <nav>
        <ul className={styles.navbar_ul}>
          <li>
            <NavLink className={styles.navbar_item} to="/">
              Home
            </NavLink>
          </li>
          {!user ? (
            <>
              <li>
                <NavLink className={styles.navbar_item} to="/login">
                  Entrar
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.navbar_item} to="/register">
                  Cadastrar
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink className={styles.navbar_item} to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.navbar_item} to="/posts/create">
                  Criar Post
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink className={styles.navbar_item} to="/about">
              Sobre
            </NavLink>
          </li>
          {user && (
            <li>
              <button className={styles.navbar_item} onClick={logout}>Sair</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
