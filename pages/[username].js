import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Edit.module.css";
import { useRouter } from "next/router";
import AuthContext from "../store/auth-context";
import Error from "./error";
import ResumeEntry from "../components/ResumeEntry";
import Head from "next/head";

const Edit = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{authCtx.fullName} - Failure Resume (Edit)</title>
        <meta name="description" content="Edit your failure resume." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1>
          Failure Resume of{" "}
          <span className={styles.subtext}>{authCtx.fullName}</span>
        </h1>
        <div className={styles.entries}>
          <ResumeEntry
            time="2019"
            failure="Got rejected by Microsoft"
            lesson="Time management is important. I spent most of my time trying to come up with a better solution while the obvious solution was actually the correct answer."
          />
          <ResumeEntry
            time="2019"
            failure="Got rejected by Microsoft"
            lesson="Time management is important. I spent most of my time trying to come up with a better solution while the obvious solution was actually the correct answer."
          />
          <ResumeEntry
            time="2019"
            failure="Got rejected by Microsoft"
            lesson="Time management is important. I spent most of my time trying to come up with a better solution while the obvious solution was actually the correct answer."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Edit;
