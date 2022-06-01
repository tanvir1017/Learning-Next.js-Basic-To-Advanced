import Link from "next/link";
import style from "../styles/Home.module.css";

const ErrorPage = () => {
  return (
    <div>
      <h2>404 | Page Not found</h2>
      <button className={style.backToHomeBtn}>
        <Link href="/">Back to home page</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
