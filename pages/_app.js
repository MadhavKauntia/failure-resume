import AuthContextProvider from "../store/AuthContextProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
