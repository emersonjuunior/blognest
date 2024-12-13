import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

const Header = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        Blog<span>Nest</span>
      </Link>
      <nav className={styles.nav}>
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
              <button className={styles.navbar_item} onClick={logout}>
                Sair
              </button>
            </li>
          )}
        </ul>
      </nav>
      <menu className={styles.menu}>
        <div>
          <button onClick={openMenu} className={styles.menu_button}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className={styles.menu_items} id={menu ? "enable" : "disabled"}>
          <ul className={styles.menu_ul}>
            <li>
              <NavLink className={styles.menu_item} to="/">
                Home
              </NavLink>
            </li>
            {!user ? (
              <>
                <li>
                  <NavLink className={styles.menu_item} to="/login">
                    Entrar
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menu_item} to="/register">
                    Cadastrar
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink className={styles.menu_item} to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menu_item} to="/posts/create">
                    Criar Post
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink className={styles.menu_item} to="/about">
                Sobre
              </NavLink>
            </li>
            {user && (
              <li>
                <button className={styles.menu_item} onClick={logout}>
                  Sair
                </button>
              </li>
            )}
          </ul>
        </div>
      </menu>
    </header>
  );
};

export default Header;
