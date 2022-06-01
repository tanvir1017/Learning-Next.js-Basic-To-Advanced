/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Blog/NewsLetter">News Letter Blog</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
            <li>
              <Link href="/aboutPage">About</Link>
            </li>
            <li>
              <Link href="/Auth/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
      <h2>Hello all</h2>
      <img src="https://i.ibb.co/YLc0D6w/Javascript-Logo-1.png" alt="" />
      <h2>I love next js</h2>
    </div>
  );
}
