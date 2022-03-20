import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Edit.module.css";
import { useRouter } from "next/router";
import ResumeEntry from "../components/ResumeEntry";
import Head from "next/head";

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

  useEffect(() => {
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
    });
  }, [router.query.username]);
  return (
    <>
      <Head>
        <title>{name} - Failure Resume</title>
        <meta name="description" content="Edit your failure resume." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        {!error && (
          <>
            <h1>
              Failure Resume of <span className={styles.subtext}>{name}</span>
            </h1>
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
    </>
  );
};

export default Resume;
