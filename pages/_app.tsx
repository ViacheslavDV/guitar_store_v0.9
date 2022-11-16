import "../app/assets/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store/store";
import React from "react";
import { ThemeProvider } from "../app/providers/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
