import React, { useContext, useState } from "react";
import styles from "../styles/Login.module.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import Link from "next/link";
import AuthContext from "../store/auth-context";
import { useRouter } from "next/router";
import { Alert } from "@mui/material";
import LoadingBar from "react-top-loading-bar";

const Login = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const [loginFail, setLoginFail] = useState(null);
  const [progress, setProgress] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setProgress(40);
    const res = await fetch("/api/login", {
      headers: {
        email: data.loginEmail,
        password: data.loginPassword,
      },
    });
    setProgress(70);
    if (res.ok) {
      const json = await res.json();
      authCtx.login(
        json.auth.stsTokenManager.accessToken,
        json.auth.stsTokenManager.refreshToken,
        json.fullName,
        json.username
      );
      router.push(`/edit/${json.username}`);
    } else if (res.status === 417) {
      setLoginFail(
        "Please verify your email ID by checking the mail sent to you."
      );
    } else {
      setLoginFail("Login Failed - Invalid Email or Password");
    }
    setProgress(100);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Login - Failure Resume</title>
        <meta
          name="description"
          content="Login to access and edit your Failure Resume."
        />
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
      <div className={`${styles.login} ${styles["scale-in-center"]}`}>
        {loginFail && (
          <Alert severity="error" onClose={() => setLoginFail(null)}>
            {loginFail}
          </Alert>
        )}
        <h1>Login to Failure Resume</h1>
        <div className={styles.box}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.field}>
              <label htmlFor="loginEmail">Email</label>
              <input
                id="loginEmail"
                placeholder="Email"
                type="email"
                {...register("loginEmail", { required: true })}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="loginPassword">Password</label>
              <input
                id="loginPassword"
                placeholder="Password"
                type="password"
                minLength={6}
                {...register("loginPassword", { required: true })}
              />
            </div>
            <div className={styles.submit}>
              <input type="submit" value="Login" />
            </div>
            <p className={styles.register}>
              Do not have an account?{" "}
              <Link href="/register" passHref>
                <span className={styles.registerLink}>Register Now</span>
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

export default Login;
