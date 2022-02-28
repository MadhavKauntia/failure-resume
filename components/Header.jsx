import { React, useState } from "react";
import styles from "../styles/Header.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.container}>
      <h1>
        <span className={styles["primary-text"]}>F</span>
        <span className={styles.subtext}>R</span>
      </h1>
      <ul>
        <li>Use Case</li>
        <li>Discover</li>
        <li>Blog</li>
      </ul>
      <div className={styles.login}>
        <p>Login</p>
        <button type="button">Register</button>
      </div>
    </div>
  );
};

export default Header;
