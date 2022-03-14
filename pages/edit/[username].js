import React, { useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Edit.module.css";
import { useRouter } from "next/router";
import AuthContext from "../../store/auth-context";
import Error from "../error";

const Edit = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  if (authCtx.username !== router.query.username) {
    return <Error />;
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>
          Failure Resume of{" "}
          <span className={styles.subtext}>{authCtx.fullName}</span>
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Edit;
