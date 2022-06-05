/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import Navbar from "../Container/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Learning purpose" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Learning Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home page</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <div className={styles.container}>
          <Navbar />
          <h2>Hello all</h2>
          <img src="https://i.ibb.co/YLc0D6w/Javascript-Logo-1.png" alt="" />
          <h2>I love next js</h2>
        </div>
      </div>
    </>
  );
}
