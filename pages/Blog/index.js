import Head from "next/head";
import Navbar from "../../Container/Navbar/Navbar";
import style from "../../styles/Home.module.css";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  return (
    <>
      <Navbar />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Learning purpose" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Learning Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Post blog</title>
      </Head>
      {data.slice(0, 5).map((post) => {
        return (
          <div key={post.id} className={style.blog}>
            <h2>{post.id}</h2>
            <h4>{post.title}</h4>
          </div>
        );
      })}
    </>
  );
};

export default index;
