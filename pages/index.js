/* eslint-disable @next/next/no-img-element */

import Navbar from "../Container/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <div className={styles.container}>
        <Navbar />
        <h2>Hello all</h2>
        <img src="https://i.ibb.co/YLc0D6w/Javascript-Logo-1.png" alt="" />
        <h2>I love next js</h2>
      </div>
    </div>
  );
}
