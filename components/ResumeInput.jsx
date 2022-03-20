import React, { useRef } from "react";
import styles from "../styles/ResumeInput.module.css";

const ResumeInput = ({ addEntryHandler }) => {
  const monthRef = useRef();
  const failureRef = useRef();
  const lessonRef = useRef();

  const submitHandler = () => {
    if (
      monthRef.current.value &&
      failureRef.current.value &&
      lessonRef.current.value
    ) {
      addEntryHandler(monthRef, failureRef, lessonRef);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.time}>
          <p className={styles.title}>When</p>
          <input type="month" ref={monthRef} />
        </div>
        <div className={styles.vl}></div>
        <div className={styles.failure}>
          <p className={styles.title}>Failure / Regret</p>
          <textarea
            type="text"
            placeholder="Write down a failure..."
            ref={failureRef}
          />
        </div>
        <div className={styles.vl}></div>
        <div className={styles.lesson}>
          <p className={styles.title}>Lesson</p>
          <textarea
            type="text"
            placeholder="Write down a lesson you learnt from this failure..."
            ref={lessonRef}
          />
        </div>
      </div>
      <div className={styles.submit}>
        <button type="button" onClick={submitHandler}>
          Save Entry
        </button>
      </div>
    </>
  );
};

export default ResumeInput;
