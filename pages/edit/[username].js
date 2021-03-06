import React, { useContext, useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Edit.module.css";
import { useRouter } from "next/router";
import AuthContext from "../../store/auth-context";
import Error from "../error";
import ResumeEntry from "../../components/ResumeEntry";
import Head from "next/head";
import ResumeInput from "../../components/ResumeInput";
import { v4 as uuidv4 } from "uuid";
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

const Edit = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const [resumeEntries, setResumeEntries] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetch("/api/resume", {
      method: "GET",
      headers: {
        username: authCtx.username,
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((json) => {
          setResumeEntries(json.resume_entries);
        });
      }
    });
  }, [authCtx.username]);

  const addEntryHandler = (date, failure, lesson) => {
    setProgress(30);
    const newEntry = {
      id: uuidv4(),
      date: new Date(date.current.value),
      failure: failure.current.value,
      lesson: lesson.current.value,
    };
    setProgress(70);
    fetch("/api/resume", {
      method: "PUT",
      headers: {
        username: authCtx.username,
        authorization: authCtx.token,
      },
      body: JSON.stringify([...resumeEntries, newEntry]),
    }).then((res) => {
      if (res.ok) {
        setResumeEntries([...resumeEntries, newEntry]);
        date.current.value = null;
        failure.current.value = "";
        lesson.current.value = "";
      }
    });
    setProgress(100);
  };

  const deleteHandler = (id) => {
    setProgress(30);
    const updatedEntries = resumeEntries.filter((entry) => entry.id !== id);
    setProgress(70);
    fetch("/api/resume", {
      method: "PUT",
      headers: {
        username: authCtx.username,
        authorization: authCtx.token,
      },
      body: JSON.stringify(updatedEntries),
    }).then((res) => {
      if (res.ok) {
        setResumeEntries(updatedEntries);
      }
    });
    setProgress(100);
  };

  if (authCtx.username !== router.query.username) {
    return <Error />;
  }
  return (
    <>
      <Head>
        <title>{authCtx.fullName} - Failure Resume (Edit)</title>
        <meta name="description" content="Edit your failure resume." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        <LoadingBar
          progress={progress}
          color="#00adb5"
          shadow={true}
          height={4}
          onLoaderFinished={() => setProgress(0)}
        />
        <h1>
          Failure Resume of{" "}
          <span className={styles.subtext}>{authCtx.fullName}</span>
        </h1>
        <a href={`/${authCtx.username}`} target="_blank" rel="noreferrer">
          <button type="button">Resume Preview</button>
        </a>
        <div className={styles.entries}>
          {resumeEntries.map((resumeEntry) => {
            const date = new Date(resumeEntry.date);
            return (
              <ResumeEntry
                key={resumeEntry.id}
                id={resumeEntry.id}
                time={months[date.getMonth()]
                  .concat(", ")
                  .concat(date.getFullYear())}
                failure={resumeEntry.failure}
                lesson={resumeEntry.lesson}
                deleteHandler={deleteHandler}
                edit={true}
              />
            );
          })}
          <ResumeInput addEntryHandler={addEntryHandler} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Edit;
