import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Resume.module.css";
import { useRouter } from "next/router";
import ResumeEntry from "../components/ResumeEntry";
import Head from "next/head";
import { TwitterShareButton } from "react-twitter-embed";
import LoadingBar from "react-top-loading-bar";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Resume = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [resumeEntries, setResumeEntries] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(70);
    fetch("/api/resume", {
      method: "GET",
      headers: {
        username: router.query.username,
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((json) => {
          setName(json.fullName);
          setResumeEntries(json.resume_entries);
          setError(false);
        });
      } else {
        setError(true);
      }
      setProgress(100);
      setIsLoading(false);
    });
  }, [router.query.username]);
  return (
    <>
      <Head>
        <title>{name} - Failure Resume</title>
        <meta name="description" content={`${name}'s Failure Resume`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoadingBar
        progress={progress}
        color="#00adb5"
        shadow={true}
        height={4}
        onLoaderFinished={() => setProgress(0)}
      />
      <Header />
      {!isLoading && (
        <div className={styles.container}>
          {!error && (
            <>
              <div className={styles.header}>
                <h1>
                  Failure Resume of{" "}
                  <span className={styles.subtext}>{name}</span>
                </h1>
                <TwitterShareButton
                  url={`https://www.failureresume.co/${router.query.username}`}
                  options={{
                    text: `Check out ${name}'s Failure Resume!`,
                  }}
                />
              </div>
              <div className={styles.entries}>
                {resumeEntries.map((resumeEntry) => {
                  const date = new Date(resumeEntry.date);
                  return (
                    <ResumeEntry
                      key={resumeEntry.id}
                      time={months[date.getMonth()]
                        .concat(", ")
                        .concat(date.getFullYear())}
                      failure={resumeEntry.failure}
                      lesson={resumeEntry.lesson}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Resume;
