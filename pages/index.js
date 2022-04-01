import Head from "next/head";
import { Bounce, Zoom } from "react-reveal";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Tweets from "../components/Tweets";
import styles from "../styles/Home.module.css";
import CookieConsent from "react-cookie-consent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Failure Resume</title>
        <meta
          name="description"
          content="Create a failure resume and document your learnings from your failures to help you grow."
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
      <CookieConsent
        location="bottom"
        buttonText="OK"
        style={{ background: "#393E46" }}
        buttonStyle={{
          color: "#eeeeee",
          fontSize: "13px",
          background: "#00ADB5",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}
