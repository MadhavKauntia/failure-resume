import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import AuthContext from "../store/auth-context";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

const Header = () => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  const authCtx = useContext(AuthContext);
  const [progress, setProgress] = useState(0);
  const showNavigation = false;

  useEffect(() => {
    setProgress(100);
  }, []);
  return (
    <React.Fragment>
      <LoadingBar
        progress={progress}
        color="#00adb5"
        shadow={true}
        height={4}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className={styles.container}>
        <Link href="/" passHref>
          <h1>
            <span className={styles["primary-text"]}>F</span>
            <span className={styles.subtext}>R</span>
          </h1>
        </Link>
        {showNavigation && (
          <ul>
            <Link href="/construction" passHref>
              <li>Use Case</li>
            </Link>
            <Link href="/construction" passHref>
              <li>Discover</li>
            </Link>
            <Link href="/construction" passHref>
              <li>Blog</li>
            </Link>
          </ul>
        )}
        {!authCtx.isLoggedIn && (
          <div className={styles.login}>
            <Link href="/login" passHref>
              <p>Login</p>
            </Link>
            <Link href="/register" passHref>
              <button type="button">Register</button>
            </Link>
          </div>
        )}
        {authCtx.isLoggedIn && (
          <div className={styles.login}>
            <Link href={`/edit/${authCtx.username}`} passHref>
              <button type="button">Edit Resume</button>
            </Link>
            <button
              type="button"
              onClick={() => {
                authCtx.logout();
                router.replace("/");
              }}
            >
              Sign Out
            </button>
          </div>
        )}
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
                  <Link href="/construction" passHref>
                    <a>Use Case</a>
                  </Link>
                </p>
                <p>
                  <Link href="/construction" passHref>
                    <a>Discover</a>
                  </Link>
                </p>
                <p>
                  <Link href="/construction" passHref>
                    <a>Blog</a>
                  </Link>
                </p>
                {!authCtx.isLoggedIn && (
                  <div className={styles.navbarSignIn}>
                    <Link href="/login" passHref>
                      <p>Login</p>
                    </Link>
                    <Link href="/register" passHref>
                      <button type="button">Register</button>
                    </Link>
                  </div>
                )}
                {authCtx.isLoggedIn && (
                  <div className={styles.navbarSignIn}>
                    <Link href={`/edit/${authCtx.username}`} passHref>
                      <button type="button">Edit Resume</button>
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        authCtx.logout();
                        router.replace("/");
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
