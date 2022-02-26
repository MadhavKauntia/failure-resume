import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
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
