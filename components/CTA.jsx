import React from "react";
import styles from "../styles/CTA.module.css";
import Link from "next/link";

const CTA = () => {
  return (
    <div className={styles.container}>
      <h1>Create your own Failure Resume today</h1>
      <Link href="/register" passHref>
        <button type="button">Get Started - It&apos;s Free</button>
      </Link>
    </div>
  );
};

export default CTA;
