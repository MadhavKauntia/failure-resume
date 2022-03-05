import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.privacy}>
        <a
          href="https://www.privacypolicies.com/live/310f4495-e204-421f-99d0-39d951e35b4f"
          target="_blank"
          rel="noreferrer"
        >
          Privacy
        </a>
        <a
          href="https://www.termsfeed.com/live/1490857f-aa95-4439-8784-074119961cc5"
          target="_blank"
          rel="noreferrer"
        >
          Terms
        </a>
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
