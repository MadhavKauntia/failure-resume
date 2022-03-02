import Head from "next/head";
import { Bounce, Zoom } from "react-reveal";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Tweets from "../components/Tweets";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Failure Resume</title>
        <meta
          name="description"
          content="Generate a failure resume and document your learnings from your failures to help you grow."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Zoom>
        <Intro />
        <Tweets />
        <CTA />
      </Zoom>
      <Footer />
    </div>
  );
}
