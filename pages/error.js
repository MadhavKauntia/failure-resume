import React from "react";
import Head from "next/head";
import styles from "../styles/Construction.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unauthorized</title>
        <meta name="description" content="You cannot access this page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.content}>
        <h1>Unauthorized</h1>
        <p>You are not authorized to view this page.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
