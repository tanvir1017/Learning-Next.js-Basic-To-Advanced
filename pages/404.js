import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../Container/Navbar/Navbar";
import style from "../styles/Home.module.css";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <h2>404 | Page Not found</h2>
      <button className={style.backToHomeBtn}>
        <Link href="/">Back to home page</Link>
      </button>
      <button className={style.backToHomeBtn}>
        <a onClick={() => router.push("/")}>Back to home page</a>
      </button>
      <button className="btn--primary">
        <a>Page will be redirect after 5Sec</a>
      </button>
    </div>
  );
};

export default ErrorPage;
