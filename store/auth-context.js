import React from "react";

const AuthContext = React.createContext({
  token: "",
  refreshToken: "",
  fullName: "",
  isLoggedIn: false,
  username: "",
  login: (token, refreshToken, name, username) => {},
  logout: () => {},
});

export default AuthContext;
