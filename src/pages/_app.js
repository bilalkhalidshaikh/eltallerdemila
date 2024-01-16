import "nprogress/nprogress.css"; //styles of nprogress
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";

//firebase
import FirebaseContext from "../context/FirebaseContext";
import myFirebase from "../myFirebase";
import { Fragment, useEffect, useState } from "react";


//nprogress module
import Router from "next/router";
import NProgress from "nprogress";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

//redux
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ReduxProvider store={store}>
      <FirebaseContext.Provider value={myFirebase}>
        <Component {...pageProps} />
        {loading && <div className="preloader" />}
      </FirebaseContext.Provider>
    </ReduxProvider>
  );
}
