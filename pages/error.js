import React from "react";
import Head from "next/head";
import styles from "../styles/Construction.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Not Found - Failure Resume</title>
        <meta name="description" content="You cannot access this page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.content}>
        <h1>Looks like you&apos;re lost</h1>
        <p>Please head back home.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
