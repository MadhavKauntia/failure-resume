import { React, useState } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <h1>
          <span className={styles["primary-text"]}>F</span>
          <span className={styles.subtext}>R</span>
        </h1>
      </Link>
      <ul>
        <li>Use Case</li>
        <li>Discover</li>
        <li>Blog</li>
      </ul>
      <div className={styles.login}>
        <Link href="/login" passHref>
          <p>Login</p>
        </Link>
        <Link href="/register" passHref>
          <button type="button">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
