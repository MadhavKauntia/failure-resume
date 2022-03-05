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
      <div className={styles.navbarMenu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#00adb5"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#00adb5"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className={styles.navbarMenuContainer}>
            <div
              className={`${styles.navbarMenuContainerLinks} ${styles["scale-up-center"]}`}
            >
              <p>
                <a>Use Case</a>
              </p>
              <p>
                <a>Discover</a>
              </p>
              <p>
                <a>Blog</a>
              </p>
              <div className={styles.navbarSignIn}>
                <Link href="/login" passHref>
                  <p>Login</p>
                </Link>
                <Link href="/register" passHref>
                  <button type="button">Register</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
