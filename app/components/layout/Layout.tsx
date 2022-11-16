import { FC, PropsWithChildren, useState } from "react";
import styles from "./Layout.module.scss";
import Header from "../ui/header/Header";
import Footer from "../ui/footer/Footer";
import Head from "next/head";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Guitar Store</title>
      </Head>

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
