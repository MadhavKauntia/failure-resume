import React from "react";
import styles from "../styles/ResumeEntry.module.css";

const ResumeEntry = ({ time, failure, lesson }) => {
  return (
    <div className={styles.container}>
      <div className={styles.time}>
        <p className={styles.title}>When</p>
        <p className={styles.value}>{time}</p>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.failure}>
        <p className={styles.title}>Failure / Regret</p>
        <p className={styles.value}>{failure}</p>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.lesson}>
        <p className={styles.title}>Lesson</p>
        <p className={styles.value}>{lesson}</p>
      </div>
    </div>
  );
};

export default ResumeEntry;
