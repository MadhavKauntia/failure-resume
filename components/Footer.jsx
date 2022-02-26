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
        Project by <span className={styles.subtext}>Madhav Kauntia</span>
      </div>
    </div>
  );
};

export default Footer;
