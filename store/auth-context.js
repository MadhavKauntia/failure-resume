import React, { useState } from "react";
import app from "../configs/firebase-config";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const AuthContext = React.createContext({
  token: "",
  refreshToken: "",
  fullName: "",
  isLoggedIn: false,
  initials: "",
  username: "",
  login: (token, refreshToken, name, username) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [initials, setInitials] = useState(null);
  const [username, setUsername] = useState(null);
  const [fullName, setFullName] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, refreshToken, name, username) => {
    setToken(token);
    setRefreshToken(refreshToken);
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

    let initial = [...name.matchAll(rgx)] || [];

    initial = (
      (initial.shift()?.[1] || "") + (initial.pop()?.[1] || "")
    ).toUpperCase();

    setInitials(initial);
    setUsername(username);
    setFullName(name);
  };

  const logoutHandler = () => {
    setToken(null);
    setRefreshToken(null);
    setInitials(null);
    setUsername(null);
    setFullName(null);
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const contextValue = {
    token,
    refreshToken,
    initials,
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

export default AuthContext;
