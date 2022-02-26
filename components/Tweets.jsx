import React from "react";
import styles from "../styles/Tweets.module.css";
import tweet_AnkurWarikoo from "../assets/tweet_AnkurWarikoo.png";
import tweet_DanielPink from "../assets/tweet_DanielPink.png";
import tweet_StevenJohnson from "../assets/tweet_StevenJohnson.png";
import Image from "next/image";

const Tweets = () => {
  return (
    <div className={styles.container}>
      <h1>Why should you create a Failure Resume?</h1>
      <p>Have a look at what the best say about creating a failure resume.</p>
      <div className={styles.tweets}>
        <div className={styles.tweetImage}>
          <Image src={tweet_AnkurWarikoo} alt="Ankur Warikoo" />
        </div>
        <div className={styles.tweetImage}>
          <Image src={tweet_DanielPink} alt="Daniel Pink" />
        </div>
        <div className={styles.tweetImage}>
          <Image src={tweet_StevenJohnson} alt="Steven Johnson" />
        </div>
      </div>
    </div>
  );
};

export default Tweets;
