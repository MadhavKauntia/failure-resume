import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.privacy}>
        <a>Privacy</a>
        <a>Terms</a>
      </div>
      <div className={styles.project}>
        Project by{" "}
        <a
          className={styles.subtext}
          href="https://madhavkauntia.com"
          target="_blank"
          rel="noreferrer"
        >
          Madhav Kauntia
        </a>
      </div>
    </div>
  );
};

export default Footer;
