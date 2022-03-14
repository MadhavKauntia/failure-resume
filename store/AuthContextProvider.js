import AuthContext from "./auth-context";
import app from "../configs/firebase-config";
import { getAuth, signOut } from "firebase/auth";
import Cookie from "js-cookie";
import { useState } from "react";

const auth = getAuth();

const AuthContextProvider = (props) => {
  const initialAuth = Cookie.get("failure_resume_auth")
    ? JSON.parse(Cookie.get("failure_resume_auth"))
    : null;
  const [token, setToken] = useState(initialAuth ? initialAuth.token : null);
  const [refreshToken, setRefreshToken] = useState(
    initialAuth ? initialAuth.refreshToken : null
  );
  const [username, setUsername] = useState(
    initialAuth ? initialAuth.username : null
  );
  const [fullName, setFullName] = useState(
    initialAuth ? initialAuth.name : null
  );

  const userIsLoggedIn = !!token;

  const loginHandler = (token, refreshToken, name, username) => {
    setToken(token);
    setRefreshToken(refreshToken);
    setUsername(username);
    setFullName(name);

    Cookie.set(
      "failure_resume_auth",
      JSON.stringify({
        token,
        refreshToken,
        name,
        username,
      })
    );
  };

  const logoutHandler = () => {
    setToken(null);
    setRefreshToken(null);
    setUsername(null);
    setFullName(null);
    signOut(auth)
      .then(() => {
        Cookie.remove("failure_resume_auth");
      })
      .catch((error) => {});
  };

  const contextValue = {
    token,
    refreshToken,
    isLoggedIn: userIsLoggedIn,
    username,
    fullName,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
