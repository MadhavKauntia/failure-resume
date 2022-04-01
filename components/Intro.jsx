import React from "react";
import styles from "../styles/Intro.module.css";
import sample from "../assets/sample.png";
import Image from "next/image";

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1>Failure Resume</h1>
      <p>
        Create a failure resume and document your learnings from your failures
        to help you grow.
      </p>
      <div className={styles.image}>
        <Image src={sample} alt="Failure Resume" className={styles.image} />
      </div>
    </div>
  );
};

export default Intro;
