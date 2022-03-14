import React, { useState } from "react";
import styles from "../styles/Register.module.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Alert } from "@mui/material";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState(null);
  const onSubmit = async (data) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        fullName: data.registerName,
        username: data.registerUsername,
        email: data.registerEmail,
        password: data.registerPassword,
      },
    });
    console.log(res.status);
    if (res.ok) {
      setAlert({
        level: "info",
        message:
          "A verification mail has been sent to your email ID, please verify your email and then login.",
      });
    } else if (res.status === 406) {
      setAlert({
        level: "error",
        message: "This username already exists, please choose another.",
      });
    } else {
      setAlert({
        level: "error",
        message: "This user already exists. Please login.",
      });
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Register - Failure Resume</title>
        <meta
          name="description"
          content="Register on Failure Resume to start creating your resume."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={`${styles.login} ${styles["scale-in-center"]}`}>
        {alert && (
          <Alert severity={alert.level} onClose={() => setAlert(null)}>
            {alert.message}
          </Alert>
        )}
        <h1>Register on Failure Resume</h1>
        <div className={styles.box}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.field}>
              <label htmlFor="registerName">Full Name</label>
              <input
                id="registerName"
                placeholder="Full Name"
                type="text"
                {...register("registerName", { required: true })}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="registerUsername">Username</label>
              <input
                id="registerUsername"
                placeholder="Username"
                type="text"
                {...register("registerUsername", { required: true })}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="registerEmail">Email</label>
              <input
                id="registerEmail"
                placeholder="Email"
                type="email"
                {...register("registerEmail", { required: true })}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="registerPassword">Password</label>
              <input
                id="registerPassword"
                placeholder="Password"
                type="password"
                minLength={6}
                {...register("registerPassword", { required: true })}
              />
            </div>
            <div className={styles.submit}>
              <input type="submit" value="Register" />
            </div>
            <p className={styles.register}>
              Already have an account?{" "}
              <Link href="/login" passHref>
                <span className={styles.registerLink}>Login Now</span>
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
