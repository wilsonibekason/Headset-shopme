import React from "react";
import { Layout } from "../container";
import { StateContext } from "../context/stateContext";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster /> <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
