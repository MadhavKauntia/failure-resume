import React from "react";
import styles from "../styles/Register.module.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
        <h1>Register on Failure Resume</h1>
        <div className={styles.box}>
          <form onSubmit={handleSubmit(onSubmit)}>
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
