import React from "react";
import Head from "next/head";
import styles from "../styles/Construction.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image from "../assets/under-construction.svg";
import Image from "next/image";

const Construction = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Under Construction</title>
        <meta name="description" content="This page is under construction." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={`${styles.content} ${styles["puff-in-center"]}`}>
        <h1>Under Construction</h1>
        <p>This page is under construction, please visit later.</p>
        <Image src={image} alt="Under Construction" width="750" height="680" />
      </div>
      <Footer />
    </div>
  );
};

export default Construction;
